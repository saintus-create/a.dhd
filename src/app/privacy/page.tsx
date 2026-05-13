"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const navSections = [
  { id: "information-collect", label: "1. Information We Collect" },
  { id: "how-we-use",          label: "2. How We Use Your Information" },
  { id: "information-sharing", label: "3. Information Sharing" },
  { id: "data-security",       label: "4. Data Security" },
  { id: "data-retention",      label: "5. Data Retention" },
  { id: "your-rights",         label: "6. Your Rights" },
  { id: "cookies",             label: "7. Cookies" },
  { id: "children-privacy",    label: "8. Children's Privacy" },
  { id: "international-transfers", label: "9. International Transfers" },
  { id: "changes-policy",      label: "10. Changes to This Policy" },
  { id: "contact-us",          label: "11. Contact Us" },
];

function SidebarNav({ active }: { active: string }) {
  return (
    <nav className="space-y-0.5">
      <p className="text-xs font-semibold text-muted-foreground mb-4 px-2">On this page</p>
      {navSections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`block px-2 py-1.5 text-sm transition-colors leading-snug ${
            active === s.id
              ? "text-foreground font-medium bg-muted"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState("information-collect");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-20% 0% -60% 0%", threshold: 0 }
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <div className="border-t border-border">

        {/* Hero header */}
        <div className="border-b border-border px-10 py-14">
          <p className="text-xs font-medium text-muted-foreground mb-4">Legal</p>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-none mb-6">
            Privacy<br />Policy
          </h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>
              Effective date: <strong className="text-foreground font-medium">January 1, 2026</strong>
            </span>
            <span className="w-px h-4 bg-border" />
            <span>
              Last updated: <strong className="text-foreground font-medium">May 12, 2026</strong>
            </span>
          </div>
        </div>

        {/* 4-col grid: 1 sidebar + 3 content */}
        <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border">

          {/* Sidebar */}
          <aside className="px-8 py-10">
            <div className="lg:sticky lg:top-24">
              <SidebarNav active={activeId} />

              <div className="mt-10 pt-8 border-t border-border space-y-3">
                <p className="text-xs font-semibold text-muted-foreground mb-4">Related</p>
                {["Terms of Service", "Cookie Policy", "Data Processing Agreement", "Security Overview"].map((item) => (
                  <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 px-10 lg:px-16 py-12">
            <article className="max-w-2xl space-y-0">

              <Section id="information-collect" title="1. Information We Collect">
                <p>
                  We collect information you provide directly, information collected automatically when you use our services,
                  and information from third-party sources. This includes:
                </p>
                <SubHeading>Personal Information:</SubHeading>
                <BulletList items={[
                  "Name, email address, and contact details",
                  "Billing and payment information",
                  "Account credentials and profile data",
                  "Communications you send us",
                ]} />
                <SubHeading>Automatically Collected Information:</SubHeading>
                <BulletList items={[
                  "IP address and device identifiers",
                  "Browser type, language, and settings",
                  "Pages visited, clicks, and time spent",
                  "Referring URLs and search terms",
                ]} />
              </Section>

              <Section id="how-we-use" title="2. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <BulletList items={[
                  "Provide, maintain, and improve our services",
                  "Process transactions and send related information",
                  "Send promotional communications (with your consent)",
                  "Monitor and analyze trends, usage, and activities",
                  "Detect, investigate, and prevent fraudulent or illegal activity",
                  "Comply with legal obligations",
                  "Personalize your experience on our platform",
                ]} />
              </Section>

              <Section id="information-sharing" title="3. Information Sharing">
                <p>
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <BulletList items={[
                  "With service providers who perform services on our behalf",
                  "With business partners with your consent",
                  "In connection with a merger, acquisition, or sale of assets",
                  "To comply with legal obligations or respond to lawful requests",
                  "To protect the rights, property, or safety of our users or others",
                  "In aggregated or anonymized form that cannot reasonably identify you",
                ]} />
              </Section>

              <Section id="data-security" title="4. Data Security">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <BulletList items={[
                  "AES-256 encryption for data at rest",
                  "TLS 1.3 for all data in transit",
                  "Regular third-party security audits and penetration testing",
                  "Role-based access controls and least-privilege principles",
                  "24/7 security monitoring and incident response",
                ]} />
                <p>
                  However, no method of transmission over the Internet is 100% secure. We encourage you to use strong,
                  unique passwords and to notify us immediately of any unauthorized access to your account.
                </p>
              </Section>

              <Section id="data-retention" title="5. Data Retention">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was
                  collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <p>
                  When we no longer need your information, we securely delete or anonymize it. You may request deletion
                  of your personal data at any time, subject to certain legal exceptions.
                </p>
              </Section>

              <Section id="your-rights" title="6. Your Rights">
                <p>Depending on your location, you may have the right to:</p>
                <BulletList items={[
                  "Access the personal information we hold about you",
                  "Correct inaccurate or incomplete information",
                  "Request deletion of your personal data",
                  "Object to or restrict processing of your data",
                  "Data portability — receive your data in a structured format",
                  "Withdraw consent at any time where processing is based on consent",
                  "Lodge a complaint with a supervisory authority",
                ]} />
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:privacy@company.com" className="text-foreground underline underline-offset-2 hover:no-underline">
                    privacy@company.com
                  </a>.
                  We will respond to your request within 30 days.
                </p>
              </Section>

              <Section id="cookies" title="7. Cookies">
                <p>
                  We use cookies and similar technologies to collect information about your browsing activities,
                  remember your preferences, and analyze how our services are used. You can manage your cookie
                  preferences through your browser settings.
                </p>
                <div className="grid grid-cols-2 gap-4 my-2">
                  {[
                    { type: "Essential",  desc: "Required for the service to function. Cannot be disabled." },
                    { type: "Analytics",  desc: "Help us understand how visitors interact with our pages." },
                    { type: "Functional", desc: "Enable enhanced features and personalization." },
                    { type: "Marketing",  desc: "Used to deliver relevant advertisements." },
                  ].map((c) => (
                    <div key={c.type} className="border border-border p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">{c.type}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="children-privacy" title="8. Children's Privacy">
                <p>
                  Our services are not directed to children under 16. We do not knowingly collect personal information
                  from children under 16. If we learn that we have collected such information, we will take steps to
                  delete it promptly. If you believe we may have collected information about a child, please contact us
                  immediately.
                </p>
              </Section>

              <Section id="international-transfers" title="9. International Transfers">
                <p>
                  Your information may be transferred to and processed in countries other than your own, including the
                  United States. We ensure appropriate safeguards are in place for such transfers, including:
                </p>
                <BulletList items={[
                  "Standard contractual clauses approved by the European Commission",
                  "Adequacy decisions for transfers to approved countries",
                  "Binding corporate rules for intra-group transfers",
                ]} />
              </Section>

              <Section id="changes-policy" title="10. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new policy on this page and updating the effective date. For significant changes, we may
                  also send an email notification.
                </p>
                <p>
                  Your continued use of our services after any changes constitutes your acceptance of the updated policy.
                  We encourage you to review this policy periodically.
                </p>
              </Section>

              <Section id="contact-us" title="11. Contact Us">
                <p>
                  For questions, concerns, or requests about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="border border-border p-6 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5">Data Protection Officer</p>
                    <a href="mailto:privacy@company.com" className="text-sm text-foreground underline underline-offset-2 hover:no-underline">
                      privacy@company.com
                    </a>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5">Mailing Address</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Tailark, Inc.<br />
                      123 Enterprise Way<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                  <div className="w-full h-px bg-border" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5">Response Time</p>
                    <p className="text-sm text-muted-foreground">We aim to respond within <strong className="text-foreground">30 days</strong>.</p>
                  </div>
                </div>
              </Section>

            </article>
          </main>
        </div>

        <Footer />

      </div>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="pt-14 first:pt-0 pb-14 border-b border-border last:border-0 scroll-mt-28">
      <h2 className="text-2xl font-bold text-foreground mb-5 leading-snug">{title}</h2>
      <div className="space-y-4 text-uswds-sm leading-uswds-5 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold text-foreground mt-2">{children}</h3>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-uswds-sm text-muted-foreground">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-border shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
