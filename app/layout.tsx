import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ["latin"], weight: '900', variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: "Мама, с днём рождения!",
  description: "чиназес",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
