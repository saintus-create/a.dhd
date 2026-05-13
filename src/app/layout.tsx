import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADHD Safety Hub — FDA FAERS Data Analysis",
  description:
    "Independent analysis of FDA FAERS adverse event data for ADHD stimulant medications, including Vyvanse, Adderall, and related drugs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
