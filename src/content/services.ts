import type { LucideIcon } from "lucide-react";
import { Banknote, Smartphone, ReceiptText, ShieldCheck, Landmark } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export type FeaturedService = Service & { description: string };

export const featuredService: FeaturedService = {
  icon: Banknote,
  title: "UPI Cashpoint",
  description:
    "Cardless cash withdrawal using any UPI app. Customers scan, authorise with a UPI PIN, and receive cash instantly — no ATM card needed.",
  items: ["Cardless withdrawal", "Works with any UPI app", "Instant, secure payout"],
};

export const services: Service[] = [
  { icon: Smartphone, title: "Mobile Recharge", items: ["Prepaid", "DTH", "FASTag"] },
  { icon: ReceiptText, title: "Bill Payments", items: ["Electricity", "Water", "Gas", "Broadband"] },
  { icon: ShieldCheck, title: "Insurance", items: ["Life", "Health", "Motor"] },
  { icon: Landmark, title: "More Services", items: ["BBPS", "Utility", "Rural"] },
];