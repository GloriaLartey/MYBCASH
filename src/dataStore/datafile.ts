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
export const phoneAvatarImages = ["/hp-1.jpg", "/hp-2.jpg", "/hp-3.jpg", "/hp-4.jpg"];


//-------------------------------------------Second section data---------------------------------------------
export const currencies = [
  { flag: "/us-flag.png", code: "USD", amount: "$10,584.12" },
  { flag: "/ca-flag.png", code: "CAD", amount: "$10,584.12" },
];

export const barHeights = [110, 72, 120, 80, 110, 72, 100, 54, 90];
export const countryFlags = ["/flag-1.png", "/flag-2.png", "/flag-3.png"];

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
    flag: "/ts-flag-1.png",
    amount: "$1,264",
    positive: true,
  },
  { code: "EUR", name: "Euro", flag: "/flag-1.png", amount: "$1,029", positive: true },
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
    flag: "/flag-3.png",
    amount: "$812",
    positive: true,
  },
  {
    code: "USD",
    name: "United States Dollar",
    flag: "/flag-2.png",
    amount: "-$18.42",
    positive: false,
  },
  {
    code: "GBP",
    name: "British Pound",
    flag: "/ts-flag-1.png",
    amount: "$1,264",
    positive: true,
  },
  
];

export const targetBalance = 785450425;
export const itemHeight = 76; // px, including gap
export const visibleHeight = 200; // px, visible window for the scrolling list

// export const sparkLines = [
//   "M0 14 L8 9 L16 16 L24 6 L32 12 L40 4 L48 10 L56 3",
//   "M0 8 L8 13 L16 6 L24 15 L32 9 L40 14 L48 5 L56 11",
//   "M0 12 L8 5 L16 10 L24 3 L32 13 L40 7 L48 15 L56 9",
// ];

export const statusBar = ["/data-bars.png", "/wifi.png", "battery.png"]


//------------------------------Fourth section data------------------------------------

export const testimonials = [
  {
    name: "Lisa",
    role: "Traveller",
    rating: "4.9",
    avatar: "/testimonial-img1.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Hac turpis purus eget tellus amet egestas. Aliquam quam nisl convallis vivamus. Pellentesque neque posuere ullamcorper euismod sed pellentesque.",
  },
  {
    name: "Jeremy Davidson",
    role: "Expat",
    rating: "4.8",
    avatar: "/testimonial-img2.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Hac turpis purus eget tellus amet egestas. Aliquam quam nisl convallis vivamus. Pellentesque neque posuere ullamcorper euismod sed pellentesque.",
  },
  {
    name: "Daniel",
    role: "Freelancer",
    rating: "4.9",
    avatar: "/testimonial-img3.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Hac turpis purus eget tellus amet egestas. Aliquam quam nisl convallis vivamus. Pellentesque neque posuere ullamcorper euismod sed pellentesque.",
  },
  {
    name: "Jenny",
    role: "Online Seller",
    rating: "3.2",
    avatar: "/testimonial-img4.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Hac turpis purus eget tellus amet egestas. Aliquam quam nisl convallis vivamus. Pellentesque neque posuere ullamcorper euismod sed pellentesque.",
  },
  {
    name: "Sarah",
    role: "Student",
    rating: "4.8",
    avatar: "/testimonial-img5.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Hac turpis purus eget tellus amet egestas. Aliquam quam nisl convallis vivamus. Pellentesque neque posuere ullamcorper euismod sed pellentesque.",
  },
  {
    name: "Isabelle",
    role: "Investor",
    rating: "3.9",
    avatar: "/testimonial-img6.jpg",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Hac turpis purus eget tellus amet egestas. Aliquam quam nisl convallis vivamus. Pellentesque neque posuere ullamcorper euismod sed pellentesque.",
  },
];

//------------------------------------------------------Fifth section data---------------------------------------------------------------
export const FAQS = [
  {
    question: "What is accordion in UI Design?",
    answer:
      "An accordion is a vertically stacked list of headers that can click on to reveal more information about a business.",
  },
  {
    question: "Why is accordion important?",
    answer:
      "Accordions save vertical space by letting users reveal only the content they care about, keeping pages scannable instead of overwhelming.",
  },
  {
    question: "Why we should use accordion?",
    answer:
      "They organize related information into digestible sections, reduce cognitive load, and give users control over how much detail they see at once.",
  },
  {
    question: "Which advantages does accordion add in UI Design?",
    answer:
      "Cleaner layouts, faster scanning, better mobile usability, and a natural way to group FAQs, settings, or nested content without extra navigation.",
  },
];
