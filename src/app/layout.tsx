import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

/* Public Sans is the USWDS primary typeface.
   Weights: 300 light, 400 regular, 500 medium, 600 semi, 700 bold */
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tailark — Enterprise Invoicing & Collaboration Platform",
  description:
    "Our Enterprise Invoicing solution simplifies billing processes, enhances financial oversight, and ensures compliance with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
