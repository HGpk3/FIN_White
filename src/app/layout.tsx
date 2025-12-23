import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinWhite — финансовый консалтинг и аутсорсинг",
  description:
    "Финансовый консалтинг и управленческий аутсорсинг для МСП: прозрачность, контроль ДДС и рост управляемости бизнеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--color-background)] text-[var(--color-foreground)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
