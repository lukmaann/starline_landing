"use server";

import { PrismaClient } from '@prisma/client';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

// Initialize Prisma Client
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Allow 3 form submissions per minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
});

export async function submitContactForm(formData: {
  type: string;
  name: string;
  phone: string;
  email?: string;
  location?: string;
  business?: string;
  experience?: number;
  message?: string;
  captchaToken?: string; // Requires real token in production
}) {
  try {
    // 1. Rate Limiting
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const headersList = await headers();
      const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";
      const { success } = await ratelimit.limit(`form_submission_${ip}`);
      if (!success) {
        return { success: false, error: "Too many submissions. Please try again later." };
      }
    }

    // 2. Server-side CAPTCHA verification
    if (process.env.CAPTCHA_SECRET_KEY && formData.captchaToken) {
      const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.CAPTCHA_SECRET_KEY}&response=${formData.captchaToken}`,
      });
      const data = await res.json();
      if (!data.success) {
        return { success: false, error: "CAPTCHA verification failed." };
      }
    } else if (process.env.CAPTCHA_SECRET_KEY && !formData.captchaToken) {
      return { success: false, error: "CAPTCHA token is missing." };
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        type: formData.type,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        business: formData.business,
        experience: formData.experience,
        message: formData.message,
        status: "new",
      },
    });
    
    return { success: true, id: submission.id };
  } catch (error) {
    console.error("Failed to submit form:", error);
    return { success: false, error: "Database error occurred while submitting." };
  }
}

export async function getSubmissions() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, submissions };
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
    return { success: false, error: "Database error occurred while fetching." };
  }
}

export async function markSubmissionResolved(id: string) {
  try {
    await prisma.contactSubmission.update({
      where: { id },
      data: { status: "resolved" }
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to resolve submission:", error);
    return { success: false, error: "Database error occurred." };
  }
}

export async function deleteSubmission(id: string) {
  try {
    await prisma.contactSubmission.delete({
      where: { id }
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to delete submission:", error);
    return { success: false, error: "Database error occurred." };
  }
}

import bcrypt from 'bcryptjs';

export async function generatePasswordHash(password: string) {
  try {
    const hash = await bcrypt.hash(password, 10);
    return { success: true, hash };
  } catch (error) {
    return { success: false, error: "Failed to generate hash" };
  }
}
