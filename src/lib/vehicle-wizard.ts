import { automotiveBatteries, type Battery } from "@/lib/battery-data";

export const wizardVehicleTypes = [
  { id: "car", label: "Cars" },
  { id: "suv", label: "SUVs" },
  { id: "truck", label: "Trucks" },
  { id: "tractor", label: "Tractors" },
  { id: "commercial", label: "Commercial" },
  { id: "scooter", label: "Scooters" },
] as const;

export type WizardVehicleType = (typeof wizardVehicleTypes)[number]["id"];

export interface VehicleWizardEntry {
  type: WizardVehicleType;
  brand: string;
  model: string;
  recommendationStatus: "supported" | "coming-soon";
  recommendedBatteryIds: string[];
}

const wizardEntries: VehicleWizardEntry[] = [
  { type: "car", brand: "Maruti Suzuki", model: "Alto / Alto K10", recommendationStatus: "supported", recommendedBatteryIds: ["sl-40"] },
  { type: "car", brand: "Maruti Suzuki", model: "WagonR / Celerio", recommendationStatus: "supported", recommendedBatteryIds: ["sl-40"] },
  { type: "car", brand: "Maruti Suzuki", model: "S-Presso", recommendationStatus: "supported", recommendedBatteryIds: ["sl-40"] },
  { type: "car", brand: "Maruti Suzuki", model: "Eeco", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Maruti Suzuki", model: "Swift / Dzire / Baleno", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Maruti Suzuki", model: "Ciaz", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "car", brand: "Hyundai", model: "Grand i10 / i20", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Hyundai", model: "Aura", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Hyundai", model: "Verna", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "car", brand: "Hyundai", model: "Exter", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Honda", model: "Amaze", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Honda", model: "City", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "car", brand: "Tata", model: "Tiago / Tigor", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Tata", model: "Altroz", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Toyota", model: "Glanza", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "car", brand: "Toyota", model: "Camry", recommendationStatus: "supported", recommendedBatteryIds: ["sl-75"] },
  { type: "car", brand: "Skoda", model: "Slavia", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "car", brand: "Volkswagen", model: "Virtus", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "car", brand: "Renault", model: "Kwid", recommendationStatus: "supported", recommendedBatteryIds: ["sl-40"] },
  { type: "car", brand: "Nissan", model: "Magnite", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "suv", brand: "Hyundai", model: "Venue", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Hyundai", model: "Creta", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Hyundai", model: "Alcazar", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "suv", brand: "Kia", model: "Sonet", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Kia", model: "Seltos", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Kia", model: "Carens", recommendationStatus: "supported", recommendedBatteryIds: ["sl-75"] },
  { type: "suv", brand: "Maruti Suzuki", model: "Brezza", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Maruti Suzuki", model: "Fronx", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "suv", brand: "Maruti Suzuki", model: "Grand Vitara", recommendationStatus: "supported", recommendedBatteryIds: ["sl-75"] },
  { type: "suv", brand: "Mahindra", model: "Bolero", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "suv", brand: "Mahindra", model: "Scorpio", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "suv", brand: "Mahindra", model: "XUV300 / XUV 3XO", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Mahindra", model: "XUV700", recommendationStatus: "supported", recommendedBatteryIds: ["sl-90"] },
  { type: "suv", brand: "Mahindra", model: "Thar", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "suv", brand: "Toyota", model: "Fortuner", recommendationStatus: "supported", recommendedBatteryIds: ["sl-90"] },
  { type: "suv", brand: "Toyota", model: "Urban Cruiser Hyryder", recommendationStatus: "supported", recommendedBatteryIds: ["sl-75"] },
  { type: "suv", brand: "Tata", model: "Punch", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "suv", brand: "Tata", model: "Nexon", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Tata", model: "Harrier / Safari", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "suv", brand: "Skoda", model: "Kushaq", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Volkswagen", model: "Taigun", recommendationStatus: "supported", recommendedBatteryIds: ["sl-70"] },
  { type: "suv", brand: "Renault", model: "Kiger", recommendationStatus: "supported", recommendedBatteryIds: ["sl-60"] },
  { type: "truck", brand: "Tata", model: "407", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "truck", brand: "Tata", model: "709", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "truck", brand: "Tata", model: "1109", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "truck", brand: "Tata", model: "1613 / 1615", recommendationStatus: "supported", recommendedBatteryIds: ["sl-150"] },
  { type: "truck", brand: "Ashok Leyland", model: "Partner", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "truck", brand: "Ashok Leyland", model: "Boss", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "truck", brand: "Ashok Leyland", model: "2820 / 2825", recommendationStatus: "supported", recommendedBatteryIds: ["sl-150"] },
  { type: "truck", brand: "Eicher", model: "Pro 2049", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "truck", brand: "Eicher", model: "Pro 2095XP", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "truck", brand: "Eicher", model: "Pro 3015", recommendationStatus: "supported", recommendedBatteryIds: ["sl-150"] },
  { type: "truck", brand: "BharatBenz", model: "2823", recommendationStatus: "supported", recommendedBatteryIds: ["sl-150"] },
  { type: "truck", brand: "BharatBenz", model: "3528", recommendationStatus: "supported", recommendedBatteryIds: ["sl-180"] },
  { type: "truck", brand: "Mahindra", model: "Furio 7 / Furio 14", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "tractor", brand: "Mahindra", model: "575 DI", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "tractor", brand: "Mahindra", model: "275 DI TU", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "tractor", brand: "Mahindra", model: "Arjun Novo 605", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "tractor", brand: "Swaraj", model: "744 FE", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "tractor", brand: "Swaraj", model: "735 FE", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "tractor", brand: "Sonalika", model: "DI 750", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "tractor", brand: "Sonalika", model: "DI 745 III", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "tractor", brand: "John Deere", model: "5050D", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "tractor", brand: "New Holland", model: "3630 TX Plus", recommendationStatus: "supported", recommendedBatteryIds: ["sl-120"] },
  { type: "tractor", brand: "Massey Ferguson", model: "241 DI", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "tractor", brand: "Farmtrac", model: "45 Classic", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "commercial", brand: "Tata", model: "Ace", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Tata", model: "Intra V30 / V50", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Ashok Leyland", model: "Dost", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Ashok Leyland", model: "Bada Dost", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "commercial", brand: "Mahindra", model: "Jeeto", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Mahindra", model: "Bolero Pickup", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Mahindra", model: "Supro Profit Truck", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Force", model: "Traveller", recommendationStatus: "supported", recommendedBatteryIds: ["sl-100"] },
  { type: "commercial", brand: "Force", model: "Trax Cruiser", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "commercial", brand: "Piaggio", model: "Ape Xtra", recommendationStatus: "supported", recommendedBatteryIds: ["sl-80"] },
  { type: "scooter", brand: "Honda", model: "Activa", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Honda", model: "Dio", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Honda", model: "Activa 125", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "TVS", model: "Jupiter", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "TVS", model: "Ntorq 125", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "TVS", model: "Scooty Zest", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Suzuki", model: "Access 125", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Suzuki", model: "Burgman Street", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Hero", model: "Pleasure+", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Hero", model: "Destini 125", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Yamaha", model: "Fascino 125", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
  { type: "scooter", brand: "Yamaha", model: "RayZR 125", recommendationStatus: "coming-soon", recommendedBatteryIds: [] },
];

export function getWizardBrands(type: WizardVehicleType) {
  return Array.from(
    new Set(
      wizardEntries
        .filter((entry) => entry.type === type)
        .map((entry) => entry.brand)
    )
  );
}

export function getWizardModels(type: WizardVehicleType, brand: string) {
  return wizardEntries.filter(
    (entry) => entry.type === type && entry.brand === brand
  );
}

export function getWizardEntry(type: WizardVehicleType, brand: string, model: string) {
  return (
    wizardEntries.find(
      (entry) =>
        entry.type === type &&
        entry.brand === brand &&
        entry.model === model
    ) ?? null
  );
}

export function getRecommendedBatteries(ids: string[]): Battery[] {
  return ids
    .map((id) => automotiveBatteries.find((battery) => battery.id === id))
    .filter((battery): battery is Battery => Boolean(battery));
}
