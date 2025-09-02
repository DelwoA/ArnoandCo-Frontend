import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const RootLayout = () => {
  // Build it as a JS object (comments go OUTSIDE the object, not inside the JSON)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.arnoandco.com/#organization",
    name: "Arno & Co.",
    legalName: "Arno & Co.",
    url: "https://www.arnoandco.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.arnoandco.com/logo-primary.png",
      width: 1563,
      height: 1563,
    },
    image: "https://www.arnoandco.com/logo-primary.png",
    sameAs: [
      "https://www.facebook.com/arnoandcohq",
      "https://www.linkedin.com/company/arnoandco/",
      "https://www.instagram.com/arnoandcohq/",
      "https://wa.me/94742391833",
    ],
    brand: {
      "@type": "Brand",
      name: "Arno & Co.",
      logo: "https://www.arnoandco.com/logo-primary.png",
    },
    email: "hello@arnoandco.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@arnoandco.com",
        telephone: "+94742391833",
        availableLanguage: ["en"],
      },
    ],
    foundingDate: "2025-08-01",

    // Organization-level coverage (your stated markets)
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Sri Lanka" },
    ],

    // Declare US (Wyoming) as the base without implying a street address
    foundingLocation: { "@type": "Place", name: "Wyoming, United States" },
    location: { "@type": "AdministrativeArea", name: "Wyoming" },

    department: [
      // Sri Lanka branch (physical)
      {
        "@type": "LocalBusiness",
        "@id": "https://www.arnoandco.com/#branch-piliyandala",
        name: "Arno & Co. — Piliyandala",
        // url: "https://www.arnoandco.com/lk/piliyandala",
        email: "hello@arnoandco.com",
        telephone: "+94742391833",
        address: {
          "@type": "PostalAddress",
          streetAddress: "95/A1, Kudamaduwa Road, Honnanthara South",
          addressLocality: "Piliyandala",
          addressRegion: "Western Province",
          postalCode: "10300",
          addressCountry: "LK",
        },
        areaServed: [{ "@type": "Country", name: "Sri Lanka" }],
        parentOrganization: {
          "@id": "https://www.arnoandco.com/#organization",
        },
      },

      // US branch (remote/service area) — choose one of the two versions
      {
        "@type": "LocalBusiness",
        "@id": "https://www.arnoandco.com/#branch-us",
        name: "Arno & Co. — United States",
        // url: "https://www.arnoandco.com/us/",
        email: "hello@arnoandco.com",
        // telephone: "+1-XXX-XXX-XXXX",
        address: {
          "@type": "PostalAddress",
          addressRegion: "WY",
          addressCountry: "US",
        },
        areaServed: [{ "@type": "Country", name: "United States" }],
        parentOrganization: {
          "@id": "https://www.arnoandco.com/#organization",
        },
      },
    ],
  };

  return (
    <>
      {/* Valid JSON-LD injection (must be a string) */}
      <script
        type="application/ld+json"
        // pretty-print with 2 spaces so it’s readable in page source
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd, null, 2) }}
      />

      <div className="bg-gray-100">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
