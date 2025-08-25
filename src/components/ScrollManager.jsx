/**
 * @file ScrollManager.jsx
 * @summary Unified scroll behavior for route changes and hash-link navigation.
 *
 * WHAT THIS DOES
 * --------------
 * This component centralizes all scrolling logic so two common needs don't
 * fight each other:
 *
 * 1) **Normal route changes** (e.g., clicking "About", "Contact", etc.)
 *    -> Always scrolls to the **top of the new page**.
 *
 * 2) **Hash link navigation** (e.g., "/#websites" or "/terms-and-conditions#privacy-policy")
 *    -> Waits for the new route to render, then **smooth-scrolls to the element
 *       with that ID**, accounting for a sticky header via a small offset.
 *
 * WHY WE USE IT HERE
 * ------------------
 * Previously, two separate components competed:
 * - ScrollToTop: always scrolled to (0, 0) on route change.
 * - ScrollToHashElement: tried to scroll to a hash target.
 *
 * When navigating to a hash target from another page, "scroll to top" often
 * won the race—leaving the user stuck at the top rather than at the exact section.
 * This unified ScrollManager ensures **only one behavior runs** per navigation:
 * - If a hash is present → scroll to the target (with offset), do NOT scroll to top.
 * - If no hash → just scroll to top.
 *
 * HOW IT WORKS (TECHNICALLY)
 * --------------------------
 * - We observe `pathname` and `hash` from `react-router-dom`'s `useLocation()`.
 * - If `hash` is present:
 *     * We wait a frame (`requestAnimationFrame`) so the new page can paint.
 *     * We then try to find the element by ID and scroll to it, honoring any
 *       per-element `scroll-margin-top` by reading computed styles and
 *       applying that as an offset.
 *     * If the element isn't there yet (e.g., lazy/conditional render), we retry
 *       a few times in short intervals.
 * - If `hash` is not present:
 *     * We do a normal `window.scrollTo({ top: 0 })`.
 *
 * ACCESSIBILITY & UX NOTES
 * ------------------------
 * - Smooth scrolling helps orientation when jumping to in-page sections.
 * - Use CSS `scroll-margin-top` on target sections to account for sticky headers.
 *
 * CUSTOMIZATION
 * -------------
 * - Use Tailwind `scroll-mt-*` utilities for per-section offsets.
 * - MAX_TRIES / TRY_DELAY: adjust if sections render slowly (e.g., heavy content).
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// No default vertical offset; control spacing via Tailwind `scroll-mt-*` on targets.

// Retry policy for slow-rendering targets (e.g., lazy components).
const MAX_TRIES = 10; // retry up to ~500ms total (10 * 50ms)
const TRY_DELAY = 50; // ms between tries

export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const manualScrollRef = useRef(false);

  useEffect(() => {
    /**
     * CASE A — HASH NAVIGATION (e.g. "/#websites", "/terms-and-conditions#privacy-policy")
     * -----------------------------------------------------------------------------------
     * We have a hash → Do NOT scroll to top. Instead, wait for the route to render
     * and then smooth-scroll to the element with that ID, using an offset so it
     * won’t be hidden behind the sticky header.
     */
    if (manualScrollRef.current) {
      // A manual scroll is in progress (triggered by our click handler). Skip.
      return;
    }

    if (hash && hash.length > 1) {
      const id = hash.slice(1); // remove leading "#"
      let tries = 0;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          // Read per-element scroll margin top (e.g., Tailwind `scroll-mt-*`).
          const computed = window.getComputedStyle(el);
          const marginTopStr =
            computed.getPropertyValue("scroll-margin-top") ||
            // Fallback for engines exposing camelCase
            computed.scrollMarginTop ||
            "0";
          const marginTop = parseFloat(marginTopStr) || 0;

          const rect = el.getBoundingClientRect();
          const top = window.scrollY + rect.top - marginTop;

          window.scrollTo({ top, behavior: "smooth" });
          return; // success → stop retrying
        }

        // Element not found yet → retry briefly in case it mounts after paint
        if (tries < MAX_TRIES) {
          tries += 1;
          setTimeout(tryScroll, TRY_DELAY);
        }
      };

      // Allow a frame for React to paint after navigation, then attempt scroll
      requestAnimationFrame(tryScroll);
      return; // IMPORTANT: prevent the "scroll to top" fallback below from running
    }

    /**
     * CASE B — NORMAL ROUTE CHANGE (no hash in URL)
     * ---------------------------------------------
     * Typical navigation via top nav (Home, About, Contact, etc.).
     * We just scroll to the top to present the new page from its beginning.
     */
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  // Intercept same-page hash link clicks to provide consistent scrolling
  useEffect(() => {
    const onDocumentClick = (event) => {
      let node = event.target;
      while (node && node !== document.body) {
        if (node.tagName === "A") {
          const href = node.getAttribute("href");
          if (!href || !href.includes("#")) break;

          // Determine if this is a same-page hash link and extract target hash
          let samePath = false;
          let targetHash = "";
          if (href.startsWith("#")) {
            // react-router-hash-link typically renders href="#section"
            samePath = true;
            targetHash = href;
          } else {
            // Absolute or relative path with hash
            const url = new URL(href, window.location.origin);
            samePath = url.pathname === window.location.pathname;
            targetHash = url.hash || "";
          }

          // Intercept ALL same-page hash clicks for consistent behavior
          if (samePath && targetHash) {
            const id = targetHash.slice(1);
            if (!id) return;

            event.preventDefault();
            if (typeof event.stopImmediatePropagation === "function") {
              event.stopImmediatePropagation();
            }
            event.stopPropagation();

            // Mark manual scroll to avoid the effect also scrolling on hash change
            manualScrollRef.current = true;

            // Update the URL hash if it is changing
            if (targetHash !== window.location.hash) {
              try {
                window.history.pushState(null, "", targetHash);
              } catch (_) {
                // Fallback if pushState not allowed
                window.location.hash = targetHash;
              }
            }

            let tries = 0;
            const tryScroll = () => {
              const el = document.getElementById(id);
              if (el) {
                const computed = window.getComputedStyle(el);
                const marginTopStr =
                  computed.getPropertyValue("scroll-margin-top") ||
                  computed.scrollMarginTop ||
                  "0";
                const marginTop = parseFloat(marginTopStr) || 0;

                const rect = el.getBoundingClientRect();
                const top = window.scrollY + rect.top - marginTop;
                window.scrollTo({ top, behavior: "smooth" });
                // Clear manual flag shortly after initiating scroll
                setTimeout(() => {
                  manualScrollRef.current = false;
                }, 100);
                return;
              }

              if (tries < MAX_TRIES) {
                tries += 1;
                setTimeout(tryScroll, TRY_DELAY);
              }
            };

            requestAnimationFrame(tryScroll);
            return; // stop bubbling once handled
          }

          break; // anchor without same-hash scenario → do not intercept
        }
        node = node.parentElement;
      }
    };

    // Use capture phase to run before React's synthetic handlers (e.g., HashLink)
    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [pathname]);

  return null;
}
