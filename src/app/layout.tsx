import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter();

export const metadata: Metadata = {
  title: "Rony Kati",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn("h-full antialiased", inter.className)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,transparent_40%,rgb(125_17_240/0.5)_100%)] bg-background bg-fixed">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
