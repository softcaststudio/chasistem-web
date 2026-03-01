import { NextResponse } from "next/server";
import { getWaitlistCount } from "@/lib/api-client";

export async function GET() {
  try {
    const result = await getWaitlistCount();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Get waitlist count error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
