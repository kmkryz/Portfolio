import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaitlyn Kryzanski - Full Stack Developer",
  description: "Professional portfolio of Kaitlyn Kryzanski, a passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Kaitlyn Kryzanski" }],
  creator: "Kaitlyn Kryzanski",
  openGraph: {
    title: "Kaitlyn Kryzanski - Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaitlyn Kryzanski - Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
