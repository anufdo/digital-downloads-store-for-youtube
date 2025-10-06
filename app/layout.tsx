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
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.4),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.4),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(34,197,94,0.25),transparent_40%)]" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 animate-pulse" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
