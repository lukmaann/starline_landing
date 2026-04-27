export interface Battery {
  id: string;
  name: string;
  slug: string;
  capacity: string;
  warranty: string;
  image: string;
  category: 'automotive' | 'inverter';
  voltage: string;
  price: number;
  description: string;
  applications: string[];
  features: string[];
}

export const automotiveBatteries: Battery[] = [
  {
    id: "sl-40",
    name: "SL 40",
    slug: "sl-40",
    capacity: "40 AH",
    warranty: "36 Months",
    image: "/images/automotive-batteries/battery-sl40.png",
    category: "automotive",
    voltage: "12V",
    price: 2300,
    description: "Compact and powerful, perfect for small sedans and hatchbacks. Engineered for reliable starts in all weather conditions.",
    applications: ["Small Hatchbacks", "Compact Sedans", "Home Generators"],
    features: ["Maintenance Free", "High Cranking Power", "Vibration Resistant"]
  },
  {
    id: "sl-60",
    name: "SL 60",
    slug: "sl-60",
    capacity: "60 AH",
    warranty: "36 Months",
    image: "/images/automotive-batteries/battery-sl60.png",
    category: "automotive",
    voltage: "12V",
    price: 3450,
    description: "Balanced performance for mid-sized vehicles. Provides consistent power delivery and extended service life.",
    applications: ["Mid-size Sedans", "Compact SUVs", "Light Vehicles"],
    features: ["Optimized Grid Design", "Enhanced Safety Venting", "Long Shelf Life"]
  },
  {
    id: "sl-70",
    name: "SL 70",
    slug: "sl-70",
    capacity: "70 AH",
    warranty: "48 Months",
    image: "/images/automotive-batteries/battery-sl70.png",
    category: "automotive",
    voltage: "12V",
    price: 4200,
    description: "Heavy-duty performance for premium sedans and entry-level SUVs. Designed for high electrical demand vehicles.",
    applications: ["Premium Sedans", "SUVs", "Executive Cars"],
    features: ["Advanced Calcium Technology", "Superior Charge Acceptance", "Leak-proof Design"]
  },
  {
    id: "sl-75",
    name: "SL 75",
    slug: "sl-75",
    capacity: "75 AH",
    warranty: "48 Months",
    image: "/images/automotive-batteries/battery-sl75.png",
    category: "automotive",
    voltage: "12V",
    price: 4600,
    description: "Extra power for demanding applications. Features enhanced durability for rough road conditions.",
    applications: ["Luxury Sedans", "Off-road Vehicles", "SUVs"],
    features: ["Reinforced Casing", "Low Self-Discharge", "Eco-friendly Manufacturing"]
  },
  {
    id: "sl-80",
    name: "SL 80",
    slug: "sl-80",
    capacity: "80 AH",
    warranty: "48 Months",
    image: "/images/automotive-batteries/battery-sl80.png",
    category: "automotive",
    voltage: "12V",
    price: 5100,
    description: "Robust energy storage for SUVs and commercial light vehicles. Built to withstand extreme temperatures.",
    applications: ["Large SUVs", "Light Commercial Vehicles", "Delivery Vans"],
    features: ["Anti-Sulfation Technology", "High Reserve Capacity", "Quick Start Recovery"]
  },
  {
    id: "sl-90",
    name: "SL 90",
    slug: "sl-90",
    capacity: "90 AH",
    warranty: "60 Months",
    image: "/images/automotive-batteries/battery-sl90.png",
    category: "automotive",
    voltage: "12V",
    price: 5800,
    description: "Premium power for high-end luxury vehicles and heavy SUVs. Exceptional performance under load.",
    applications: ["Heavy SUVs", "Luxury Imports", "High-performance Cars"],
    features: ["Magic Eye Indicator", "Full Sealed Maintenance Free", "Heavy Duty Grids"]
  },
  {
    id: "sl-100",
    name: "SL 100",
    slug: "sl-100",
    capacity: "100 AH",
    warranty: "60 Months",
    image: "/images/automotive-batteries/battery-sl100.png",
    category: "automotive",
    voltage: "12V",
    price: 6500,
    description: "Professional grade battery for commercial vehicles and high-power applications. Maximum reliability.",
    applications: ["Trucks", "Commercial Buses", "Heavy Machinery"],
    features: ["Maximized Plate Surface", "Extra Thick Plates", "Rugged Construction"]
  },
  {
    id: "sl-120",
    name: "SL 120",
    slug: "sl-120",
    capacity: "120 AH",
    warranty: "60 Months",
    image: "/images/automotive-batteries/battery-sl120.png",
    category: "automotive",
    voltage: "12V",
    price: 7800,
    description: "Extreme duty battery for heavy trucks and industrial machinery. Engineered for continuous performance.",
    applications: ["Heavy Duty Trucks", "Earth Moving Equipment", "Industrial Engines"],
    features: ["Dual-Purpose Capability", "Deep Discharge Resistance", "Military Grade Build"]
  },
  {
    id: "sl-130",
    name: "SL 130",
    slug: "sl-130",
    capacity: "130 AH",
    warranty: "72 Months",
    image: "/images/automotive-batteries/battery-sl130.png",
    category: "automotive",
    voltage: "12V",
    price: 8400,
    description: "Ultra-high capacity for specialized heavy equipment. The pinnacle of Starline's automotive engineering.",
    applications: ["Specialized Heavy Equipment", "Large Transport Trucks", "Marine Engines"],
    features: ["Hyper-Conductive Tabs", "Precision Paste Technology", "Extended Warranty"]
  },
  {
    id: "sl-150",
    name: "SL 150",
    slug: "sl-150",
    capacity: "150 AH",
    warranty: "72 Months",
    image: "/images/automotive-batteries/battery-sl150.png",
    category: "automotive",
    voltage: "12V",
    price: 9800,
    description: "Massive power storage for heavy-duty commercial transport and off-road industrial use.",
    applications: ["Multi-axle Trucks", "Industrial Generators", "Large Buses"],
    features: ["Multi-Step Plate Curing", "Enhanced Electrolyte Flow", "Max Durability"]
  },
  {
    id: "sl-180",
    name: "SL 180",
    slug: "sl-180",
    capacity: "180 AH",
    warranty: "72 Months",
    image: "/images/automotive-batteries/battery-sl180.png",
    category: "automotive",
    voltage: "12V",
    price: 11500,
    description: "The ultimate power solution. Maximum capacity for the most demanding energy requirements on wheels.",
    applications: ["Ultimate Heavy Duty Trucks", "Large Marine Vessels", "Mining Equipment"],
    features: ["Ultimate Reserve Capacity", "Reinforced Internal Structure", "All-Season Reliability"]
  }
];
