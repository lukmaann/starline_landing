import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, location, message, type, productName } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone are required" },
        { status: 400 }
      );
    }

    // Save to database using the ContactSubmission model
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        phone,
        email,
        location,
        type: type || "product_enquiry",
        message: productName ? `Enquiry for ${productName}: ${message || ""}` : message,
        status: "new",
      },
    });

    return NextResponse.json(
      { message: "Enquiry submitted successfully", id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
