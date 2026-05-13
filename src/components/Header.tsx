import Link from "next/link";

const navLinks = [
  { label: "Safety Data",        href: "/a.dhd/docs/safety-data" },
  { label: "Studies",            href: "/a.dhd/docs/studies" },
  { label: "Vyvanse Review",     href: "/a.dhd/docs/vyvanse-review" },
  { label: "About",              href: "/a.dhd/docs/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="grid grid-cols-[auto_1fr_auto] divide-x divide-border">
        <div className="px-8 py-4 flex items-center">
          <Link href="/a.dhd/" className="text-xl font-bold tracking-tight text-foreground">
            ADHD Safety Hub
          </Link>
        </div>
        <nav className="hidden lg:flex items-center px-8 gap-7" aria-label="Main Navigation">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-8 py-4 flex items-center">
          <Link href="/a.dhd/docs"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors">
            View Docs
          </Link>
        </div>
      </div>
    </header>
  );
}
