import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MailDesk } from "@/components/mail-desk";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mail",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function MailPage() {
  return <MailDesk fontClassName={inter.variable} />;
}
