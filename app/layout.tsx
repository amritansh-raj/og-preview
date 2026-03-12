import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OG Preview – 915-style Unfurl Test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
