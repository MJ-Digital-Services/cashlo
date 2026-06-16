import type { LucideIcon } from "lucide-react";
import { Users, Store } from "lucide-react";

export type BenefitGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const benefitGroups: BenefitGroup[] = [
  {
    title: "For Customers",
    icon: Users,
    items: [
      "No ATM card required",
      "Instant cash withdrawal",
      "Secure UPI authentication",
      "Available at nearby stores",
      "Fast, convenient transactions",
      "Trusted and safe experience",
    ],
  },
  {
    title: "For Retailers",
    icon: Store,
    items: [
      "Additional income opportunities",
      "Increased customer footfall",
      "Easy-to-use mobile app",
      "Multiple services, one platform",
      "Secure transactions",
      "Business growth & expansion",
    ],
  },
];