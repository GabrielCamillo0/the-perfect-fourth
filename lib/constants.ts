const LEMON_STORE_URL =
  process.env.NEXT_PUBLIC_LEMON_STORE_URL || "https://libertyandspark.lemonsqueezy.com";

export const SITE = {
  name: "The Perfect Fourth",
  tagline: "A premium planning guide for a calm, stylish Fourth of July celebration.",
  description:
    "Plan a polished Fourth of July gathering with hosting timelines, menus, decor direction, safety prompts, and memory-making ideas in one practical guide.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://theperfectfourth.com",
  lemonStoreUrl: LEMON_STORE_URL,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@theperfectfourth.com",
  socialImage: "/images/hero-backyard-evening.webp"
} as const;

export const BRAND = {
  eyebrow: "Fourth of July hosting, refined",
  promise: "Celebrate big without planning chaos.",
  audience: "For hosts who want the holiday to feel warm, beautiful, and handled."
} as const;

export const PRODUCTS = {
  guide: {
    key: "guide",
    name: "The Perfect Fourth Guide",
    shortName: "Guide",
    displayPrice: "$9.99",
    price: 9.99,
    checkoutUrl:
      process.env.NEXT_PUBLIC_LEMON_GUIDE_CHECKOUT_URL ||
      `${LEMON_STORE_URL}/checkout/buy/f073475e-638b-4e7e-b010-9798254b7292`,
    cta: "Get the guide",
    description:
      "The core digital guide with planning timelines, menu frameworks, decor direction, safety prompts, and hosting checklists.",
    image: "/images/product-guide-mockup.webp"
  },
  bundle: {
    key: "bundle",
    name: "The Perfect Fourth Bundle",
    shortName: "Bundle",
    displayPrice: "$22.99",
    price: 22.99,
    checkoutUrl:
      process.env.NEXT_PUBLIC_LEMON_BUNDLE_CHECKOUT_URL ||
      `${LEMON_STORE_URL}/checkout/buy/4c43aec9-663d-4544-b0be-688f5300fcd5`,
    cta: "Get the bundle",
    description:
      "Everything in the guide plus printable menu cards, prep lists, hosting scripts, activity prompts, and keepsake templates.",
    image: "/images/bundle-mockup.webp"
  }
} as const;

export type ProductKey = keyof typeof PRODUCTS;

export const CTA_COPY = {
  primary: PRODUCTS.guide.cta,
  secondary: "View what is inside",
  final: "Plan your Fourth",
  sticky: "Get the guide"
} as const;

export const IMAGES = {
  hero: {
    src: "/images/hero-backyard-evening.webp",
    alt: "Elegant backyard Fourth of July celebration at blue hour"
  },
  product: {
    src: "/images/product-guide-mockup.webp",
    alt: "Digital guide mockup on a tablet with planning sheets"
  },
  tablescape: {
    src: "/images/gallery-tablescape.webp",
    alt: "Premium Fourth of July tablescape with refined food styling"
  },
  fireworks: {
    src: "/images/gallery-public-fireworks.webp",
    alt: "Guests watching distant public fireworks from a lawn gathering"
  },
  backyard: {
    src: "/images/celebration-backyard-bbq.webp",
    alt: "Elevated backyard barbecue setup with tasteful holiday details"
  },
  rooftop: {
    src: "/images/celebration-rooftop-cocktails.webp",
    alt: "Rooftop cocktail gathering with skyline and distant fireworks"
  },
  poolside: {
    src: "/images/celebration-poolside-brunch.webp",
    alt: "Poolside Fourth of July brunch with resort-inspired styling"
  },
  timeline: {
    src: "/images/timeline-planning-desk.webp",
    alt: "Organized planning desk with holiday hosting timeline materials"
  },
  menu: {
    src: "/images/menu-spread.webp",
    alt: "Fourth of July menu spread with make-ahead dishes"
  },
  safety: {
    src: "/images/safety-kit.webp",
    alt: "Responsible sparkler and fireworks safety kit on an outdoor table"
  },
  memory: {
    src: "/images/memory-keepsake.webp",
    alt: "Keepsake guestbook and instant photos from a holiday celebration"
  },
  bundle: {
    src: "/images/bundle-mockup.webp",
    alt: "Premium digital product bundle with printable hosting templates"
  }
} as const;

export const NAV_ITEMS = [
  { href: "#inside", label: "Inside" },
  { href: "#styles", label: "Styles" },
  { href: "#menus", label: "Menus" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQ" }
] as const;

export const HERO_STATS = [
  { value: "10 days", label: "of guided prep" },
  { value: "3 styles", label: "backyard, rooftop, poolside" },
  { value: "40+", label: "printable prompts and lists" }
] as const;

export const PROBLEM_POINTS = [
  "The holiday has too many tiny decisions: food, timing, seating, activities, weather, safety, and cleanup.",
  "Most inspiration looks beautiful but does not tell you what to do first, what can be made ahead, or what to skip.",
  "The result is often an overstuffed party that looks festive but leaves the host managing details all night."
] as const;

export const PRODUCT_FEATURES = [
  "A host-first planning timeline from ten days out through the morning after.",
  "Menu frameworks for grill, brunch, potluck, and low-prep gatherings.",
  "Decor direction that feels patriotic without looking disposable.",
  "Safety prompts for heat, guests, pets, sparklers, and public fireworks logistics.",
  "Memory ideas that turn the evening into something people actually remember."
] as const;

export const GALLERY = [
  {
    title: "The table",
    description: "Layered linens, make-ahead dishes, and simple service flow.",
    image: IMAGES.tablescape
  },
  {
    title: "The fireworks plan",
    description: "Public-display friendly viewing, arrival windows, and comfort details.",
    image: IMAGES.fireworks
  },
  {
    title: "The host kit",
    description: "Safety, hydration, cleanup, and guest comfort planned before dusk.",
    image: IMAGES.safety
  }
] as const;

export const CELEBRATION_STYLES = [
  {
    title: "Backyard barbecue",
    summary: "A familiar cookout with stronger flow: prep zones, buffet timing, shade, and a realistic cleanup path.",
    image: IMAGES.backyard,
    details: ["Grill timeline", "Cooler map", "Kid-friendly activity prompts"]
  },
  {
    title: "Rooftop evening",
    summary: "A city-friendly version with small bites, viewing windows, weather backup, and polished drink service.",
    image: IMAGES.rooftop,
    details: ["Cocktail hour flow", "Skyline viewing plan", "Neighbor-friendly sound cues"]
  },
  {
    title: "Poolside brunch",
    summary: "A daytime gathering built around freshness, shade, hydration, towels, and food that holds well.",
    image: IMAGES.poolside,
    details: ["Morning prep list", "Pool safety reminders", "Serve-chilled menu ideas"]
  }
] as const;

export const TIMELINE = [
  { day: "10 days out", task: "Choose the style, guest count, budget, and no-go list." },
  { day: "7 days out", task: "Lock the menu, rentals, shopping categories, and weather backup." },
  { day: "3 days out", task: "Prep sauces, decor bins, playlists, and safety kit." },
  { day: "1 day out", task: "Batch drinks, stage serving pieces, and confirm arrival details." },
  { day: "Party day", task: "Follow the hour-by-hour host plan and keep your evening open." }
] as const;

export const MENU_SETS = [
  {
    title: "Classic grill",
    items: ["Herb burgers", "Charred corn", "Berry slab pie", "Lemon iced tea"]
  },
  {
    title: "Low-prep potluck",
    items: ["Host main", "Guest sides", "Cold dessert bar", "Cooler labels"]
  },
  {
    title: "Poolside brunch",
    items: ["Fruit boards", "Breakfast sliders", "Citrus spritzes", "Freezer pops"]
  }
] as const;

export const EXPERIENCES = [
  "A welcome rhythm that gets guests settled in the first ten minutes.",
  "Lawn games and conversation prompts that do not feel forced.",
  "A public fireworks viewing plan with blankets, water, timing, and exit notes.",
  "Quiet memory moments: instant photos, guestbook prompts, and a simple sendoff."
] as const;

export const SAFETY_POINTS = [
  "Use local rules as the authority for fireworks, noise, burn restrictions, and public display access.",
  "Stage water, sand, gloves, shade, hydration, pet comfort, and a low-stress exit path before guests arrive.",
  "Treat the guide as planning support, not as legal, medical, or emergency advice."
] as const;

export const INCLUSIONS = [
  "Planning timeline",
  "Shopping list builder",
  "Menu frameworks",
  "Decor palette guide",
  "Guest flow prompts",
  "Safety checklist",
  "Cleanup plan",
  "Memory prompts"
] as const;

export const BUNDLE_EXTRAS = [
  "Printable menu cards",
  "Prep list templates",
  "Activity prompts",
  "Guestbook prompts",
  "Hosting scripts",
  "Keepsake pages"
] as const;

export const COMPARISON_ROWS = [
  {
    label: "Planning",
    usual: "Scattered saves, screenshots, and last-minute runs.",
    perfect: "One timeline with clear decisions by day."
  },
  {
    label: "Food",
    usual: "Too many dishes competing for oven, grill, and counter space.",
    perfect: "Menus grouped by prep effort, service flow, and hold time."
  },
  {
    label: "Atmosphere",
    usual: "Disposable decor that looks busy after sunset.",
    perfect: "Layered styling that still works when the party gets practical."
  },
  {
    label: "Safety",
    usual: "Handled when someone remembers.",
    perfect: "Built into setup, guest flow, and fireworks decisions."
  }
] as const;

export const FAQS = [
  {
    question: "Is this a physical product?",
    answer:
      "No. The Perfect Fourth is a digital product delivered through checkout. You can save the files and print the pages you want."
  },
  {
    question: "Who is it for?",
    answer:
      "It is for hosts planning a Fourth of July gathering at home, on a rooftop, by a pool, or around a public fireworks outing."
  },
  {
    question: "Does it include legal fireworks guidance?",
    answer:
      "It includes planning prompts and safety reminders, but local rules change. Always follow your city, county, venue, and fire authority guidance."
  },
  {
    question: "Can I use it for Memorial Day or Labor Day?",
    answer:
      "Yes. The styling is patriotic, but the planning system, menus, safety prompts, and hosting timelines can adapt to other summer gatherings."
  },
  {
    question: "Is checkout handled through Lemon Squeezy?",
    answer:
      "Yes. Checkout opens through the Liberty & Spark Lemon Squeezy store, and campaign parameters are preserved without adding personal data to the URL."
  }
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund", label: "Refund" },
  { href: "/contact", label: "Contact" }
] as const;

export const LEGAL_PAGES = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How The Perfect Fourth may collect, use, and protect basic information connected to this website and digital product.",
    updated: "July 2, 2026",
    sections: [
      {
        heading: "Information we may collect",
        body: "We may receive information you provide directly, such as your name, email address, message content, and purchase details handled by our checkout provider. We may also receive basic analytics data when analytics tools are enabled."
      },
      {
        heading: "How we use information",
        body: "We use information to operate the site, respond to messages, deliver digital products, improve the customer experience, and understand aggregated site performance."
      },
      {
        heading: "Payments",
        body: "Payments are processed by Lemon Squeezy or another configured checkout provider. We do not ask you to send card details through this website contact form."
      },
      {
        heading: "Analytics and pixels",
        body: "Google Analytics or Meta Pixel may load only when their public environment variables are configured. These tools may use cookies or similar technologies according to their own policies."
      },
      {
        heading: "Contact",
        body: `Questions about privacy can be sent to ${SITE.contactEmail}.`
      }
    ]
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms for using this website and purchasing or accessing The Perfect Fourth digital products.",
    updated: "July 2, 2026",
    sections: [
      {
        heading: "Digital product use",
        body: "The Perfect Fourth materials are provided for personal hosting and planning use. You may not resell, redistribute, or present the files as your own product."
      },
      {
        heading: "Planning support only",
        body: "The guide offers general hosting ideas, checklists, and prompts. It is not legal, medical, emergency, fire-safety, or professional advice."
      },
      {
        heading: "Local rules",
        body: "You are responsible for checking and following local fireworks rules, venue requirements, noise limits, weather alerts, burn restrictions, and safety guidance."
      },
      {
        heading: "Site changes",
        body: "We may update the website, product details, pricing, or checkout provider from time to time. Material changes should be reflected on this page when practical."
      },
      {
        heading: "Contact",
        body: `Questions about these terms can be sent to ${SITE.contactEmail}.`
      }
    ]
  },
  refund: {
    title: "Refund Policy",
    description: "A practical refund policy for The Perfect Fourth digital products.",
    updated: "July 2, 2026",
    sections: [
      {
        heading: "Digital delivery",
        body: "Because this is a digital product, access may be delivered quickly after purchase. Refund eligibility can depend on the checkout provider, access status, and the details of the request."
      },
      {
        heading: "When to contact us",
        body: "If you purchased the wrong product, cannot access your files, or believe there was a checkout issue, contact us with the email used at checkout and a short description."
      },
      {
        heading: "Resolution options",
        body: "Depending on the situation, we may help restore access, resend delivery information, clarify the product, or review a refund request."
      },
      {
        heading: "Contact",
        body: `Refund questions can be sent to ${SITE.contactEmail}.`
      }
    ]
  }
} as const;
