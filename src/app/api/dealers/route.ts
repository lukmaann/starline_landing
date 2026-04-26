import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const dealers = await prisma.dealer.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      dealers.map((dealer) => ({
        ...dealer,
        distance: null,
      })),
    );
  } catch (error) {
    console.error("Failed to fetch dealers:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
