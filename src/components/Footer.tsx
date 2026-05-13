import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border-b border-border">
        <div className="col-span-2 px-10 py-12">
          <Link href="/a.dhd/" className="block mb-4 text-xl font-bold text-foreground tracking-tight">
            ADHD Safety Hub
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Independent analysis of FDA FAERS adverse event data for ADHD stimulant medications.
            Not medical advice. Data sourced from public FDA databases.
          </p>
        </div>
        <div className="px-8 py-12">
          <h4 className="font-semibold text-foreground mb-4 text-sm">Documentation</h4>
          <ul className="space-y-3">
            <li><Link href="/a.dhd/docs/safety-data"    className="text-sm text-muted-foreground hover:text-foreground transition-colors">Safety Data</Link></li>
            <li><Link href="/a.dhd/docs/studies"         className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studies</Link></li>
            <li><Link href="/a.dhd/docs/prescribing-context" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Prescribing Context</Link></li>
            <li><Link href="/a.dhd/docs/vyvanse-review"  className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vyvanse Review</Link></li>
          </ul>
        </div>
        <div className="px-8 py-12">
          <h4 className="font-semibold text-foreground mb-4 text-sm">About</h4>
          <ul className="space-y-3">
            <li><Link href="/a.dhd/docs/about"   className="text-sm text-muted-foreground hover:text-foreground transition-colors">About This Project</Link></li>
            <li><Link href="/a.dhd/docs/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            <li>
              <a href="https://www.fda.gov/drugs/drug-approvals-and-databases/fda-adverse-event-reporting-system-faers"
                target="_blank" rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FDA FAERS ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          Data sourced from FDA FAERS public database. Not affiliated with the FDA.
        </span>
        <span className="text-xs text-muted-foreground">For informational purposes only — not medical advice.</span>
      </div>
    </footer>
  );
}
