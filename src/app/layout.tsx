import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cashlo – Aapka Vishwas, Aapki Kamai",
    template: "%s | Cashlo",
  },
  description:
    "Cashlo brings UPI Cash Point, mobile & DTH recharge, BBPS, and real-time commission tracking to every dukandaar — all in one app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}