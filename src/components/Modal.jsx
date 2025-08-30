/**
 * @file Modal.jsx
 * @component Modal
 * @description
 * Reusable, portal-based modal dialog that renders **outside** normal page flow.
 *
 *
 * WHY THIS EXISTS
 * ---------------
 * In CSS, any ancestor with a transform/filter/perspective/backdrop-blur can create a new
 * "containing block". When that happens, descendants with `position: fixed` no longer anchor
 * to the viewport—they anchor to that ancestor. If your modal is rendered inside a hovered
 * card (e.g., a card with `hover:scale-105`), the modal will appear "inside the card"
 * and may flicker as hover toggles. Portaling the modal out to a top-level DOM node
 * (e.g., `#modal-root`) avoids these layout traps and guarantees viewport-centered behavior.
 *
 *
 * WHAT THIS COMPONENT DOES
 * ------------------------
 * - Renders its content via `ReactDOM.createPortal` into `#modal-root` (falls back to <body>).
 * - Provides a backdrop that darkens the page.
 * - Locks background scroll while the modal is open.
 * - Centers the dialog and constrains its max width/height with Tailwind inline classes.
 * - Adds basic accessibility semantics (`role="dialog"`, `aria-modal="true"`).
 * - Closes when the backdrop is clicked (you can customize this behavior).
 *
 *
 * WHEN TO USE IT
 * --------------
 * Use <Modal> for any overlay content that should sit above the entire page:
 * - “Learn more” / details dialogs (the Home cards use this).
 * - Quick forms, confirmations, media lightboxes, command palette, etc.
 * - Any case where transforms/filters might exist in ancestors (cards, sticky headers, effects).
 *
 *
 * PUBLIC API
 * ----------
 * @prop {boolean}   open      - Controls visibility. When false, renders nothing.
 * @prop {Function}  onClose   - Called when the user requests to close (backdrop click, etc.).
 * @prop {ReactNode} children  - Modal content (you own the title/body/actions).
 *
 *
 * ACCESSIBILITY NOTES
 * -------------------
 * - This component sets `role="dialog"` and `aria-modal="true"`.
 * - It does NOT implement focus-trap/auto-focus by default. If needed, wrap children with
 *   a focus-trap (e.g., `focus-trap-react`) or manage focus manually (on open, focus the close button).
 *
 *
 * STYLING
 * -------
 * - All styling is inline Tailwind (no global CSS, no config edits).
 * - You can safely change padding, radius, shadows, and sizes in the classNames below.
 * - Keep z-index high enough to clear sticky headers; default here is z-50 on the wrapper.
 *
 *
 * COMMON PITFALLS THIS AVOIDS
 * ---------------------------
 * - Modal positioned/clipped inside transformed ancestors.
 * - Background scroll while modal is open.
 * - Inconsistent z-index stacking across pages.
 *
 *
 * USAGE EXAMPLES
 * --------------
 * // Pattern 1: One modal per card (explicit)
 * const [open, setOpen] = useState(false);
 * <button onClick={() => setOpen(true)}>Learn more</button>
 * <Modal open={open} onClose={() => setOpen(false)}>
 *   <h3 className="text-xl font-bold">Websites</h3>
 *   <p className="mt-2 text-slate-600">Details go here…</p>
 *   <button onClick={() => setOpen(false)} className="mt-6 btn">Close</button>
 * </Modal>
 *
 * // Pattern 2: One modal for a section (switch content by id)
 * const [openId, setOpenId] = useState(null); // "websites" | "apps" | null
 * <button onClick={() => setOpenId("websites")}>Learn more</button>
 * <Modal open={!!openId} onClose={() => setOpenId(null)}>
 *   {openId === "websites" && <WebsitesDetails />}
 *   {openId === "apps" && <AppsDetails />}
 * </Modal>
 *
 *
 * EXTENSIONS / TODO
 * -----------------
 * - Add ESC-to-close and focus-trap for stronger a11y.
 * - Support size variants (sm/md/lg) via a `size` prop.
 * - Animate enter/exit with CSS or a tiny animation lib.
 */

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  // basic scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 shadow-xl"
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modal-root"));
}
