import type { Metadata } from "next";
import "./globals.css";
import { Figtree, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const figtreeHeading = Figtree({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  description: "Rony's corner of the world wide web.",
  title: "Rony Kati",
};

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn(
        "antialiased",
        "font-sans",
        geist.variable,
        figtreeHeading.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
