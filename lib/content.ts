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
  },
  {
    name: "Smart and Mechanical Water Meters",
    slug: "smart-and-mechanical-water-meters",
    description:
      "Smart AMR, ultrasonic, LoRa, LoRaWAN, remote reading, bulk, and mechanical water meters for estates, utilities, commercial buildings, and facility water accountability.",
    imageUrl: "/assets/products/ultrasonic-water-meter.jpg",
    icon: Gauge
  }
];

export const fallbackProducts = [
  {
    id: "sample-dosing-pump",
    name: "Chemical Dosing Pump",
    slug: "chemical-dosing-pump",
    shortDescription: "Metering pump for controlled chemical injection in water treatment, disinfection, pH correction, and process dosing applications.",
    description:
      "Chemical dosing pumps support accurate injection of treatment chemicals into water systems. They are used in chlorination, disinfection, anti-scaling, pH correction, coagulation, and other treatment processes where controlled dosing helps maintain water quality and operational consistency.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-DP-001",
    imageUrl: "/assets/products/d-type-solenoid-dosing-pump.jpg",
    galleryImages: [
      "/assets/products/d-type-solenoid-dosing-pump.jpg",
      "/assets/products/dfd-solenoid-dosing-pump.jpg",
      "/assets/products/dp-solenoid-dosing-pump.jpg"
    ],
    features: [
      "Adjustable dosing output for process control",
      "Suitable for chemical injection in water treatment systems",
      "Supports chlorination, pH correction, anti-scaling, and coagulation workflows",
      "Useful for compact treatment skids and plant operations",
      "Quotation based on flow rate, chemical type, and installation requirement"
    ],
    applications: ["Chlorination", "pH control", "Anti-scaling dosing", "Disinfection", "Coagulation", "Water treatment plant process control"],
    specifications: {
      Type: "Chemical dosing pump",
      "Typical use": "Controlled chemical injection",
      "Application areas": "Treatment plants, estates, commercial facilities, industrial water systems",
      "Configuration": "Model selected based on dosing flow, pressure, and chemical compatibility",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Chemical Dosing Pump | Watergate Flow Technologies",
    metaDescription: "Chemical dosing pump for chlorination, pH control, anti-scaling, disinfection, and water treatment process control.",
    category: productCategories[0]
  },
  {
    id: "d-type-electromagnetic-solenoid-dosing-pump",
    name: "D Type Electromagnetic Solenoid Dosing Pump",
    slug: "d-type-electromagnetic-solenoid-dosing-pump",
    shortDescription: "Compact solenoid-driven diaphragm dosing pump for accurate chemical injection in water treatment and process dosing systems.",
    description:
      "The D Type electromagnetic solenoid dosing pump is a compact metering pump option for controlled chemical injection. It is suitable for chlorination, disinfection, pH correction, anti-scaling dosing, and other water treatment applications where small-to-medium dosing accuracy and simple installation are important.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-DP-SOL-001",
    imageUrl: "/assets/products/d-type-solenoid-dosing-pump.jpg",
    galleryImages: [
      "/assets/products/d-type-solenoid-dosing-pump.jpg",
      "/assets/products/dfd-solenoid-dosing-pump.jpg",
      "/assets/products/dp-solenoid-dosing-pump.jpg"
    ],
    features: [
      "Solenoid-driven diaphragm dosing mechanism",
      "Compact design for chemical dosing skids and plant rooms",
      "Suitable for water treatment chemical injection",
      "Useful for chlorination, pH correction, anti-scaling, and disinfection",
      "Project selection based on flow rate, pressure, and chemical compatibility"
    ],
    applications: ["Chlorination", "Disinfection", "pH correction", "Anti-scaling dosing", "Small treatment systems", "Commercial water treatment"],
    specifications: {
      Type: "Solenoid diaphragm dosing pump",
      "Drive method": "Electromagnetic solenoid",
      "Typical use": "Accurate chemical dosing",
      "Application areas": "Water treatment, purification support, chemical process dosing",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "D Type Electromagnetic Solenoid Dosing Pump | Watergate Flow Technologies",
    metaDescription: "D Type solenoid dosing pump for compact chemical injection in water treatment systems.",
    category: productCategories[0]
  },
  {
    id: "nd-type-mechanical-motor-dosing-pump",
    name: "ND Type Mechanical Motor Dosing Pump",
    slug: "nd-type-mechanical-motor-dosing-pump",
    shortDescription: "Motor-driven mechanical diaphragm dosing pump for steady chemical dosing in water treatment and industrial process applications.",
    description:
      "The ND Type mechanical motor dosing pump is designed for steady metering duties where a motor-driven diaphragm pump is preferred. It supports chemical dosing in treatment plants, industrial water systems, purification support lines, and plant process applications requiring durable dosing performance.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-DP-MECH-001",
    imageUrl: "/assets/products/nd-mechanical-motor-dosing-pump.png",
    galleryImages: [
      "/assets/products/nd-mechanical-motor-dosing-pump.png",
      "/assets/products/ndj-motor-dosing-pump.jpg",
      "/assets/products/ndws-motor-dosing-pump.jpg"
    ],
    features: [
      "Motor-driven mechanical diaphragm dosing design",
      "Suitable for continuous process dosing requirements",
      "Useful for plant rooms and industrial water treatment systems",
      "Applicable to chemical dosing, purification support, and treatment control",
      "Model selection based on required pressure and dosing flow"
    ],
    applications: ["Water treatment plants", "Industrial water systems", "Chemical dosing rooms", "Commercial purification systems", "Process water treatment"],
    specifications: {
      Type: "Mechanical motor diaphragm dosing pump",
      "Drive method": "Motor driven",
      "Typical use": "Continuous chemical metering",
      "Application areas": "Water treatment, industrial process dosing, purification support",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "ND Type Mechanical Motor Dosing Pump | Watergate Flow Technologies",
    metaDescription: "ND Type mechanical motor dosing pump for steady chemical metering in treatment and industrial water systems.",
    category: productCategories[0]
  },
  {
    id: "evodose-stepper-motor-dosing-pump",
    name: "Evodose Stepper Motor Dosing Pump",
    slug: "evodose-stepper-motor-dosing-pump",
    shortDescription: "Stepper motor dosing pump for controlled metering where precise output adjustment and quiet operation are required.",
    description:
      "The Evodose stepper motor dosing pump supports controlled chemical metering with precise output adjustment. It is suited to applications where reliable dosing control, clean installation, and low-noise operation are valuable for treatment, purification, or process systems.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-DP-EVO-001",
    imageUrl: "/assets/products/evodose-stepper-motor-dosing-pump.webp",
    galleryImages: [
      "/assets/products/evodose-stepper-motor-dosing-pump.webp",
      "/assets/products/evodose-stepper-motor-dosing-pump-2.webp"
    ],
    features: [
      "Stepper motor dosing control",
      "Designed for precise chemical metering",
      "Suitable for compact treatment and purification systems",
      "Useful where dosing consistency and quiet operation matter",
      "Project selection based on dosing range and pressure requirement"
    ],
    applications: ["Commercial water treatment", "Purification systems", "Chemical process dosing", "Facility water operations", "Skid-mounted dosing systems"],
    specifications: {
      Type: "Stepper motor dosing pump",
      "Drive method": "Stepper motor",
      "Typical use": "Precise chemical metering",
      Accuracy: "Model-dependent; quoted per selected configuration",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Evodose Stepper Motor Dosing Pump | Watergate Flow Technologies",
    metaDescription: "Stepper motor dosing pump for precise chemical metering in treatment and purification systems.",
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
    imageUrl: "/assets/products/prepaid-water-meter-main.png",
    galleryImages: [
      "/assets/products/prepaid-water-meter-main.png",
      "/assets/products/sts-prepaid-water-meter-main.jpg",
      "/assets/products/ic-card-prepaid-water-meter-card.png",
      "/assets/products/ic-card-prepaid-system-1.jpg"
    ],
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
    imageUrl: "/assets/products/sts-prepaid-water-meter-main.jpg",
    galleryImages: [
      "/assets/products/sts-prepaid-water-meter-main.jpg",
      "/assets/products/sts-prepaid-water-meter-2.jpg",
      "/assets/products/sts-prepaid-water-meter-3.jpg",
      "/assets/products/sts-prepaid-water-meter-4.jpg",
      "/assets/products/sts-water-meter-kit.png"
    ],
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
    imageUrl: "/assets/products/ic-card-prepaid-water-meter-card.png",
    galleryImages: [
      "/assets/products/ic-card-prepaid-water-meter-card.png",
      "/assets/products/ic-card-prepaid-water-meter-main.jpg",
      "/assets/products/ic-card-prepaid-system-1.jpg",
      "/assets/products/ic-card-prepaid-system-2.jpg"
    ],
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
    shortDescription: "Reverse osmosis system for commercial, institutional, and industrial treated water production requirements.",
    description:
      "Commercial reverse osmosis systems support water purification by reducing dissolved impurities and improving treated water quality. System configuration depends on feed water quality, required capacity, pre-treatment needs, membrane arrangement, storage, and operational requirements.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-RO-001",
    imageUrl: "/assets/water-flow-1.png",
    galleryImages: ["/assets/water-flow-1.png"],
    features: [
      "Designed for treated water production and purification support",
      "Suitable for commercial, institutional, and industrial applications",
      "Configuration selected based on feed water and output quality requirements",
      "Can be paired with filtration, dosing, storage, and plant accessories",
      "Quotation based on capacity, pre-treatment, and installation scope"
    ],
    applications: ["Hotels", "Hospitals", "Schools and institutions", "Commercial buildings", "Industrial process water", "Treated water production"],
    specifications: {
      Type: "Reverse osmosis system",
      "Typical use": "Water purification and treated water production",
      "Application areas": "Commercial, industrial, institutional, and facility water systems",
      "Configuration": "Capacity and membrane arrangement selected per project",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Commercial Reverse Osmosis System | Watergate Flow Technologies",
    metaDescription: "Commercial reverse osmosis system for treated water production, purification, and facility water quality improvement.",
    category: productCategories[2]
  },
  {
    id: "desalination-metering-pump",
    name: "Desalination Metering Pump",
    slug: "desalination-metering-pump",
    shortDescription: "Metering pump for desalination, reverse osmosis support, anti-scalant dosing, and controlled chemical injection in purification systems.",
    description:
      "Desalination and reverse osmosis systems often require controlled chemical dosing for anti-scalant injection, pH adjustment, membrane protection, and pre-treatment support. This metering pump option is suited to purification and desalination projects where dosing stability is important to system reliability.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-RO-DP-001",
    imageUrl: "/assets/products/desalination-nd1000-metering-pump.jpg",
    galleryImages: [
      "/assets/products/desalination-nd1000-metering-pump.jpg",
      "/assets/products/desalination-metering-pump.webp",
      "/assets/products/nd-mechanical-motor-dosing-pump.png"
    ],
    features: [
      "Suitable for desalination and RO chemical dosing support",
      "Applicable for anti-scalant, pH adjustment, and pre-treatment dosing",
      "Supports controlled metering in purification process lines",
      "Can be selected alongside RO system accessories and plant utilities",
      "Configuration depends on chemical, flow, pressure, and duty cycle"
    ],
    applications: ["Reverse osmosis pre-treatment", "Desalination systems", "Anti-scalant dosing", "pH adjustment", "Commercial purification systems", "Industrial treated water production"],
    specifications: {
      Type: "Desalination metering pump",
      "Typical use": "RO and desalination chemical dosing",
      "Application areas": "Purification, desalination, pre-treatment, membrane protection",
      "Configuration": "Selected per chemical compatibility, dosing flow, and pressure",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Desalination Metering Pump | Watergate Flow Technologies",
    metaDescription: "Desalination metering pump for reverse osmosis support, anti-scalant dosing, pH adjustment, and purification systems.",
    category: productCategories[2]
  },
  {
    id: "coriolis-mass-flow-meter",
    name: "Coriolis Mass Flow Meter",
    slug: "coriolis-mass-flow-meter",
    shortDescription: "High-precision mass flow meter for liquid and gas measurement where direct mass flow, density, and temperature data are required.",
    description:
      "A Coriolis mass flow meter provides direct mass flow measurement for demanding industrial and utility applications. It is suited to projects where accurate liquid or gas flow measurement, density monitoring, and stable process data are required for plant operation and accountability.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-FM-COR-001",
    imageUrl: "/assets/products/coriolis-mass-flow-meter.jpg",
    galleryImages: [
      "/assets/products/coriolis-mass-flow-meter.jpg",
      "/assets/products/coriolis-mass-flow-meter-2.jpg"
    ],
    features: [
      "Direct mass flow measurement",
      "Supports liquid and gas measurement applications",
      "Can provide density and temperature-related process data",
      "Suitable for industrial process and utility monitoring",
      "Quotation based on line size, media, and process conditions"
    ],
    applications: ["Industrial process monitoring", "Water treatment plant utilities", "Chemical dosing systems", "Utility measurement", "Plant instrumentation"],
    specifications: {
      Type: "Coriolis mass flow meter",
      "Measured media": "Liquids and gases, depending on selected model",
      "Measured values": "Mass flow, density, temperature-related data",
      "Application areas": "Industrial and utility process measurement",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Coriolis Mass Flow Meter | Watergate Flow Technologies",
    metaDescription: "Coriolis mass flow meter for liquid and gas process measurement in industrial and utility applications.",
    category: productCategories[3]
  },
  {
    id: "compact-stainless-steel-electromagnetic-flow-meter",
    name: "Compact Stainless Steel Electromagnetic Flow Meter",
    slug: "compact-stainless-steel-electromagnetic-flow-meter",
    shortDescription: "Compact stainless steel electromagnetic flow meter for conductive liquid measurement in treatment, utility, and industrial systems.",
    description:
      "The compact stainless steel electromagnetic flow meter is used for measuring conductive liquids in process and utility pipelines. It is suitable for water treatment, chemical, food, power, steel, and industrial applications where reliable flow measurement is needed.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-FM-MAG-001",
    imageUrl: "/assets/products/compact-stainless-electromagnetic-flow-meter.jpg",
    galleryImages: [
      "/assets/products/compact-stainless-electromagnetic-flow-meter.jpg",
      "/assets/products/compact-stainless-electromagnetic-flow-meter-2.jpg"
    ],
    features: [
      "Electromagnetic flow measurement for conductive liquids",
      "Compact stainless steel body configuration",
      "Suitable for plant utilities and industrial process lines",
      "Useful for water treatment and liquid flow monitoring",
      "Selection depends on pipe size, lining, electrode, and media conditions"
    ],
    applications: ["Water treatment plants", "Industrial utilities", "Chemical process lines", "Commercial plant rooms", "Conductive liquid measurement"],
    specifications: {
      Type: "Electromagnetic flow meter",
      Material: "Stainless steel configuration",
      "Measured media": "Conductive liquids",
      "Application areas": "Water treatment, industrial process, utility flow monitoring",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Compact Stainless Steel Electromagnetic Flow Meter | Watergate Flow Technologies",
    metaDescription: "Compact stainless steel electromagnetic flow meter for conductive liquid measurement in treatment and industrial systems.",
    category: productCategories[3]
  },
  {
    id: "handheld-ultrasonic-flow-meter",
    name: "Handheld Ultrasonic Flow Meter",
    slug: "handheld-ultrasonic-flow-meter",
    shortDescription: "Portable ultrasonic flow meter for non-contact flow checks, commissioning, inspection, and temporary measurement tasks.",
    description:
      "A handheld ultrasonic flow meter supports non-contact flow measurement for commissioning, inspection, maintenance, and temporary monitoring. It is useful where operators need to assess pipe flow without cutting into the line or installing permanent inline equipment.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-FM-US-001",
    imageUrl: "/assets/products/handheld-ultrasonic-flow-meter.jpg",
    galleryImages: [
      "/assets/products/handheld-ultrasonic-flow-meter.jpg",
      "/assets/products/handheld-ultrasonic-flow-meter-2.jpg"
    ],
    features: [
      "Portable non-contact ultrasonic flow measurement",
      "Useful for commissioning and maintenance checks",
      "No moving mechanical parts in the measurement method",
      "Suitable for temporary flow verification across compatible pipes",
      "Selection depends on pipe material, diameter, and fluid condition"
    ],
    applications: ["Plant commissioning", "Flow verification", "Maintenance inspection", "Facility water operations", "Temporary metering tasks"],
    specifications: {
      Type: "Handheld ultrasonic flow meter",
      "Measurement method": "Non-contact ultrasonic",
      "Typical use": "Portable flow checking and temporary measurement",
      "Application areas": "Water systems, plant utilities, maintenance inspections",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Handheld Ultrasonic Flow Meter | Watergate Flow Technologies",
    metaDescription: "Handheld ultrasonic flow meter for portable, non-contact flow checks and plant maintenance inspections.",
    category: productCategories[3]
  },
  {
    id: "ultrasonic-water-meter",
    name: "Ultrasonic Water Meter",
    slug: "ultrasonic-water-meter",
    shortDescription: "Smart ultrasonic water meter for accurate low-maintenance measurement with options for NB-IoT, LoRaWAN, RS-485, and M-Bus communication.",
    description:
      "Ultrasonic water meters use no internal moving measurement parts, making them a strong choice for facilities and utilities that need stable readings, lower maintenance exposure, and smart communication options. They are suited to estate metering, commercial buildings, utility districts, and water systems that need remote data collection and reliable consumption visibility.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-US-001",
    imageUrl: "/assets/products/ultrasonic-water-meter.jpg",
    galleryImages: [
      "/assets/products/ultrasonic-water-meter.jpg",
      "/assets/products/ultrasonic-water-meter-2.jpg"
    ],
    features: [
      "Ultrasonic measurement with no mechanical impeller in the measuring path",
      "Supports smart communication options including NB-IoT, LoRaWAN, RS-485, and M-Bus on applicable configurations",
      "Useful for remote meter reading and consumption monitoring",
      "Suitable for estate, commercial, utility, and facility water systems",
      "Model selection based on pipe size, communication mode, and installation environment"
    ],
    applications: ["Estate metering", "Commercial buildings", "Utility water monitoring", "Facility management", "Remote meter reading", "District water systems"],
    specifications: {
      Type: "Ultrasonic smart water meter",
      "Communication options": "NB-IoT, LoRaWAN, RS-485, M-Bus options",
      "Measurement method": "Ultrasonic",
      "Typical use": "Smart water consumption measurement",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Ultrasonic Water Meter | Watergate Flow Technologies",
    metaDescription: "Ultrasonic water meter for smart consumption monitoring, remote reading, and estate or utility water accountability.",
    category: productCategories[4]
  },
  {
    id: "lora-water-meter",
    name: "LoRa Water Meter",
    slug: "lora-water-meter",
    shortDescription: "Wireless LoRa water meter for low-power remote reading across estates, facilities, and private water operator networks.",
    description:
      "A LoRa water meter supports wireless meter reading where long communication range and low power consumption are important. It is suitable for estate water management, facility metering, commercial sites, and private water operators that want consumption data without relying on frequent manual readings.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-LORA-001",
    imageUrl: "/assets/products/lora-water-meter.jpg",
    galleryImages: [
      "/assets/products/lora-water-meter.jpg",
      "/assets/products/lora-water-meter-2.jpg"
    ],
    features: [
      "LoRa wireless remote reading support",
      "Low-power design for distributed metering environments",
      "Suitable for estate and facility meter networks",
      "Helps reduce manual reading effort and improve consumption visibility",
      "Configuration depends on network layout, meter quantity, and site conditions"
    ],
    applications: ["Residential estates", "Private water operators", "Commercial facilities", "Remote meter reading", "Managed water networks", "Facility management"],
    specifications: {
      Type: "LoRa smart water meter",
      "Communication mode": "LoRa wireless",
      "Typical use": "Low-power remote water meter reading",
      "Application areas": "Estates, facilities, commercial water networks",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "LoRa Water Meter | Watergate Flow Technologies",
    metaDescription: "LoRa water meter for low-power wireless remote reading across estates, facilities, and private water networks.",
    category: productCategories[4]
  },
  {
    id: "lorawan-water-meter",
    name: "LoRaWAN Water Meter",
    slug: "lorawan-water-meter",
    shortDescription: "LoRaWAN smart water meter for remote monitoring, valve control support, and scalable utility metering networks.",
    description:
      "LoRaWAN water meters are designed for smart metering deployments that need long-range communication, remote monitoring, and better operating visibility across many service points. They are well suited to estates, utilities, commercial compounds, and water operators building a more connected metering system.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-LORAWAN-001",
    imageUrl: "/assets/products/lorawan-water-meter.jpg",
    galleryImages: [
      "/assets/products/lorawan-water-meter.jpg",
      "/assets/products/lorawan-water-meter-2.jpg"
    ],
    features: [
      "LoRaWAN communication for smart meter network deployment",
      "Remote monitoring support for water consumption data",
      "Valve control support on applicable configurations",
      "Suitable for scalable utility and estate metering projects",
      "Specification depends on network architecture, line size, and meter class"
    ],
    applications: ["Utility metering", "Estate water networks", "Commercial compounds", "Private water operators", "Smart city water projects", "Remote monitoring"],
    specifications: {
      Type: "LoRaWAN smart water meter",
      "Communication mode": "LoRaWAN",
      "Typical use": "Remote monitoring and smart utility metering",
      "Control support": "Valve control available on applicable configurations",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "LoRaWAN Water Meter | Watergate Flow Technologies",
    metaDescription: "LoRaWAN smart water meter for remote monitoring, scalable utility metering, and connected water networks.",
    category: productCategories[4]
  },
  {
    id: "remote-water-meter",
    name: "Remote Water Meter",
    slug: "remote-water-meter",
    shortDescription: "Remote reading water meter with wired and wireless configuration options for easier billing, monitoring, and facility operation.",
    description:
      "Remote water meters help operators collect consumption data without depending only on physical meter access. Wired and wireless options can support estates, commercial buildings, facility managers, and water operators that need more dependable data capture for billing, monitoring, and maintenance planning.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-REMOTE-001",
    imageUrl: "/assets/products/remote-water-meter.jpg",
    galleryImages: [
      "/assets/products/remote-water-meter.jpg",
      "/assets/products/remote-water-meter-2.jpg"
    ],
    features: [
      "Remote meter reading support for reduced manual access",
      "Wired and wireless options depending on project design",
      "Wireless configurations can include LoRa, LoRaWAN, or NB-IoT options",
      "Useful for estates, commercial properties, and managed water systems",
      "Selection depends on reading distance, building layout, and data workflow"
    ],
    applications: ["Remote billing support", "Commercial building metering", "Estate water operations", "Facility management", "Private utility networks", "Meter reading upgrades"],
    specifications: {
      Type: "Remote reading water meter",
      "Communication options": "Wired remote, LoRa, LoRaWAN, NB-IoT options",
      "Typical use": "Remote consumption data collection",
      "Application areas": "Estates, commercial facilities, private water operators",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Remote Water Meter | Watergate Flow Technologies",
    metaDescription: "Remote water meter for wired or wireless consumption data collection across estates and commercial facilities.",
    category: productCategories[4]
  },
  {
    id: "volumetric-water-meter",
    name: "Volumetric Water Meter",
    slug: "volumetric-water-meter",
    shortDescription: "Rotary piston volumetric water meter for accurate residential and small commercial cold-water consumption measurement.",
    description:
      "Volumetric water meters measure total cold-water consumption in residential units, apartments, and light commercial connections. Their rotary piston design is useful where accurate measurement at lower flow rates is important for billing confidence and consumption accountability.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-VOL-001",
    imageUrl: "/assets/products/volumetric-water-meter.jpg",
    galleryImages: [
      "/assets/products/volumetric-water-meter.jpg",
      "/assets/products/volumetric-water-meter-2.jpg"
    ],
    features: [
      "Rotary piston volumetric measurement design",
      "Suitable for household and residential-unit water consumption",
      "Useful where accurate low-flow measurement matters",
      "Applicable to cold potable water metering projects",
      "Model selection based on connection size, flow range, and site conditions"
    ],
    applications: ["Residential apartments", "Household water metering", "Small commercial units", "Estate billing", "Landlord-managed water supply"],
    specifications: {
      Type: "Volumetric rotary piston water meter",
      "Typical use": "Cold potable water consumption measurement",
      "Application areas": "Households, residential units, small commercial connections",
      "Measurement focus": "Accurate low-flow consumption measurement",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Volumetric Water Meter | Watergate Flow Technologies",
    metaDescription: "Volumetric rotary piston water meter for residential and small commercial cold-water measurement.",
    category: productCategories[4]
  },
  {
    id: "woltman-water-meter",
    name: "Woltman Water Meter",
    slug: "woltman-water-meter",
    shortDescription: "Bulk Woltman water meter for large-diameter pipelines, higher flow capacity, and low-pressure-loss utility measurement.",
    description:
      "Woltman water meters are built for larger pipelines where higher flow capacity and low pressure loss are important. They are suitable for water treatment plants, utility mains, industrial sites, estates, and commercial facilities that need dependable bulk water measurement.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-WOLT-001",
    imageUrl: "/assets/products/woltman-water-meter.jpg",
    galleryImages: [
      "/assets/products/woltman-water-meter.jpg",
      "/assets/products/woltman-water-meter-2.jpg"
    ],
    features: [
      "Designed for large-diameter pipeline measurement",
      "Suitable for high-flow water supply and distribution lines",
      "Low pressure loss design for bulk metering applications",
      "Useful for treatment plants, utilities, and industrial facilities",
      "Sizing depends on pipe diameter, flow demand, and installation layout"
    ],
    applications: ["Bulk water metering", "Water treatment plants", "Utility mains", "Industrial water supply", "Large estates", "Commercial facility infrastructure"],
    specifications: {
      Type: "Woltman bulk water meter",
      "Typical use": "Large-diameter pipeline water measurement",
      "Flow profile": "High circulation capacity with low pressure loss",
      "Application areas": "Utilities, treatment plants, industrial and commercial water systems",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Woltman Water Meter | Watergate Flow Technologies",
    metaDescription: "Woltman bulk water meter for large-diameter pipelines, utility mains, and high-flow water measurement.",
    category: productCategories[4]
  },
  {
    id: "multi-jet-dry-dial-water-meter",
    name: "Multi Jet Dry Dial Water Meter",
    slug: "multi-jet-dry-dial-water-meter",
    shortDescription: "Mechanical multi-jet dry dial water meter for dependable residential, commercial, and facility water consumption measurement.",
    description:
      "Multi-jet dry dial water meters provide a practical mechanical metering option for residential, commercial, and facility water supply lines. They are suited to projects that need dependable consumption measurement with a familiar meter format and straightforward installation.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-MJ-001",
    imageUrl: "/assets/products/multi-jet-dry-dial-water-meter.jpg",
    galleryImages: [
      "/assets/products/multi-jet-dry-dial-water-meter.jpg",
      "/assets/products/multi-jet-dry-dial-water-meter-2.jpg"
    ],
    features: [
      "Mechanical multi-jet dry dial meter design",
      "Available with brass or iron body options on applicable models",
      "Suitable for cold-water and selected hot-water configurations",
      "Practical for residential, estate, and commercial water measurement",
      "Selection depends on meter size, material preference, and water temperature"
    ],
    applications: ["Residential metering", "Commercial buildings", "Estate water billing", "Facility water supply", "Replacement meter projects"],
    specifications: {
      Type: "Multi-jet dry dial water meter",
      "Body options": "Brass or iron body options",
      "Typical use": "Mechanical water consumption measurement",
      "Temperature options": "Cold-water and selected hot-water configurations",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Multi Jet Dry Dial Water Meter | Watergate Flow Technologies",
    metaDescription: "Multi-jet dry dial water meter for residential, commercial, estate, and facility consumption measurement.",
    category: productCategories[4]
  },
  {
    id: "single-jet-lorawan-water-meter",
    name: "Single Jet LoRaWAN Water Meter",
    slug: "single-jet-lorawan-water-meter",
    shortDescription: "Single-jet LoRaWAN smart water meter for real-time consumption monitoring and connected residential or commercial metering.",
    description:
      "A single-jet LoRaWAN water meter combines a compact water meter format with wireless smart-meter communication. It is suitable for connected residential, estate, and commercial metering projects that need remote consumption visibility and more efficient reading workflows.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-SJ-LORAWAN-001",
    imageUrl: "/assets/products/single-jet-lorawan-water-meter.jpg",
    galleryImages: [
      "/assets/products/single-jet-lorawan-water-meter.jpg",
      "/assets/products/single-jet-lorawan-water-meter-2.jpg"
    ],
    features: [
      "Single-jet meter design with LoRaWAN communication",
      "Supports remote consumption monitoring workflows",
      "Suitable for residential and light commercial smart metering",
      "Useful where compact meter size and connected data are both required",
      "Project selection depends on network coverage, pipe size, and meter class"
    ],
    applications: ["Smart residential metering", "Estate water networks", "Commercial tenant metering", "Remote meter reading", "Connected utility projects"],
    specifications: {
      Type: "Single-jet LoRaWAN water meter",
      "Communication mode": "LoRaWAN",
      "Typical use": "Connected residential and commercial water metering",
      "Application areas": "Estates, facilities, private utilities, commercial buildings",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Single Jet LoRaWAN Water Meter | Watergate Flow Technologies",
    metaDescription: "Single-jet LoRaWAN water meter for connected residential, estate, and commercial smart metering.",
    category: productCategories[4]
  },
  {
    id: "sts-ultrasonic-water-meter",
    name: "STS Ultrasonic Water Meter",
    slug: "sts-ultrasonic-water-meter",
    shortDescription: "STS prepaid ultrasonic water meter with smart communication support for modern utility and estate water vending.",
    description:
      "The STS ultrasonic water meter combines token-based prepaid water control with ultrasonic measurement and smart communication options. It is suited to operators that want prepaid revenue protection, remote visibility, and a meter platform with no mechanical measuring impeller in the flow path.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-PWM-STS-US-001",
    imageUrl: "/assets/products/sts-ultrasonic-water-meter.jpg",
    galleryImages: [
      "/assets/products/sts-ultrasonic-water-meter.jpg",
      "/assets/products/sts-ultrasonic-water-meter-2.jpg"
    ],
    features: [
      "STS prepaid water vending support",
      "Ultrasonic water measurement design",
      "Smart communication support on applicable configurations",
      "Useful for remote estate and utility metering operations",
      "Model selection depends on pipe size, vending workflow, and network plan"
    ],
    applications: ["Estate prepaid metering", "Private water operators", "Utility water vending", "Commercial compounds", "Remote consumption monitoring"],
    specifications: {
      Type: "STS ultrasonic prepaid water meter",
      "Payment mode": "STS token prepaid",
      "Measurement method": "Ultrasonic",
      "Communication": "Smart communication options available by configuration",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "STS Ultrasonic Water Meter | Watergate Flow Technologies",
    metaDescription: "STS ultrasonic prepaid water meter for smart water vending, remote visibility, and estate utility revenue control.",
    category: productCategories[1]
  },
  {
    id: "multiple-ic-card-prepaid-water-meter",
    name: "Multiple IC Card Prepaid Water Meter",
    slug: "multiple-ic-card-prepaid-water-meter",
    shortDescription: "Multiple-card prepaid water meter for shared prepaid access workflows in managed residential, commercial, and institutional water systems.",
    description:
      "The multiple IC card prepaid water meter is designed for prepaid water control where more flexible card access is needed. It supports managed water supply environments that need prepaid accountability while allowing approved IC cards within the system to interact with compatible meters.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-PWM-MIC-001",
    imageUrl: "/assets/products/multiple-ic-card-prepaid-water-meter.jpg",
    galleryImages: [
      "/assets/products/multiple-ic-card-prepaid-water-meter.jpg",
      "/assets/products/multiple-ic-card-prepaid-water-meter-2.jpg"
    ],
    features: [
      "IC card prepaid water control",
      "Supports multiple-card access workflows on compatible systems",
      "Useful for managed water points and shared-use installations",
      "Helps improve prepaid billing accountability",
      "Configuration depends on card system, meter quantity, and site rules"
    ],
    applications: ["Institutional water points", "Managed residential supply", "Shared facility water access", "Estate water control", "Commercial water vending"],
    specifications: {
      Type: "Multiple IC card prepaid water meter",
      "Payment mode": "IC card prepaid",
      "Typical use": "Managed prepaid water access",
      "Application areas": "Estates, institutions, shared-use facilities",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Multiple IC Card Prepaid Water Meter | Watergate Flow Technologies",
    metaDescription: "Multiple IC card prepaid water meter for managed water vending, shared-use access, and prepaid accountability.",
    category: productCategories[1]
  },
  {
    id: "single-jet-card-water-meter",
    name: "Single Jet Card Water Meter",
    slug: "single-jet-card-water-meter",
    shortDescription: "Single-jet IC card prepaid water meter for household, apartment, and tenant-level water billing control.",
    description:
      "The single jet card water meter gives each user a card-based prepaid water workflow for household or tenant-level control. It is a practical option for estates, landlords, and commercial buildings that need a compact prepaid meter for individual service points.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-PWM-SJ-CARD-001",
    imageUrl: "/assets/products/single-jet-card-water-meter.jpg",
    galleryImages: [
      "/assets/products/single-jet-card-water-meter.jpg",
      "/assets/products/single-jet-card-water-meter-2.jpg"
    ],
    features: [
      "Single-jet meter design with IC card prepaid control",
      "One-meter, one-card usage model for household accountability",
      "Suitable for compact service points",
      "Supports prepaid billing discipline for managed water supply",
      "Selection depends on connection size, water quality, and billing workflow"
    ],
    applications: ["Residential estates", "Apartment metering", "Tenant water billing", "Landlord-managed supply", "Small commercial connections"],
    specifications: {
      Type: "Single-jet IC card prepaid water meter",
      "Payment mode": "IC card prepaid",
      "Typical use": "Individual household or tenant metering",
      "Application areas": "Estates, apartments, commercial buildings",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Single Jet Card Water Meter | Watergate Flow Technologies",
    metaDescription: "Single-jet IC card prepaid water meter for household, apartment, tenant, and estate water billing control.",
    category: productCategories[1]
  },
  {
    id: "nb-iot-water-meter",
    name: "NB-IoT Water Meter",
    slug: "nb-iot-water-meter",
    shortDescription: "NB-IoT smart water meter for secure, low-power remote reading with deep network coverage for distributed meter points.",
    description:
      "NB-IoT water meters support remote consumption data collection over narrowband IoT networks. They are a strong fit for projects that need wide coverage, low power consumption, many connected meters, and improved visibility without frequent manual reading.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-NBIOT-001",
    imageUrl: "/assets/products/nb-iot-water-meter.jpg",
    galleryImages: [
      "/assets/products/nb-iot-water-meter.jpg",
      "/assets/products/nb-iot-water-meter-2.jpg"
    ],
    features: [
      "NB-IoT remote communication support",
      "Low-power smart metering design",
      "Useful where deeper network coverage is required",
      "Supports large distributed metering deployments",
      "Project planning depends on network availability, meter class, and installation density"
    ],
    applications: ["Smart utility metering", "Estate water networks", "Remote reading projects", "Private water operators", "Commercial facility metering"],
    specifications: {
      Type: "NB-IoT smart water meter",
      "Communication mode": "NB-IoT",
      "Typical use": "Remote meter reading and consumption monitoring",
      "Application areas": "Utilities, estates, facilities, private operators",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "NB-IoT Water Meter | Watergate Flow Technologies",
    metaDescription: "NB-IoT water meter for secure, low-power remote reading and smart utility water monitoring.",
    category: productCategories[4]
  },
  {
    id: "wired-remote-valve-control-water-meter",
    name: "Wired Remote Valve Control Water Meter",
    slug: "wired-remote-valve-control-water-meter",
    shortDescription: "Wired remote water meter with valve-control support for managed supply, consumption control, and building water operations.",
    description:
      "The wired remote valve-control water meter adds controllable supply management to a remote-reading meter platform. It is suitable for properties and operators that need wired data reliability plus the ability to manage supply events through a valve-control workflow.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-WRV-001",
    imageUrl: "/assets/products/wired-remote-valve-control-water-meter.jpg",
    galleryImages: [
      "/assets/products/wired-remote-valve-control-water-meter.jpg",
      "/assets/products/wired-remote-valve-control-water-meter-2.jpg"
    ],
    features: [
      "Wired remote reading support",
      "Valve-control support on compatible systems",
      "Suitable for managed supply and account-control workflows",
      "Useful where wired meter communication is preferred",
      "Selection depends on wiring layout, controller design, and meter size"
    ],
    applications: ["Managed buildings", "Estate water control", "Commercial tenant metering", "Facility operations", "Private utility systems"],
    specifications: {
      Type: "Wired remote valve-control water meter",
      "Communication mode": "Wired remote",
      "Control support": "Valve-control function on applicable configurations",
      "Typical use": "Remote reading with managed supply control",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Wired Remote Valve Control Water Meter | Watergate Flow Technologies",
    metaDescription: "Wired remote valve-control water meter for managed water supply, account control, and building metering.",
    category: productCategories[4]
  },
  {
    id: "bulk-wired-remote-water-meter",
    name: "Bulk Wired Remote Water Meter",
    slug: "bulk-wired-remote-water-meter",
    shortDescription: "Bulk wired remote water meter for large-line measurement with remote reading and higher-flow utility accountability.",
    description:
      "Bulk wired remote water meters support large-line consumption measurement while making meter data easier to collect. They are suited to utility mains, estate inlets, commercial facilities, and treatment plant lines where bulk flow accountability and remote reading are both important.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-BWR-001",
    imageUrl: "/assets/products/bulk-wired-remote-water-meter.jpg",
    galleryImages: [
      "/assets/products/bulk-wired-remote-water-meter.jpg",
      "/assets/products/bulk-wired-remote-water-meter-2.jpg"
    ],
    features: [
      "Bulk water measurement for larger pipelines",
      "Wired remote reading support",
      "Useful for high-flow distribution and facility inlet points",
      "Supports improved utility and estate consumption accountability",
      "Sizing depends on pipe diameter, flow profile, and wiring layout"
    ],
    applications: ["Bulk water metering", "Estate inlet metering", "Utility mains", "Commercial facility infrastructure", "Treatment plant distribution"],
    specifications: {
      Type: "Bulk wired remote water meter",
      "Communication mode": "Wired remote",
      "Typical use": "Large-line water measurement",
      "Application areas": "Utilities, estates, industrial and commercial sites",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Bulk Wired Remote Water Meter | Watergate Flow Technologies",
    metaDescription: "Bulk wired remote water meter for large-line utility measurement and remote consumption data collection.",
    category: productCategories[4]
  },
  {
    id: "bulk-nb-iot-water-meter",
    name: "Bulk NB-IoT Water Meter",
    slug: "bulk-nb-iot-water-meter",
    shortDescription: "Bulk NB-IoT smart water meter for large pipelines, remote reading, and valve-control utility workflows.",
    description:
      "Bulk NB-IoT water meters combine large-line measurement with direct narrowband IoT communication for remote data collection. They are useful for utility operators, estates, industrial sites, and commercial facilities that need connected bulk measurement and stronger operating visibility.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-BNBIOT-001",
    imageUrl: "/assets/products/bulk-nb-iot-water-meter.jpg",
    galleryImages: [
      "/assets/products/bulk-nb-iot-water-meter.jpg",
      "/assets/products/bulk-nb-iot-water-meter-2.jpg"
    ],
    features: [
      "Bulk water meter design for larger pipelines",
      "NB-IoT direct remote communication support",
      "Valve-control support on applicable models",
      "Suitable for remote utility and estate inlet metering",
      "Specification depends on pipe size, network coverage, and control requirements"
    ],
    applications: ["Bulk utility metering", "Estate inlet monitoring", "Industrial water supply", "Commercial facility mains", "Remote water network monitoring"],
    specifications: {
      Type: "Bulk NB-IoT water meter",
      "Communication mode": "NB-IoT",
      "Typical use": "Connected bulk water measurement",
      "Control support": "Valve-control support on applicable configurations",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Bulk NB-IoT Water Meter | Watergate Flow Technologies",
    metaDescription: "Bulk NB-IoT water meter for connected large-line water measurement, remote reading, and utility monitoring.",
    category: productCategories[4]
  },
  {
    id: "wired-remote-water-meter",
    name: "Wired Remote Water Meter",
    slug: "wired-remote-water-meter",
    shortDescription: "Wired remote water meter for accurate direct-reading data collection in buildings, estates, and managed water networks.",
    description:
      "Wired remote water meters support remote data collection through a cabled meter-reading system. They are suited to properties where a stable wired communication path is preferred and operators need accurate meter position reading without routine manual access.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-WR-001",
    imageUrl: "/assets/products/wired-remote-water-meter.jpg",
    galleryImages: [
      "/assets/products/wired-remote-water-meter.jpg",
      "/assets/products/wired-remote-water-meter-2.jpg"
    ],
    features: [
      "Wired remote meter reading support",
      "Direct-reading data workflow on compatible systems",
      "Useful for buildings where physical access is inconvenient",
      "Low-power remote metering configuration",
      "Project selection depends on wiring route, controller setup, and meter size"
    ],
    applications: ["Commercial buildings", "Estate water networks", "Facility metering", "Tenant billing support", "Remote reading upgrades"],
    specifications: {
      Type: "Wired remote water meter",
      "Communication mode": "Wired remote",
      "Typical use": "Remote meter position reading",
      "Application areas": "Buildings, estates, facilities, private water networks",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Wired Remote Water Meter | Watergate Flow Technologies",
    metaDescription: "Wired remote water meter for direct-reading consumption data collection in buildings, estates, and facilities.",
    category: productCategories[4]
  },
  {
    id: "irrigation-water-meter",
    name: "Irrigation Water Meter",
    slug: "irrigation-water-meter",
    shortDescription: "Irrigation water meter for agricultural supply lines, landscape systems, and higher-flow raw or treated water measurement.",
    description:
      "Irrigation water meters are designed for supply lines where agricultural, landscape, or outdoor water use must be measured reliably. They are suitable for farms, estates, parks, and larger site utilities that need consumption accountability outside standard indoor plumbing applications.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-IRR-001",
    imageUrl: "/assets/products/irrigation-water-meter.jpg",
    galleryImages: [
      "/assets/products/irrigation-water-meter.jpg",
      "/assets/products/irrigation-water-meter-2.jpg"
    ],
    features: [
      "Designed for irrigation and outdoor water supply measurement",
      "Suitable for higher-flow service lines",
      "Useful for agricultural, estate, and landscape water accountability",
      "Can support treated or raw water supply applications depending on configuration",
      "Sizing depends on pipeline diameter, flow rate, and water conditions"
    ],
    applications: ["Agricultural irrigation", "Landscape water supply", "Estate grounds management", "Parks and recreation facilities", "Outdoor utility metering"],
    specifications: {
      Type: "Irrigation water meter",
      "Typical use": "Outdoor and agricultural water measurement",
      "Application areas": "Farms, estates, landscapes, irrigation networks",
      "Configuration": "Selected per line size and flow demand",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Irrigation Water Meter | Watergate Flow Technologies",
    metaDescription: "Irrigation water meter for agricultural, landscape, estate, and outdoor water supply measurement.",
    category: productCategories[4]
  },
  {
    id: "wpd-woltman-water-meter",
    name: "WPD Woltman Water Meter",
    slug: "wpd-woltman-water-meter",
    shortDescription: "WPD Woltman bulk water meter for municipal, industrial, and estate systems with large flow-rate measurement requirements.",
    description:
      "The WPD Woltman water meter is a bulk meter option for large water flow rates in distribution and facility systems. It is suited to municipal supply networks, industrial water systems, commercial infrastructure, and estate main lines that require stable large-volume measurement.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-WPD-001",
    imageUrl: "/assets/products/wpd-woltman-water-meter.jpg",
    galleryImages: [
      "/assets/products/wpd-woltman-water-meter.jpg",
      "/assets/products/wpd-woltman-water-meter-2.jpg"
    ],
    features: [
      "Woltman bulk meter design",
      "Suitable for large water flow-rate measurement",
      "Useful for municipal, industrial, and estate distribution lines",
      "Designed for utility accountability on main lines",
      "Specification depends on diameter, range ratio, and flow profile"
    ],
    applications: ["Municipal water supply", "Industrial water systems", "Estate mains", "Commercial facility infrastructure", "Bulk distribution measurement"],
    specifications: {
      Type: "WPD Woltman bulk water meter",
      "Typical use": "Large-flow water measurement",
      "Application areas": "Municipal, industrial, estate and commercial mains",
      "Configuration": "Selected per pipe diameter and required flow range",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "WPD Woltman Water Meter | Watergate Flow Technologies",
    metaDescription: "WPD Woltman bulk water meter for municipal, industrial, estate, and commercial large-flow measurement.",
    category: productCategories[4]
  },
  {
    id: "horizontal-woltman-water-meter",
    name: "Horizontal Woltman Water Meter",
    slug: "horizontal-woltman-water-meter",
    shortDescription: "Horizontal Woltman water meter for axial-flow measurement, large circulation capacity, and low pressure loss.",
    description:
      "Horizontal Woltman water meters support axial-flow measurement in larger pipelines. They are useful where the system needs strong circulation capacity, a broad measuring range, and low pressure loss for utility, industrial, and commercial water supply lines.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-HWOLT-001",
    imageUrl: "/assets/products/horizontal-woltman-water-meter.jpg",
    galleryImages: [
      "/assets/products/horizontal-woltman-water-meter.jpg",
      "/assets/products/horizontal-woltman-water-meter-2.jpg"
    ],
    features: [
      "Horizontal Woltman axial-flow meter design",
      "Large circulation capacity for higher-flow lines",
      "Low pressure loss for bulk water applications",
      "Wide measuring range for changing flow conditions",
      "Selection depends on line size, installation orientation, and flow demand"
    ],
    applications: ["Utility distribution", "Industrial supply lines", "Commercial mains", "Estate bulk metering", "Treatment plant output lines"],
    specifications: {
      Type: "Horizontal Woltman water meter",
      "Flow direction": "Axial-flow measurement",
      "Typical use": "Bulk water measurement",
      "Application areas": "Large-diameter utility and facility pipelines",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Horizontal Woltman Water Meter | Watergate Flow Technologies",
    metaDescription: "Horizontal Woltman water meter for axial-flow large-line measurement, bulk metering, and low pressure loss.",
    category: productCategories[4]
  },
  {
    id: "stainless-steel-water-meter",
    name: "Stainless Steel Water Meter",
    slug: "stainless-steel-water-meter",
    shortDescription: "Stainless steel residential water meter with multi-jet measurement, easy-read register, and durable body construction.",
    description:
      "Stainless steel water meters provide a durable mechanical metering option for residential and light commercial applications. They are useful where body material, easy reading, and dependable day-to-day consumption measurement are important for long-term water accountability.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-SS-001",
    imageUrl: "/assets/products/stainless-steel-water-meter.jpg",
    galleryImages: [
      "/assets/products/stainless-steel-water-meter.jpg",
      "/assets/products/stainless-steel-water-meter-2.jpg"
    ],
    features: [
      "Stainless steel body construction",
      "Multi-jet residential meter design",
      "Easy-read register for routine inspection",
      "Suitable for residential and light commercial water metering",
      "Selection depends on connection size, water conditions, and installation standard"
    ],
    applications: ["Residential metering", "Light commercial metering", "Estate water billing", "Facility water supply", "Replacement meter projects"],
    specifications: {
      Type: "Stainless steel residential water meter",
      Material: "Stainless steel body",
      "Measurement design": "Multi-jet mechanical meter",
      "Typical use": "Residential and light commercial consumption measurement",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Stainless Steel Water Meter | Watergate Flow Technologies",
    metaDescription: "Stainless steel residential water meter for durable mechanical consumption measurement and estate water billing.",
    category: productCategories[4]
  },
  {
    id: "rotary-type-cast-iron-water-meter",
    name: "Rotary Type Cast Iron Water Meter",
    slug: "rotary-type-cast-iron-water-meter",
    shortDescription: "Cast iron multi-jet water meter for practical, economical mechanical metering in residential and utility applications.",
    description:
      "Rotary type cast iron water meters are a practical mechanical option for everyday water consumption measurement. They are suitable for projects that need a familiar, economical meter body for residential, estate, and utility replacement applications.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-CI-001",
    imageUrl: "/assets/products/rotary-type-cast-iron-water-meter.jpg",
    galleryImages: [
      "/assets/products/rotary-type-cast-iron-water-meter.jpg",
      "/assets/products/rotary-type-cast-iron-water-meter-2.jpg"
    ],
    features: [
      "Cast iron body mechanical meter option",
      "Multi-jet measurement design",
      "Practical for common water metering installations",
      "Useful for residential, estate, and replacement projects",
      "Specification depends on meter size, flow range, and water conditions"
    ],
    applications: ["Residential metering", "Estate water billing", "Utility replacement projects", "Commercial service lines", "Mechanical meter upgrades"],
    specifications: {
      Type: "Rotary type cast iron water meter",
      Material: "Cast iron body",
      "Measurement design": "Multi-jet mechanical meter",
      "Typical use": "General water consumption measurement",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Rotary Type Cast Iron Water Meter | Watergate Flow Technologies",
    metaDescription: "Rotary type cast iron water meter for practical residential, estate, and utility mechanical metering.",
    category: productCategories[4]
  },
  {
    id: "turbine-water-meter",
    name: "Turbine Water Meter",
    slug: "turbine-water-meter",
    shortDescription: "Turbine water meter for large-diameter pipelines, high circulation capacity, and bulk flow measurement.",
    description:
      "Turbine water meters, also commonly associated with Woltman-style bulk measurement, are suitable for large-diameter pipelines where water flow rates are high. They help operators measure bulk distribution, industrial supply, and estate or facility main lines with reduced pressure loss.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-TURB-001",
    imageUrl: "/assets/products/turbine-water-meter.jpg",
    galleryImages: [
      "/assets/products/turbine-water-meter.jpg",
      "/assets/products/turbine-water-meter-2.jpg"
    ],
    features: [
      "Turbine-style bulk water measurement",
      "Suitable for large-diameter pipelines",
      "High circulation capacity for main-line applications",
      "Useful where low pressure loss and reliable bulk measurement matter",
      "Sizing depends on DN range, flow profile, and installation layout"
    ],
    applications: ["Utility mains", "Industrial water systems", "Estate bulk supply", "Treatment plant lines", "Commercial facility mains"],
    specifications: {
      Type: "Turbine water meter",
      "Typical use": "Large-diameter bulk water measurement",
      "Application areas": "Utilities, industrial sites, estates, commercial mains",
      "Configuration": "Selected per pipe diameter and flow demand",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: false,
    isPublished: true,
    metaTitle: "Turbine Water Meter | Watergate Flow Technologies",
    metaDescription: "Turbine water meter for large-diameter pipeline measurement, utility mains, and bulk water supply lines.",
    category: productCategories[4]
  },
  {
    id: "r200-volumetric-water-meter",
    name: "R200 Volumetric Water Meter",
    slug: "r200-volumetric-water-meter",
    shortDescription: "R200 volumetric water meter for high-precision residential and commercial metering with low starting-flow performance.",
    description:
      "The R200 volumetric water meter is intended for high-precision residential and commercial consumption measurement. It is a good fit for billing applications where low starting flow, long service life, and accurate usage recording are important.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-R200-VOL-001",
    imageUrl: "/assets/products/r200-volumetric-water-meter.jpg",
    galleryImages: [
      "/assets/products/r200-volumetric-water-meter.jpg",
      "/assets/products/r200-volumetric-water-meter-2.jpg"
    ],
    features: [
      "R200 high-precision volumetric measurement class",
      "Low starting-flow performance for better billing sensitivity",
      "Suitable for residential and commercial metering",
      "Useful where accurate low-flow consumption recording matters",
      "Selection depends on connection size, water quality, and metering standard"
    ],
    applications: ["Residential billing", "Commercial metering", "Estate water accountability", "Apartment metering", "Replacement meter projects"],
    specifications: {
      Type: "R200 volumetric water meter",
      "Measurement class": "R200",
      "Typical use": "High-precision residential and commercial metering",
      "Measurement focus": "Low starting flow and accurate consumption recording",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "R200 Volumetric Water Meter | Watergate Flow Technologies",
    metaDescription: "R200 volumetric water meter for high-precision residential, commercial, and estate water billing.",
    category: productCategories[4]
  },
  {
    id: "electromagnetic-water-meter",
    name: "Electromagnetic Water Meter",
    slug: "electromagnetic-water-meter",
    shortDescription: "Electromagnetic water meter for large flow variation, high measuring range, and remote transmission in utility systems.",
    description:
      "Electromagnetic water meters are suited to water systems with large flow changes and a need for wide measuring range. They support modern sensing, converter, and remote transmission workflows for utility, industrial, and treatment plant applications where stable data matters.",
    price: null,
    priceLabel: "Contact for Pricing",
    sku: "WG-WM-EM-001",
    imageUrl: "/assets/products/electromagnetic-water-meter.jpg",
    galleryImages: [
      "/assets/products/electromagnetic-water-meter.jpg",
      "/assets/products/electromagnetic-water-meter-2.jpg"
    ],
    features: [
      "Electromagnetic water measurement technology",
      "Wide measuring range for changing flow conditions",
      "Remote transmission support on applicable configurations",
      "Suitable for utility, industrial, and plant water systems",
      "Selection depends on line size, conductivity, pressure, and data requirements"
    ],
    applications: ["Utility water monitoring", "Industrial water systems", "Treatment plant instrumentation", "Commercial facility mains", "Remote flow data collection"],
    specifications: {
      Type: "Electromagnetic water meter",
      "Measurement range": "R160 to R400 options on applicable configurations",
      "Typical use": "Water systems with large flow variation",
      "Communication": "Remote transmission support by configuration",
      "Pricing": "Contact for project-specific quotation"
    },
    isFeatured: true,
    isPublished: true,
    metaTitle: "Electromagnetic Water Meter | Watergate Flow Technologies",
    metaDescription: "Electromagnetic water meter for large flow variation, remote transmission, and utility water system monitoring.",
    category: productCategories[4]
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
