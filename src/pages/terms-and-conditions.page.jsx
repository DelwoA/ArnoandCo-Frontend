import ContentWrapper from "@/components/ContentWrapper.jsx";

const TermsAndConditionsPage = () => {
  const lastUpdated = "August 2025";

  return (
    <>
      <title>Terms & Conditions, Privacy & Refund Policy — Arno & Co.</title>
      <meta
        name="description"
        content="Arno & Co. outlines clear terms, privacy safeguards, payment, and refund policies. Built for startups and small businesses to ensure trust and peace of mind."
      />
      <link
        rel="canonical"
        href="https://www.arnoandco.com/terms-and-conditions"
      />

      {/* Open Graph for Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arno & Co." />
      <meta
        property="og:title"
        content="Terms & Conditions, Privacy & Refund Policy — Arno & Co."
      />
      <meta
        property="og:description"
        content="Arno & Co. outlines clear terms, privacy safeguards, payment, and refund policies. Built for startups and small businesses to ensure trust and peace of mind."
      />
      <meta
        property="og:url"
        content="https://www.arnoandco.com/terms-and-conditions"
      />

      {/* Recommended image: 1200×630 PNG/JPG; absolute URL */}
      <meta
        property="og:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:image:alt" content="Arno & Co. Logo." />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Terms & Conditions, Privacy & Refund Policy — Arno & Co."
      />
      <meta
        name="twitter:description"
        content="Arno & Co. outlines clear terms, privacy safeguards, payment, and refund policies. Built for startups and small businesses to ensure trust and peace of mind."
      />
      <meta
        name="twitter:image"
        content="https://www.arnoandco.com/logo-url-preview.jpg"
      />
      <meta property="og:locale" content="en_US" />

      <main>
        <ContentWrapper>
          <div className="mt-10 sm:mt-11 md:mt-12 lg:mt-13 mb-7 sm:mb-8 md:mb-9 lg:mb-10">
            <article className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-10">
              <header>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Terms and Conditions
                </h1>

                <div className="mt-2">
                  <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 border border-slate-200">
                    Last updated: {lastUpdated}
                  </span>
                </div>

                {/* Intro */}
                <p className="mt-4 text-slate-700 text-base md:text-lg leading-relaxed">
                  These Terms and Conditions (“<strong>Terms</strong>”) govern
                  your use of the websites, landing pages, and software
                  deliverables operated or produced by
                  <strong> Arno &amp; Co.</strong> (“Arno &amp; Co.”, “we”,
                  “our”, “us”). By accessing our site or engaging our services,
                  you agree to these Terms. If you are entering into these Terms
                  on behalf of a company, you represent that you have authority
                  to bind that company.
                </p>

                {/* Key clauses as easy-to-scan bullets */}
                <ul className="mt-6 list-disc pl-6 md:pl-8 space-y-3 text-slate-700 text-base md:text-lg">
                  <li>
                    <strong>Scope of Services:</strong> We provide web and
                    application development, integration, and related advisory
                    services. Statements of Work (“<strong>SOWs</strong>”),
                    proposals, or emails may define specific scope, fees, and
                    timelines.
                  </li>
                  <li>
                    <strong>Acceptable Use:</strong> You agree not to misuse our
                    site or deliverables, including attempting unauthorized
                    access, scraping without consent, or violating applicable
                    laws.
                  </li>
                  <li>
                    <strong>Intellectual Property:</strong> Unless otherwise
                    stated in an SOW, you receive a license to use deliverables
                    for your business. Open-source components remain under their
                    respective licenses. Our internal tooling, frameworks, and
                    know-how are not transferred.
                  </li>
                  <li>
                    <strong>Client Materials:</strong> You warrant that any
                    content, trademarks, or data you provide are lawful and that
                    you have the right to use them.
                  </li>
                  <li>
                    <strong>Timelines &amp; Dependencies:</strong> Estimates
                    assume timely feedback, access, and approvals. Delays in
                    client inputs may shift schedules.
                  </li>
                  <li>
                    <strong>Fees &amp; Invoices:</strong> Fees and milestones
                    are defined in the SOW or proposal. Invoices are{" "}
                    <strong>due upon receipt</strong> unless otherwise stated.
                    Late payments may <strong>pause work</strong>.
                  </li>
                  <li>
                    <strong>Warranties &amp; Disclaimers:</strong> We perform
                    work with reasonable skill and care. Except as expressly
                    stated, services and deliverables are provided “
                    <strong>as is</strong>
                    ”. We do not warrant uninterrupted or error-free operation
                    of third-party platforms (e.g., hosting, payment gateways,
                    analytics).
                  </li>
                  <li>
                    <strong>Limitation of Liability:</strong> To the maximum
                    extent permitted by law, Arno &amp; Co. is not liable for
                    indirect, incidental, special, or consequential damages, or
                    loss of profits, revenue, data, or goodwill. Our aggregate
                    liability under these Terms will not exceed the amounts paid
                    to us for the work giving rise to the claim.
                  </li>
                  <li>
                    <strong>Changes to Terms:</strong> We may update these Terms
                    from time to time. Material changes will be indicated by
                    updating the “<strong>Last updated</strong>” date on this
                    page.
                  </li>
                  <li>
                    <strong>Contact:</strong> For questions about these Terms,
                    email{" "}
                    <a
                      href="mailto:hello@arnoandco.com"
                      className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                    >
                      hello@arnoandco.com
                    </a>
                    .
                  </li>
                </ul>
              </header>

              {/* Privacy */}
              <section id="privacy-policy" className="mt-13 scroll-mt-34">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  Privacy Policy
                </h2>
                <p className="mt-3 text-slate-700 text-base md:text-lg leading-relaxed">
                  We collect the <strong>minimum data necessary</strong> to
                  communicate with you, deliver projects, and improve our
                  services—typically contact details, project requirements, and
                  usage insights from analytics tools. Where applicable, we rely
                  on <strong>legitimate interests</strong> or{" "}
                  <strong>your consent</strong>. We <strong>do not sell</strong>{" "}
                  personal data. We use reputable processors (e.g., hosting
                  providers, analytics, email services, payment platforms)
                  subject to contractual safeguards. Data is retained only as
                  long as necessary for the purposes described or as required by
                  law. You may request access, correction, or deletion of your
                  personal data by contacting{" "}
                  <a
                    href="mailto:support@arnoandco.com"
                    className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                  >
                    support@arnoandco.com
                  </a>
                  .
                </p>
                <ul className="mt-4 list-disc pl-6 md:pl-8 space-y-2 text-slate-700">
                  <li>
                    <strong>Data minimization</strong> and purpose limitation.
                  </li>
                  <li>
                    <strong>No selling</strong> of personal data.
                  </li>
                  <li>
                    Use of <strong>reputable processors</strong> with
                    safeguards.
                  </li>
                  <li>
                    <strong>Retention</strong> only as long as necessary or
                    required by law.
                  </li>
                  <li>
                    Honor <strong>access/correction/deletion</strong> requests
                    where applicable.
                  </li>
                </ul>
              </section>

              {/* Payment */}
              <section id="payment-policy" className="mt-13 scroll-mt-34">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  Payment Policy
                </h2>
                <p className="mt-3 text-slate-700 text-base md:text-lg leading-relaxed">
                  Our standard structure for project work is{" "}
                  <strong>50% upfront</strong> and
                  <strong> 50% upon completion</strong>, unless an SOW specifies
                  otherwise. Invoices are issued at milestone delivery or
                  month-end for time-and-materials. We accept the payment
                  methods stated on the invoice. Work, licenses, and deployments
                  may be <strong>paused for overdue balances</strong>.
                </p>
                <ul className="mt-4 list-disc pl-6 md:pl-8 space-y-2 text-slate-700">
                  <li>
                    <strong>Billing cadence:</strong> milestones or month-end
                    (T&amp;M).
                  </li>
                  <li>
                    <strong>Terms:</strong> due upon receipt unless stated
                    otherwise.
                  </li>
                  <li>
                    <strong>Non-payment:</strong> may pause work and access to
                    deployments.
                  </li>
                </ul>
              </section>

              {/* Refund */}
              <section id="refund-policy" className="mt-13 scroll-mt-34">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                  Refund Policy
                </h2>
                <p className="mt-3 text-slate-700 text-base md:text-lg leading-relaxed">
                  Advance payments are{" "}
                  <strong>refundable within 24 hours</strong> of payment if no
                  discovery, design, or development work has started. Once work
                  begins, refunds may be granted only for{" "}
                  <strong>unused, unallocated time</strong> at our discretion.
                  Platform fees, third-party charges, and domain/hosting costs
                  are <strong>non-refundable</strong>. To request a refund,
                  email{" "}
                  <a
                    href="mailto:support@arnoandco.com"
                    className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                  >
                    support@arnoandco.com
                  </a>{" "}
                  with your invoice number.
                </p>
                <ul className="mt-4 list-disc pl-6 md:pl-8 space-y-2 text-slate-700">
                  <li>
                    Refund window: <strong>24 hours</strong> if no work has
                    started.
                  </li>
                  <li>
                    After start: pro-rated at our discretion for{" "}
                    <strong>unused time</strong>.
                  </li>
                  <li>
                    <strong>Exclusions:</strong> platform fees, third-party
                    charges, domain/hosting.
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </ContentWrapper>
      </main>
    </>
  );
};

export default TermsAndConditionsPage;
