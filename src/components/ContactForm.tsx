"use client";

import { useState } from "react";

const field =
  "w-full px-3 py-2.5 text-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors";
const label = "block text-sm font-medium text-foreground mb-1.5";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center gap-4">
        <div className="w-9 h-9 bg-success/10 border border-success/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">Message sent</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">We&apos;ll get back to you within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-1">Talk to our team</h2>
      <p className="text-sm text-muted-foreground mb-6">Fill out the form and we&apos;ll be in touch within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={label}>Full name</label>
            <input type="text" required placeholder="John Smith" className={field} />
          </div>
          <div>
            <label className={label}>Work Email</label>
            <input type="email" required placeholder="john@company.com" className={field} />
          </div>
        </div>

        <div>
          <label className={label}>Country/Region</label>
          <select className={field + " text-muted-foreground"}>
            <option value="">Select Country/Region</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>France</option>
            <option>Japan</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className={label}>Company Website</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 py-2.5 text-sm border border-r-0 border-border bg-muted text-muted-foreground shrink-0">
              https://
            </span>
            <input
              type="text"
              placeholder="tailark.com"
              className={field + " border-l-0"}
            />
          </div>
        </div>

        <div>
          <label className={label}>Job function</label>
          <select className={field + " text-muted-foreground"}>
            <option value="">Select Job Function</option>
            <option>Engineering</option>
            <option>Product</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Sales</option>
            <option>Finance</option>
            <option>Operations</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className={label}>Message</label>
          <textarea
            rows={4}
            placeholder="Tell us about your needs..."
            className={field + " resize-none"}
          />
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            By submitting you agree to our{" "}
            <a href="/privacy" className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors">
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Get in touch
          </button>
        </div>
      </form>
    </div>
  );
}
