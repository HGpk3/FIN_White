import type { Metadata } from "next";
import "./globals.css";

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
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
