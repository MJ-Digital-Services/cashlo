import type { LucideIcon } from "lucide-react";
import { Banknote, Smartphone, ReceiptText, ShieldCheck, Landmark } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: Banknote,
    title: "UPI Cashpoint",
    items: ["Cardless cash withdrawal", "Works with any UPI app", "Instant, secure payout"],
  },
  {
    icon: Smartphone,
    title: "Mobile Recharge",
    items: ["Prepaid mobile", "DTH recharge", "FASTag recharge"],
  },
  {
    icon: ReceiptText,
    title: "Bill Payments",
    items: ["Electricity & water", "Gas & broadband", "Mobile postpaid"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance Services",
    items: ["Life insurance", "Health insurance", "Personal accident", "Motor insurance"],
  },
  {
    icon: Landmark,
    title: "Additional Services",
    items: ["BBPS services", "Utility payments", "Rural financial services", "Digital payments"],
  },
];