import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Brayan Paucar",
    role: "Frontend Developer",
    avatar: "https://avatars.githubusercontent.com/u/3016?v=4",
    text: "Man, I love the button specifically because it looks like the Clerk auth components, and I was trying to replicate this with AI tools like V0. With Tailark it just works out of the box.",
  },
  {
    name: "Shadcn",
    role: "Design Engineer",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    text: "Prime implemented our streaming optimization suite to reduce buffering by 62% during peak viewing hours. Unbelievable performance jump.",
  },
  {
    name: "Theo Balick",
    role: "Backend Engineer",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
    text: "Tailus has transformed the way I develop applications. Their extensive collection of components has significantly accelerated my workflow.",
  },
  {
    name: "Sara Winters",
    role: "Product Designer",
    avatar: "https://avatars.githubusercontent.com/u/4284?v=4",
    text: "The design system is incredibly consistent and the component library saves us weeks on every project. We cut our design-to-dev handoff time in half.",
  },
  {
    name: "Miguel Torres",
    role: "CTO at Finova",
    avatar: "https://avatars.githubusercontent.com/u/7?v=4",
    text: "We evaluated five platforms before landing on Tailark. The security architecture was the deciding factor — zero-trust out of the box, no custom setup required.",
  },
  {
    name: "Priya Anand",
    role: "Full Stack Engineer",
    avatar: "https://avatars.githubusercontent.com/u/58?v=4",
    text: "I was skeptical at first but after a week I couldn't go back. The API is intuitive, docs are excellent, and the support team actually responds within hours.",
  },
  {
    name: "James Okafor",
    role: "Engineering Lead",
    avatar: "https://avatars.githubusercontent.com/u/100?v=4",
    text: "Shipping features 3× faster than before. Our engineers love the DX and our stakeholders love the polish. It's a rare win-win.",
  },
  {
    name: "Li Wei",
    role: "Indie Maker",
    avatar: "https://avatars.githubusercontent.com/u/200?v=4",
    text: "Built and shipped my SaaS in 2 weeks with Tailark. The invoicing module alone would have taken a month to build from scratch.",
  },
  {
    name: "Anna Kowalski",
    role: "VP of Engineering",
    avatar: "https://avatars.githubusercontent.com/u/300?v=4",
    text: "Our compliance team was worried about GDPR. Tailark's data handling and audit logs made the review process completely painless.",
  },
  {
    name: "Carlos Reyes",
    role: "Startup Founder",
    avatar: "https://avatars.githubusercontent.com/u/400?v=4",
    text: "The onboarding was smooth and the team behind Tailark clearly cares about developer experience. Every friction point I found was already in their roadmap.",
  },
  {
    name: "Emma Davis",
    role: "UX Lead",
    avatar: "https://avatars.githubusercontent.com/u/500?v=4",
    text: "The component library is beautifully designed. Our design system now extends Tailark instead of starting from scratch — it's the right call every time.",
  },
  {
    name: "Ravi Patel",
    role: "DevOps Engineer",
    avatar: "https://avatars.githubusercontent.com/u/600?v=4",
    text: "Deployment pipelines, monitoring, edge caching — all handled. We went from a 40-minute deploy cycle to under 5 minutes. Cannot overstate how big of a deal that is.",
  },
];

export default function WallOfLove() {
  return (
    <div className="bg-background min-h-screen">
      <Header />

      <div className="border-t border-border">

        {/* ── Hero header ── */}
        <div className="border-b border-border px-10 py-16">
          <span className="text-xs font-medium text-muted-foreground block mb-5">Community</span>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-none mb-5">
            Wall of love
          </h1>
          <p className="text-base text-muted-foreground max-w-md leading-relaxed">
            Real feedback from our community that fuels our passion to create.
          </p>
        </div>

        {/* ── Stats bar ── */}
        <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
          {[
            { value: "1,000+", label: "Happy customers" },
            { value: "4.9 / 5", label: "Average rating" },
            { value: "98%",    label: "Would recommend" },
          ].map((s) => (
            <div key={s.label} className="px-10 py-8">
              <p className="text-2xl font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Row 1: 3 cols */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Row 2: 2 cols (wide) */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {testimonials.slice(3, 5).map((t) => (
            <TestimonialCard key={t.name} t={t} large />
          ))}
        </div>

        {/* Row 3: 3 cols */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {testimonials.slice(5, 8).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Row 4: 2 cols (wide) */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {testimonials.slice(8, 10).map((t) => (
            <TestimonialCard key={t.name} t={t} large />
          ))}
        </div>

        {/* Row 5: 2 cards + CTA cell */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {testimonials.slice(10, 12).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
          {/* CTA cell — intentional brand-contrast dark cell */}
          <div className="px-10 py-12 flex flex-col items-start justify-center gap-5 bg-uswds-gray-90">
            <p className="text-lg font-semibold text-background leading-snug max-w-xs">
              Join over 1,000 teams building with Tailark.
            </p>
            <a
              href="/signup"
              className="inline-flex px-5 py-2.5 text-sm font-medium bg-background text-foreground hover:bg-muted transition-colors"
            >
              Get Started Free
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

function TestimonialCard({
  t,
  large = false,
}: {
  t: { name: string; role: string; avatar: string; text: string };
  large?: boolean;
}) {
  return (
    <div className={`px-10 ${large ? "py-14" : "py-10"} flex flex-col gap-5`}>
      <div className="flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={36}
          height={36}
          className="rounded-full border border-border"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
      <p className={`${large ? "text-lg" : "text-sm"} text-muted-foreground leading-relaxed`}>
        &ldquo;{t.text}&rdquo;
      </p>
    </div>
  );
}
