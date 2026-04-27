"use client";

import { useMemo, useState } from "react";
import { Car, Tractor, Truck } from "lucide-react";
import { BatteryCard } from "@/components/batteries/BatteryCard";
import { automotiveBatteries } from "@/lib/battery-data";
import {
  getRecommendedBatteries,
  getWizardBrands,
  getWizardEntry,
  getWizardModels,
  type WizardVehicleType,
  wizardVehicleTypes,
} from "@/lib/vehicle-wizard";

const useCaseOptions = [
  { id: "all", label: "All Vehicles" },
  { id: "car", label: "Cars" },
  { id: "suv", label: "SUVs" },
  { id: "truck", label: "Trucks" },
  { id: "tractor", label: "Tractors" },
  { id: "commercial", label: "Commercial" },
] as const;

type UseCaseId = (typeof useCaseOptions)[number]["id"];

function getBatteryUseCases(applications: string[]) {
  const text = applications.join(" ").toLowerCase();
  const matches = new Set<UseCaseId>();

  if (
    text.includes("car") ||
    text.includes("sedan") ||
    text.includes("hatchback") ||
    text.includes("executive")
  ) {
    matches.add("car");
  }

  if (text.includes("suv") || text.includes("off-road")) {
    matches.add("suv");
  }

  if (text.includes("truck") || text.includes("bus") || text.includes("transport")) {
    matches.add("truck");
  }

  if (
    text.includes("tractor") ||
    text.includes("earth moving") ||
    text.includes("machinery") ||
    text.includes("equipment") ||
    text.includes("industrial")
  ) {
    matches.add("tractor");
  }

  if (
    text.includes("commercial") ||
    text.includes("delivery") ||
    text.includes("fleet") ||
    text.includes("generator") ||
    text.includes("van")
  ) {
    matches.add("commercial");
  }

  if (matches.size === 0) {
    matches.add("commercial");
  }

  return matches;
}

function getVehicleIcon(type: string) {
  if (type === "car" || type === "suv") return <Car className="h-4 w-4" />;
  if (type === "truck" || type === "commercial") return <Truck className="h-4 w-4" />;
  if (type === "tractor") return <Tractor className="h-4 w-4" />;
  return <Car className="h-4 w-4" />;
}

export default function AutomotivePage() {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCaseId>("all");
  const [vehicleType, setVehicleType] = useState<WizardVehicleType>("car");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [showAllBatteries, setShowAllBatteries] = useState(false);

  const filteredBatteries = automotiveBatteries.filter((battery) => {
    const matchesUseCase =
      selectedUseCase === "all" ||
      getBatteryUseCases(battery.applications).has(selectedUseCase);

    return matchesUseCase;
  });

  const availableBrands = useMemo(() => getWizardBrands(vehicleType), [vehicleType]);
  const availableModels = useMemo(
    () => (vehicleBrand ? getWizardModels(vehicleType, vehicleBrand) : []),
    [vehicleBrand, vehicleType]
  );
  const selectedVehicle = useMemo(
    () =>
      vehicleBrand && vehicleModel
        ? getWizardEntry(vehicleType, vehicleBrand, vehicleModel)
        : null,
    [vehicleBrand, vehicleModel, vehicleType]
  );
  const recommendedBatteries = useMemo(
    () =>
      selectedVehicle?.recommendationStatus === "supported"
        ? getRecommendedBatteries(selectedVehicle.recommendedBatteryIds)
        : [],
    [selectedVehicle]
  );

  return (
    <div className="min-h-screen bg-[#030303] pt-20 pb-16 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_48%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-6xl rounded-[1rem] border border-white/10 bg-[#0a0a0a]/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:p-5">
          <div className="rounded-[0.9rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <label className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Vehicle type
                </span>
                <select
                  value={vehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value as WizardVehicleType);
                    setVehicleBrand("");
                    setVehicleModel("");
                  }}
                  className="h-12 w-full rounded-md border border-white/10 bg-[#0b0b0b] px-3 text-sm text-white outline-none transition-colors focus:border-red-500/40"
                >
                  {wizardVehicleTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Brand
                </span>
                <select
                  value={vehicleBrand}
                  onChange={(e) => {
                    setVehicleBrand(e.target.value);
                    setVehicleModel("");
                  }}
                  className="h-12 w-full rounded-md border border-white/10 bg-[#0b0b0b] px-3 text-sm text-white outline-none transition-colors focus:border-red-500/40"
                >
                  <option value="">Select brand</option>
                  {availableBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  Model
                </span>
                <select
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="h-12 w-full rounded-md border border-white/10 bg-[#0b0b0b] px-3 text-sm text-white outline-none transition-colors focus:border-red-500/40"
                >
                  <option value="">Select model</option>
                  {availableModels.map((entry) => (
                    <option key={entry.model} value={entry.model}>
                      {entry.model}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {selectedVehicle && (
              <div className="mt-4 rounded-md border border-white/10 bg-black/30 p-4">
                <div className="flex items-center gap-2 text-zinc-300">
                  {getVehicleIcon(selectedVehicle.type)}
                  <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                    Selected vehicle
                  </span>
                </div>
                <p className="mt-2 text-lg font-medium text-white">
                  {selectedVehicle.brand} {selectedVehicle.model}
                </p>
                {selectedVehicle.recommendationStatus === "supported" ? (
                  <p className="mt-1 text-sm text-zinc-400">
                    Starline automotive battery recommendations are available for this vehicle.
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-amber-200">
                    Battery mapping for this vehicle category is coming soon.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {recommendedBatteries.length > 0 && (
          <div className="mx-auto mb-8 max-w-6xl">
            <div className="mb-4">
              <h2 className="text-xl font-semibold tracking-tight">Recommended batteries</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Best matches for {selectedVehicle?.brand} {selectedVehicle?.model}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {recommendedBatteries.map((battery) => (
                <BatteryCard key={`recommended-${battery.id}`} battery={battery} />
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto max-w-6xl rounded-[1rem] border border-white/10 bg-[#0a0a0a]/90 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:p-5">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllBatteries((value) => !value)}
              className="h-12 w-full rounded-md border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-white transition-colors hover:bg-white/[0.07] sm:w-auto"
            >
              {showAllBatteries ? "Hide All Batteries" : "View All Batteries Available"}
            </button>
          </div>
        </div>

        {showAllBatteries && (
          <>
            <div className="mx-auto mt-8 max-w-6xl">
              <div className="mb-4 flex flex-wrap gap-2">
                {useCaseOptions.map((option) => {
                  const active = selectedUseCase === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedUseCase(option.id)}
                      className={`inline-flex h-10 items-center gap-2 rounded-xl border px-4 text-sm transition-colors ${
                        active
                          ? "border-red-500/60 bg-red-500/15 text-white"
                          : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.06]"
                      }`}
                    >
                      {option.id === "car" && <Car className="h-4 w-4" />}
                      {option.id === "suv" && <Car className="h-4 w-4" />}
                      {option.id === "truck" && <Truck className="h-4 w-4" />}
                      {option.id === "tractor" && <Tractor className="h-4 w-4" />}
                      {option.id === "commercial" && <Truck className="h-4 w-4" />}
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredBatteries.map((battery) => (
                  <BatteryCard key={battery.id} battery={battery} />
                ))}
              </div>
            </div>

            {filteredBatteries.length === 0 && (
              <div className="mx-auto mt-10 max-w-6xl rounded-[1rem] border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
                <h3 className="text-xl font-semibold text-white">No batteries matched that filter.</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Try a model like <span className="text-zinc-200">SL 70</span> or switch to another vehicle segment.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
