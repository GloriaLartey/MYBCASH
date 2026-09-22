// import { title } from "framer-motion/client";

//Hero section data
export const navLinks = [
  "Home",
  "About Us",
  "How it works",
  "Solutions",
  "Testimonials",
  "FAQs",
] as const;
export type NavLink = (typeof navLinks)[number];

// Maps each nav label to the id of the section it should scroll to.
export const navSectionMap: Record<NavLink, string> = {
  Home: "home",
  "About Us": "about",
  "How it works": "how-it-works",
  Solutions: "solutions",
  Testimonials: "testimonials",
  FAQs: "faqs",
};

export const avatarColors = ["#BB9FFC", "#EB67A0", "#40B825"];
export const avatarImages = ["/avatar3.webp", "/avatar2.webp", "/avatar1.webp"];
export const phoneAvatarImages = [
  "/hp-1.webp",
  "/hp-2.webp",
  "/hp-3.webp",
  "/hp-4.webp",
];

export const trustStats = [
  { value: "500K+", label: "Active users" },
  { value: "40+", label: "Countries served" },
  { value: "24/7", label: "Support" },
  { value: "99.9%", label: "Uptime" },
];

export const howItWorks = [
  {
    step: "01",
    title: "Create your wallet",
    description:
      "Set up your secure wallet in minutes and verify your profile in a few steps.",
  },
  {
    step: "02",
    title: "Fund your account",
    description:
      "Top up with local or international transfers, cards, or supported payment methods.",
  },
  {
    step: "03",
    title: "Pay, send, or swap",
    description:
      "Move money, pay bills, buy airtime, and exchange currencies at live rates.",
  },
  {
    step: "04",
    title: "Track everything in real time",
    description:
      "View balances, payment history, FX activity, and spending from one dashboard.",
  },
];

export const securityPoints = [
  "Bank-grade encryption",
  "Instant transaction alerts",
  "Secure login and verification",
  "Real-time support",
];

//-------------------------------------------Second section data---------------------------------------------
export const currencies = [
  { flag: "/us-flag.webp", code: "USD", amount: "$10,584.12" },
  { flag: "/ca-flag.webp", code: "CAD", amount: "$10,584.12" },
];

export const barHeights = [110, 72, 120, 80, 110, 72, 100, 54, 90];
export const countryFlags = ["/flag-1.webp", "/flag-2.webp", "/flag-3.webp"];

//------------------------------------------Third section data-----------------------------------------------
export const Features = [
  {
    title: "Real-Time Exchange Rates",
    description:
      "See the market price before you send, so you know exactly what arrives on the other side.",
  },
  { title: "● Secure Global Transactions" },
  { title: "● Lowest Transfer Fees" },
  { title: "● 24/7 Customer Support" },
];

export const Currencies = [
  {
    code: "GBP",
    name: "British Pound",
    flag: "/ts-flag-1.webp",
    amount: "$1,264",
    positive: true,
  },
  {
    code: "EUR",
    name: "Euro",
    flag: "/flag-1.webp",
    amount: "$1,029",
    positive: true,
  },
  {
    code: "INR",
    name: "India Rupee",
    flag: "ts-flag-3.jpeg",
    amount: "-$45.98",
    positive: false,
  },
  {
    code: "COP",
    name: "Columbian Peso",
    flag: "/flag-3.webp",
    amount: "$812",
    positive: true,
  },
  {
    code: "USD",
    name: "United States Dollar",
    flag: "/flag-2.webp",
    amount: "-$18.42",
    positive: false,
  },
  {
    code: "GBP",
    name: "British Pound",
    flag: "/ts-flag-1.webp",
    amount: "$1,264",
    positive: true,
  },
];

export const targetBalance = 785450425;
export const itemHeight = 76; // px, including gap
export const visibleHeight = 200; // px, visible window for the scrolling list

export const statusBar = ["/data-bars.webp", "/wifi.webp", "battery.png"];

//------------------------------Fourth section data------------------------------------

export const testimonials = [
  {
    name: "Jennifer Asamoah",
    role: "Verified MYBCASH User",
    rating: "3.2",
    avatar: "/testimonial-img4.webp",
    quote:
      "I love how easy it is to manage my money in one place. From topping up my account to sending money and paying bills, everything feels straightforward and secure.",
  },
  {
    name: "Daniel Owusu",
    role: "Verified MYBCASH User",
    rating: "4.9",
    avatar: "/testimonial-img3.webp",
    quote:
      "The ability to manage local and international currency accounts from one wallet is a game changer. MYBCASH gives me everything I need without making money management complicated.",
  },
  {
    name: "Ama Mesnsah",
    role: "Verified MYBCASH User",
    rating: "3.9",
    avatar: "/testimonial-img6.webp",
    quote:
      "MYBCASH makes managing different currencies incredibly simple. I can keep my money in separate accounts, swap when I need to, and make payments without jumping between different apps.",
  },
];

//------------------------------------------------------Fifth section data---------------------------------------------------------------
export const FAQS = [
  {
    question: "How safe is my money in MYBCASH?",
    answer:
      "MYBCASH uses secure wallet technology, encrypted transactions, and verification checks to help keep your money and account activity protected at every step.",
  },
  {
    question: "Can I manage multiple currencies with MYBCASH?",
    answer:
      "Yes. MYBCASH lets you hold and manage balances in multiple currencies from one wallet, making international payments and transfers simpler.",
  },
  {
    question: "Are there hidden fees when I send or swap money?",
    answer:
      "MYBCASH is built to be transparent. You can see exchange rates and fees before confirming a transfer or swap so there are no surprises.",
  },
  {
    question: "How long do transfers take?",
    answer:
      "Transfer times vary based on payment type and destination, but many transactions are processed quickly, with updates available in real time through the app.",
  },
  {
    question: "Can I get a virtual card with MYBCASH?",
    answer:
      "Yes. MYBCASH provides a virtual card designed for online shopping, subscriptions, and international payments. You can request your virtual card directly from the app and manage it from your wallet.",
  },
  {
    question: "Can I use MYBCASH to pay bills and buy airtime?",
    answer:
      "You can conveniently buy mobile airtime and pay electricity bills directly from your MYBCASH wallet without switching to another service.",
  },
];

//--------------------Footer data--------------------------
export const footerData = [
  {
    title: "Services",
    data: ["Home", "Solutions"],
  },
  {
    title: "Company",
    data: ["About Us", "Support"],
  },
  {
    title: "Helpful Links",
    data: ["FAQs"],
  },
];
