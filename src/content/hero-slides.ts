export type HeroSlide = {
  id: string;
  image: string;
  imageMobile: string;
  imageAlt: string;
  badge: string;
  titleLead: string;
  titleHighlight: string;
  subtitle: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "cashpoint",
    image: "/hero/slide-cashpoint.png",
    imageMobile: "/hero/slide-cashpoint-mobile.png",
    imageAlt: "Retailer handing cash to a customer at a Cashlo store",
    badge: "Powered by UPI",
    titleLead: "Har Dukaan Banega",
    titleHighlight: "Ab ATM",
    subtitle:
      "Withdraw cash with UPI — no ATM card needed. Plus recharge, bills & insurance, all in one app.",
  },
  {
    id: "recharge",
    image: "/hero/slide-recharge.png",
    imageMobile: "/hero/slide-cashpoint-mobile.png",
    imageAlt: "Customer recharging a mobile phone in a shop",
    badge: "Recharge & Bills",
    titleLead: "Recharge, Bills & More,",
    titleHighlight: "One App",
    subtitle:
      "Prepaid, DTH, FASTag, electricity, water and broadband — pay everything from your neighbourhood store.",
  },
  {
    id: "insurance",
    image: "/hero/slide-insurance.png",
    imageMobile: "/hero/slide-cashpoint-mobile.png",
    imageAlt: "An Indian family protected by insurance",
    badge: "Insurance Services",
    titleLead: "Insurance Made",
    titleHighlight: "Simple",
    subtitle:
      "Life, health, accident and motor insurance — accessible and affordable for every neighbourhood.",
  },
];