import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-success shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <div className="border-t border-border">

        {/* ── Hero ── */}
        <section className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border">
          {/* Left: Headline */}
          <div className="px-10 py-14 lg:py-16 flex flex-col justify-center gap-6">
            <span className="text-xs text-muted-foreground">Enterprise</span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Invoicing.<br />
              Enterprise<br />
              Efficiency.<br />
              Real Impact.
            </h1>
            <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
              Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease.
            </p>
            <div>
              <a
                href="#demo"
                className="inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Watch demo
              </a>
            </div>
            <ul className="space-y-3">
              {["Create invoices", "Track payments", "Manage finances"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form — dot-grid cell, no inner card */}
          <div className="px-10 py-14 lg:py-16 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:18px_18px] flex flex-col justify-center">
            <ContactForm />
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border-b border-border">
          {[
            { value: "99.9%",    label: "Uptime guarantee" },
            { value: "15X",      label: "Faster deployment" },
            { value: "24/7",     label: "Dedicated Support" },
            { value: "Seamless", label: "Integrations" },
          ].map((stat) => (
            <div key={stat.value} className="px-10 py-10">
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ── Collaboration ── */}
        <section id="product" className="border-b border-border">
          <div className="px-10 py-14 border-b border-border text-center">
            <span className="text-xs text-muted-foreground mb-3 block">Collaboration</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Work Together, Seamlessly</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Bring your team closer with built-in video calls, threaded discussions, shared boards, and smart scheduling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: "Video Meetings",
                strong: "Jump into face-to-face calls instantly.",
                rest: "Screen share, collaborate, and stay connected.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                ),
                title: "Threaded Comments",
                strong: "Keep conversations in context.",
                rest: "React with emoji and reply in threads without losing focus.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                ),
                title: "Task Boards",
                strong: "Visualize work at every stage.",
                rest: "Drag tasks across columns and track progress on a shared board.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                ),
                title: "Meeting Scheduling",
                strong: "Schedule without the back-and-forth.",
                rest: "Send invites, set agendas, and RSVP in one click.",
              },
            ].map((feature, i) => (
              <article
                key={feature.title}
                className={`px-10 py-12 flex flex-col gap-8 ${i >= 2 ? "border-t border-border" : ""}`}
              >
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                    <span className="text-foreground">{feature.icon}</span>
                    {feature.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-snug">
                    <strong className="text-foreground font-semibold">{feature.strong}</strong>{" "}
                    {feature.rest}
                  </p>
                </div>
                <div className="border border-border aspect-video bg-muted overflow-hidden flex flex-col">
                  <div className="h-6 border-b border-border bg-background flex items-center px-3 gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-border" />
                    <span className="w-2 h-2 rounded-full bg-border" />
                    <span className="w-2 h-2 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                    <div className="h-2 w-3/4 bg-border rounded-sm" />
                    <div className="h-2 w-1/2 bg-border rounded-sm" />
                    <div className="mt-2 flex-1 border border-border bg-background rounded-sm" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Security ── */}
        <section id="solutions" className="border-b border-border">
          <div className="px-10 py-14 border-b border-border text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">Enterprise-Grade Security</h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Protect your data with infrastructure built for the most demanding security and compliance standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border">
            <article className="col-span-2 px-10 py-12">
              <div className="w-12 h-12 bg-muted flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Zero-Trust Architecture</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg">
                Every request is verified, every access is logged, and every connection is encrypted — no implicit trust, ever.
              </p>
              <ul className="space-y-3 mb-8">
                {["Role-Based Access Controls", "Automated Security Audits", "Real-Time Incident Response"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex px-4 py-2 text-sm font-medium border border-border text-muted-foreground hover:bg-muted transition-colors">
                Learn more
              </a>
            </article>

            {/* Dark cell — intentional brand contrast, kept as raw value */}
            <div className="px-8 py-12 flex items-center justify-center bg-uswds-gray-90 overflow-hidden">
              <p className="text-xs font-mono text-uswds-gray-50 break-all text-center leading-relaxed opacity-50">
                {"/* Encrypted Data Stream Active */"}<br />
                M$0u7*L81iA1O6[6Ewm4DBhg&gt;ULp&gt;jt[odWBeG?wtI2gn!N#zz1Xfi*Paie8sKMcZz!?$w]tUncHkNe6l]5...
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { title: "SOC 2 Type II",   desc: "Independently audited security controls." },
              { title: "99.99% Uptime SLA", desc: "Guaranteed availability agreements." },
              { title: "GDPR Compliant",  desc: "Full data protection and consent management." },
              { title: "ISO 27001",       desc: "Certified information security processes." },
            ].map((cert) => (
              <div key={cert.title} className="px-8 py-8">
                <h4 className="font-semibold text-foreground mb-2 text-sm">{cert.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── More Features ── */}
        <section className="border-b border-border">
          <div className="px-10 py-12 border-b border-border">
            <h2 className="text-4xl font-bold text-foreground mb-3 leading-tight">Even More Built In</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Powerful tools that go beyond the basics — AI writing, global reach, and smart planning out of the box.
            </p>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { icon: "✦", title: "AI Writing Assistant", desc: "Draft, refine, and polish content instantly with context-aware AI suggestions." },
              { icon: "◎", title: "Global Infrastructure",  desc: "Deploy to edge locations worldwide and serve users with low latency." },
              { icon: "⬡", title: "Smart Planning",         desc: "Auto-schedule tasks dynamically based on team deadlines and capacity." },
            ].map((f) => (
              <div key={f.title} className="px-10 py-10">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3 text-sm">
                  <span className="text-muted-foreground text-base">{f.icon}</span>
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="border-b border-border">
          <div className="px-10 py-14 border-b border-border text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              What our customers are saying
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join the increasing number of customers who rely on Tailark for seamless operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {[
              {
                quote: `"Prime implemented our streaming optimization suite to reduce buffering by 62% during peak viewing hours. Unbelievable performance jump."`,
                author: "Shadcn",
                role: "Design Engineer",
                avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
              },
              {
                quote: `"Tailus has transformed the way I develop applications. Their extensive collection of components has significantly accelerated my workflow."`,
                author: "Theo Balick",
                role: "Backend Engineer",
                avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
              },
            ].map((t) => (
              <blockquote key={t.author} className="px-10 py-12 flex flex-col justify-between gap-8">
                <p className="text-xl text-muted-foreground leading-relaxed">{t.quote}</p>
                <footer className="flex items-center gap-4">
                  <Image src={t.avatar} alt={t.author} width={44} height={44} className="rounded-full border border-border" />
                  <div>
                    <cite className="block font-semibold text-foreground not-italic text-sm">{t.author}</cite>
                    <span className="text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-10 py-24 text-center border-b border-border">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            Create, Sell and Grow
          </h2>
          <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Join a community of over 1000+ companies and developers who have already discovered the power of Tailark.
          </p>
          <a
            href="/signup"
            className="inline-flex px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Start for free
          </a>
        </section>

      </div>

      <Footer />
    </div>
  );
}
