import type { Metadata } from "next";
import { MailDesk } from "@/components/mail-desk";

export const metadata: Metadata = {
  title: "Mail",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function MailPage() {
  return <MailDesk />;
}
