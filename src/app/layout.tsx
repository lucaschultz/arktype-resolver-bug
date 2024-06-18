import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arktype Resolver Test",
  description: "Check wether the Arktype hook form resolver works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full max-h-screen" lang="en">
      <body className="h-full max-h-screen bg-neutral-50">{children}</body>
    </html>
  );
}
