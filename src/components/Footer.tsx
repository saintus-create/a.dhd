import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-border border-b border-border">
        <div className="col-span-2 px-10 py-12">
          <Link href="/" className="block mb-4 text-xl font-bold text-foreground tracking-tight">
            Tailark.
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            A premium platform for building robust, AI-powered applications efficiently.
          </p>
        </div>

        <div className="px-8 py-12">
          <h4 className="font-semibold text-foreground mb-4 text-sm">Product</h4>
          <ul className="space-y-3">
            <li><Link href="/#product"     className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
            <li><Link href="/#solutions"   className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions</Link></li>
            <li><Link href="/wall-of-love" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Wall of Love</Link></li>
            <li><Link href="#"             className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mobile App</Link></li>
          </ul>
        </div>

        <div className="px-8 py-12">
          <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
          <ul className="space-y-3">
            <li><Link href="#"        className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="#"        className="text-sm text-muted-foreground hover:text-foreground transition-colors">License</Link></li>
            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="px-8 py-12">
          <h4 className="font-semibold text-foreground mb-4 text-sm">Community</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter/X" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">© 2026 Tailark, All rights reserved.</span>
        <div className="flex items-center gap-2 bg-muted border border-border px-3 py-1.5">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-success" />
          </span>
          <span className="text-xs text-muted-foreground font-medium">All Systems Normal</span>
        </div>
      </div>
    </footer>
  );
}
