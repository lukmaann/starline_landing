import { automotiveBatteries } from "@/lib/battery-data";
import { BatteryProfile } from "@/components/batteries/BatteryProfile";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BatteryProfilePage({ params }: PageProps) {
  const resolvedParams = await params;
  const battery = automotiveBatteries.find((b) => b.slug === resolvedParams.slug);

  if (!battery) {
    notFound();
  }

  return <BatteryProfile battery={battery} />;
}

export async function generateStaticParams() {
  return automotiveBatteries.map((battery) => ({
    slug: battery.slug,
  }));
}
