//Hero section data
export const navLinks = ["Home", "Features", "Solutions", "FAQs"] as const;

export const brandLogos = [
  { name: "FOURSQUARE", stacked: true, className: " font-foursquare" },
  { name: "tumblr", className: "font-tumblr" },
  { name: "tumblr", className: "font-tumblr" },
  { name: "facebook", className: "font-facebook" },
  { name: "BeReal.", className: "font-bereal" },
];

export const avatarColors = ["#BB9FFC", "#EB67A0", "#40B825"];
export const avatarImages = ["/avatar3.webp", "/avatar2.webp", "/avatar1.webp"];
export const phoneAvatarImages = [
  "/hp-1.webp",
  "/hp-2.webp",
  "/hp-3.webp",
  "/hp-4.webp",
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
      "Get accurate and up-to-date exchange rates everytime you make a transaction.",
  },
  { title: "Secure Global Transactions" },
  { title: "Lowest Transfer Fees" },
  { title: "24/7 Customer Support" },
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
    question: "Can I manage multiple currencies with MYBCASH?",
    answer:
      "Yes. MYBCASH allows you to open and manage accounts in multiple currencies from one secure wallet. You can keep track of your balances and move money between your accounts whenever you need to.",
  },
  {
    question: "Can I swap currencies through MYBCASH?",
    answer:
      "You can convert money between supported currencies using live exchange rates. MYBCASH provides an instant quote before you confirm your swap, so you can see exactly what you're getting.",
  },
  {
    question: "Can I get a virtual card with MYBCASH?",
    answer:
      "Yes. MYBCASH provides a virtual card designed for online shopping, subscriptions, and international payments. You can request your virtual card directly from the app and manage it from your wallet.",
  },
  {
    question: "Can I use MYBCASH to pay bills and buy airtime?",
    answer:
      "You can conveniently buy mobile airtime and pay electricity bills directly from your MYBCASH wallet, without needing to switch to another service.",
  },
];
