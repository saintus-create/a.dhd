import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

const keyFindings = [
  { value: "5,803",    label: "Adverse events",      sub: "Vyvanse FAERS reports (primary)" },
  { value: "1.8×",     label: "Higher abuse risk",   sub: "vs. comparator stimulants" },
  { value: "23 drugs", label: "Comparators reviewed",sub: "across stimulant class" },
  { value: "FAERS",    label: "Primary data source",  sub: "FDA public adverse event database" },
];

const sections = [
  {
    href: "/a.dhd/docs/safety-data",
    title: "Safety Data",
    desc: "Quantitative FAERS adverse event counts, abuse/dependence signals, and comparative analysis across ADHD stimulant medications.",
  },
  {
    href: "/a.dhd/docs/studies",
    title: "Clinical Studies",
    desc: "Human abuse potential study findings, controlled trials, and post-market surveillance data for Vyvanse and related drugs.",
  },
  {
    href: "/a.dhd/docs/prescribing-context",
    title: "Prescribing Context",
    desc: "Real-world prescribing trends, off-label use patterns, and regulatory labeling requirements for ADHD stimulants.",
  },
  {
    href: "/a.dhd/docs/vyvanse-review",
    title: "Vyvanse Full Review",
    desc: "Comprehensive FDA-style safety review covering efficacy, abuse potential, post-market experience, ethics, and recommendations.",
  },
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <div className="border-t border-border">

        {/* ── Hero ── */}
        <section className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border">
          <div className="px-10 py-14 lg:py-16 flex flex-col justify-center gap-6">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">FDA FAERS Analysis</span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              ADHD<br />
              Medication<br />
              Safety Data.
            </h1>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              Independent analysis of FDA adverse event reports for ADHD stimulant medications.
              Data-driven safety signals, not medical advice.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/a.dhd/docs"
                className="inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors">
                Explore Documentation
              </Link>
              <Link href="/a.dhd/docs/safety-data"
                className="inline-flex items-center px-4 py-2 text-sm font-medium border border-border text-muted-foreground hover:bg-muted transition-colors">
                Safety Data
              </Link>
            </div>
            <ul className="space-y-3">
              {[
                "FDA FAERS public database — primary source",
                "Vyvanse, Adderall, and 23 comparator drugs",
                "Abuse, dependence, and misuse signal analysis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <ShieldIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Findings panel */}
          <div className="px-10 py-14 lg:py-16 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:18px_18px] flex flex-col justify-center gap-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Key Findings</p>
            <div className="grid grid-cols-2 gap-3">
              {keyFindings.map((f) => (
                <div key={f.value} className="border border-border bg-background p-4 flex flex-col gap-1">
                  <span className="text-2xl font-bold text-foreground">{f.value}</span>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                  <span className="text-xs text-muted-foreground">{f.sub}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Source: FDA FAERS public database. This analysis is independent and not affiliated with the FDA.
              For informational purposes only.
            </p>
          </div>
        </section>

        {/* ── Documentation Sections ── */}
        <section className="border-b border-border">
          <div className="px-10 py-12 border-b border-border">
            <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-3">Documentation</span>
            <h2 className="text-4xl font-bold text-foreground leading-tight">What's Covered</h2>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
            {sections.map((s, i) => (
              <article key={s.title}
                className={`px-10 py-12 flex flex-col gap-4 ${i >= 2 ? "border-t border-border" : ""}`}>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link href={s.href}
                  className="text-sm font-medium text-primary hover:underline underline-offset-2 self-start">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <section className="px-10 py-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Important Notice</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This site presents data analysis for informational and research purposes only.
              It is not medical advice and is not affiliated with the FDA.
              Consult a qualified healthcare provider before making any medication decisions.
              Data sourced from the{" "}
              <a href="https://www.fda.gov/drugs/drug-approvals-and-databases/fda-adverse-event-reporting-system-faers"
                className="text-foreground underline underline-offset-2 hover:no-underline"
                target="_blank" rel="noopener noreferrer">
                FDA FAERS public database
              </a>.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
