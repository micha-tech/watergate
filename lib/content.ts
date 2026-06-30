import { Beaker, Building2, Droplets, Factory, Gauge, Hotel, Landmark, Settings2, ShieldCheck, Waves } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const productCategories = [
  {
    name: "Dosing Pumps",
    slug: "dosing-pumps",
    description:
      "Accurate chemical dosing solutions for chlorination, disinfection, pH control, anti-scaling, coagulation, and water treatment process management.",
    imageUrl: "/assets/water-flow-1.png",
    icon: Beaker
  },
  {
    name: "Prepaid Water Meters",
    slug: "prepaid-water-meters",
    description:
      "Smart prepaid metering solutions for estates, landlords, facility managers, private water operators, and commercial buildings that need better consumption tracking and revenue control.",
    imageUrl: "/assets/water-flow-1.png",
    icon: Gauge
  },
  {
    name: "Reverse Osmosis Systems",
    slug: "reverse-osmosis-systems",
    description:
      "Reliable reverse osmosis systems for commercial, industrial, institutional, and treated water production applications.",
    imageUrl: "/assets/water-flow-1.png",
    icon: Droplets
  },
  {
    name: "Water Treatment Plant Accessories and Utilities",
    slug: "water-treatment-plant-accessories-and-utilities",
    description:
      "Essential fittings, filters, valves, membranes, control parts, and utility components for water treatment plant maintenance, replacement, and daily operations.",
    imageUrl: "/assets/water-flow-1.png",
    icon: Settings2
  }
];

export const fallbackProducts = [
  {
    id: "sample-dosing-pump",
    name: "Chemical Dosing Pump",
    slug: "chemical-dosing-pump",
    shortDescription: "Placeholder dosing pump for controlled chemical injection in water treatment systems.",
    description:
      "A development placeholder for a chemical dosing pump suitable for treatment control, chlorination, pH correction, and process dosing applications. Replace this entry from the admin panel with exact product data.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "DEV-DP-001",
    imageUrl: "/assets/water-flow-1.png",
    galleryImages: ["/assets/water-flow-1.png"],
    features: ["Adjustable dosing output", "Suitable for treatment control", "Placeholder data for development"],
    applications: ["Chlorination", "pH control", "Anti-scaling dosing"],
    specifications: { Type: "Dosing pump", Status: "Placeholder product" },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Chemical Dosing Pump | Watergate Flow Technologies",
    metaDescription: "Placeholder chemical dosing pump for water treatment systems.",
    category: productCategories[0]
  },
  {
    id: "sample-prepaid-meter",
    name: "Prepaid Water Meter",
    slug: "prepaid-water-meter",
    shortDescription: "Prepayment-based water metering for estates, landlords, water operators, and commercial facilities that need stronger revenue accountability.",
    description:
      "A prepaid water meter helps utility managers support a pay-before-use model, reduce arrears, and improve consumption accountability. Suitable configurations can include IC card or STS token-based operation, electronic consumption display, valve control, low-balance prompts, recharge limits, and anti-magnetic protection depending on the selected model.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-PWM-001",
    imageUrl: "/assets/water-flow-1.png",
    galleryImages: ["/assets/water-flow-1.png"],
    features: [
      "Pay-before-use metering model for water revenue control",
      "Electronic consumption recording and display",
      "Valve control support for zero balance or low balance events",
      "Recharge limit configuration for controlled top-up management",
      "Anti-magnetic protection support on applicable models"
    ],
    applications: ["Residential estates", "Commercial buildings", "Private water operators", "Landlord-managed water supply", "Facility management projects"],
    specifications: {
      Type: "Prepaid water meter",
      "Payment modes": "IC card or STS token options",
      "Protection class": "IP68",
      "Range ratio": "R80 / R100 / R160 options",
      "Nominal diameters": "DN15, DN20, DN25",
      "Water pressure": "Up to 1.6 MPa",
      "Cold water temperature": "0.1 C to 50 C",
      "Hot water temperature": "0.1 C to 90 C",
      "Environmental grade": "B"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Prepaid Water Meter | Watergate Flow Technologies",
    metaDescription: "Prepaid water meter options for estate water metering, utility revenue control, and accountable consumption management.",
    category: productCategories[1]
  },
  {
    id: "sts-prepaid-water-meter",
    name: "STS Prepaid Water Meter",
    slug: "sts-prepaid-water-meter",
    shortDescription: "STS token-based prepaid water meter for utilities and estates that need remote vending, recharge code entry, and payment accountability.",
    description:
      "An STS prepaid water meter supports token-based water vending for managed utilities, estates, and private water operators. Users can purchase water credit through a payment or vending channel, receive a recharge token, and enter the code through a customer interface unit for recharge or data query functions. It is suited to operators that need better payment discipline without relying only on manual billing.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-PWM-STS-001",
    imageUrl: "/assets/water-flow-1.png",
    galleryImages: ["/assets/water-flow-1.png"],
    features: [
      "STS token-based recharge workflow",
      "Supports 20-digit recharge token input through CIU",
      "Supports short data query codes for basic meter information",
      "Valve control support for credit and alarm conditions",
      "Designed for prepaid utility revenue control"
    ],
    applications: ["Estate water metering", "Private water operators", "Utility revenue control", "Commercial facility metering", "Managed residential communities"],
    specifications: {
      Type: "STS prepaid water meter",
      "Recharge method": "20-digit STS token",
      "User interface": "Customer interface unit",
      "Query support": "Short code data query functions",
      "Protection class": "IP68",
      "Range ratio": "R80 / R100 / R160 options",
      "Nominal diameters": "DN15, DN20, DN25",
      "Water pressure": "Up to 1.6 MPa",
      "DN15 flow data": "Q4 3.125 m3/h, Q3 2.5 m3/h, Q2 50 L/h, Q1 31.25 L/h",
      "DN20 flow data": "Q4 5 m3/h, Q3 4 m3/h, Q2 80 L/h, Q1 50 L/h",
      "DN25 flow data": "Q4 7.875 m3/h, Q3 6.3 m3/h, Q2 130 L/h, Q1 80 L/h",
      "Minimum reading": "0.00001 m3",
      "Maximum reading": "9999 m3"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "STS Prepaid Water Meter | Watergate Flow Technologies",
    metaDescription: "STS prepaid water meter for token-based recharge, estate metering, and utility revenue control.",
    category: productCategories[1]
  },
  {
    id: "ic-card-prepaid-water-meter",
    name: "IC Card Prepaid Water Meter",
    slug: "ic-card-prepaid-water-meter",
    shortDescription: "Smart card prepaid water meter for controlled water billing, balance-based valve control, and accountable consumption management.",
    description:
      "An IC card prepaid water meter uses a smart card workflow to support prepaid water billing. End users purchase water credit, load it through the card system, and consume water against the available balance. When the balance reaches zero, applicable configurations can close the valve and stop supply until the account is recharged.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-PWM-IC-001",
    imageUrl: "/assets/water-flow-1.png",
    galleryImages: ["/assets/water-flow-1.png"],
    features: [
      "Smart card based prepaid billing workflow",
      "Balance-based valve closure support",
      "Electronic water consumption display",
      "Low-balance alarm and reminder support",
      "Useful for landlords, estates, and managed water schemes"
    ],
    applications: ["Residential estates", "Landlord-managed water systems", "Commercial buildings", "Facility management", "Institutional accommodation"],
    specifications: {
      Type: "IC card prepaid water meter",
      "Payment method": "Smart card top-up",
      "Valve behavior": "Can close at zero balance on applicable models",
      "Protection class": "IP68",
      "Range ratio": "R80 / R100 / R160 options",
      "Nominal diameters": "DN15, DN20, DN25",
      "Ambient temperature": "5 C to 55 C",
      "Ambient humidity": "0% to 93% RH",
      "Water pressure": "Up to 1.6 MPa",
      "Pressure loss": "Up to 0.063 MPa"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "IC Card Prepaid Water Meter | Watergate Flow Technologies",
    metaDescription: "IC card prepaid water meter for smart card water billing, estate metering, and balance-based valve control.",
    category: productCategories[1]
  },
  {
    id: "sample-ro-system",
    name: "Commercial Reverse Osmosis System",
    slug: "commercial-reverse-osmosis-system",
    shortDescription: "Placeholder reverse osmosis system for commercial and institutional purification requirements.",
    description:
      "A development placeholder for a reverse osmosis purification system used in commercial, institutional, and treated water production settings. Replace with exact capacity and configuration from the admin panel.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "DEV-RO-001",
    imageUrl: "/assets/water-flow-1.png",
    galleryImages: ["/assets/water-flow-1.png"],
    features: ["Purification support", "Commercial application fit", "Placeholder data for development"],
    applications: ["Hotels", "Hospitals", "Industrial process water"],
    specifications: { Type: "Reverse osmosis system", Status: "Placeholder product" },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Commercial Reverse Osmosis System | Watergate Flow Technologies",
    metaDescription: "Placeholder commercial reverse osmosis system for purification applications.",
    category: productCategories[2]
  }
];

export const solutions = [
  {
    title: "Estate Water Metering",
    problem: "Manual or postpaid water billing often causes disputes, poor payment discipline, and weak consumption visibility.",
    products: "Prepaid Water Meters",
    value: "Better consumption tracking, improved revenue control, and fewer billing disputes.",
    icon: Building2
  },
  {
    title: "Industrial Water Treatment",
    problem: "Industrial facilities require dependable water treatment systems to support production and operational continuity.",
    products: "Dosing Pumps, Reverse Osmosis Systems, Treatment Plant Accessories",
    value: "Better treatment control, improved water quality, and stronger process reliability.",
    icon: Factory
  },
  {
    title: "Commercial Water Purification",
    problem: "Hotels, hospitals, schools, and commercial buildings need reliable access to treated water.",
    products: "Reverse Osmosis Systems, Filters, Treatment Accessories",
    value: "Cleaner water supply, better facility operations, and improved user confidence.",
    icon: Hotel
  },
  {
    title: "Treatment Plant Maintenance",
    problem: "Treatment plants need replacement parts, accessories, and utility components to reduce downtime.",
    products: "Water Treatment Plant Accessories and Utilities",
    value: "Reduced downtime, easier maintenance, and improved plant reliability.",
    icon: Settings2
  },
  {
    title: "Utility Revenue Control",
    problem: "Water operators lose revenue when consumption is poorly measured or payment is difficult to enforce.",
    products: "Prepaid Water Meters",
    value: "Improved payment accountability and stronger water utility revenue control.",
    icon: ShieldCheck
  }
];

export const industries = [
  "Residential Estates",
  "Hotels and Hospitality Facilities",
  "Schools and Institutions",
  "Hospitals and Healthcare Facilities",
  "Manufacturing Plants",
  "Facility Management Companies",
  "Real Estate Developers",
  "Private Water Operators",
  "Commercial Buildings",
  "Industrial Facilities",
  "Water Treatment Plants",
  "Public and Private Utilities"
].map((name, index) => ({
  name,
  icon: [Building2, Hotel, Landmark, Waves][index % 4]
}));

export const faqs = [
  {
    question: "What does Watergate Flow Technologies do?",
    answer:
      "Watergate Flow Technologies supplies water utility products for water treatment, metering, purification, chemical dosing, and treatment plant operations."
  },
  {
    question: "Do you supply prepaid water meters for estates?",
    answer:
      "Yes. The catalogue includes prepaid water metering solutions for estates, landlords, facility managers, commercial buildings, and private water operators."
  },
  {
    question: "What are dosing pumps used for?",
    answer:
      "Dosing pumps inject controlled quantities of chemicals into water systems for chlorination, disinfection, pH control, anti-scaling, coagulation, and treatment process management."
  },
  {
    question: "Do you supply reverse osmosis systems?",
    answer:
      "Yes. Watergate Flow Technologies supports reverse osmosis system enquiries for commercial, industrial, institutional, and treated water production applications."
  },
  {
    question: "Do you sell water treatment plant accessories?",
    answer:
      "Yes. Accessories and utilities can include fittings, filters, valves, membranes, control parts, and replacement components for plant maintenance."
  },
  {
    question: "Can I request a quote online?",
    answer:
      "Yes. Use the request quote form on the contact page or on any product page to submit your requirement."
  },
  {
    question: "Are product prices displayed online?",
    answer:
      "Most products use a contact-for-pricing model because specifications, quantities, and project conditions affect quotation details."
  },
  {
    question: "How do I know which product is right for my project?",
    answer:
      "Share your project type, location, flow requirements, current challenge, and preferred product category. The team can use that context to guide the quotation process."
  }
];
