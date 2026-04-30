import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { playfairDisplay, workSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/images/jz-favicon.svg",
  },
  title: "Jennifer Zaragoza — a cool Product Designer",
  description:
    "Product Designer with 6 years of experience in Experience Design, Design Thinking, and Product Strategy in the B2B SaaS space.",
  openGraph: {
    title: "Jennifer Zaragoza — a cool Product Designer",
    description:
      "Product Designer specializing in Experience Design, Design Thinking, and Product Strategy.",
    url: "https://www.jenniflor.com",
    siteName: "Jennifer Zaragoza",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennifer Zaragoza — a cool Product Designer",
    description:
      "Product Designer specializing in Experience Design, Design Thinking, and Product Strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${workSans.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-jz-bg)] text-[var(--color-jz-text)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
