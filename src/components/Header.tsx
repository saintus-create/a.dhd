import Link from "next/link";

const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Wall of Love", href: "/wall-of-love" },
  { label: "Privacy", href: "/privacy" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="grid grid-cols-[auto_1fr_auto] divide-x divide-border">
        <div className="px-8 py-4 flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
            Tailark.
          </Link>
        </div>

        <nav className="hidden lg:flex items-center px-8 gap-7" aria-label="Main Navigation">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-8 py-4 flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
