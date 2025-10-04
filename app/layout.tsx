import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Digital Downloads Store",
  description: "Purchase and download digital products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 [mask-image:radial-gradient(circle_at_center,black,transparent)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(147,197,253,0.25),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(96,165,250,0.2),transparent_45%)]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
