import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Haversine formula to calculate distance between two points in km
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = parseFloat(searchParams.get("lat") || "");
  const lng = parseFloat(searchParams.get("lng") || "");

  if (isNaN(lat) || isNaN(lng)) {
    return NextResponse.json({ error: "Invalid coordinates" }, { status: 400 });
  }

  try {
    const dealers = await prisma.dealer.findMany();

    // Calculate distance for each dealer and sort
    const dealersWithDistance = dealers.map((dealer) => ({
      ...dealer,
      distance: calculateDistance(lat, lng, dealer.latitude, dealer.longitude),
    })).sort((a, b) => a.distance - b.distance);

    // Return the top 10 nearest dealers
    return NextResponse.json(dealersWithDistance.slice(0, 10));
  } catch (error) {
    console.error("Failed to fetch nearest dealers:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
