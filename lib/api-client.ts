import type { WaitlistEntry, WaitlistResponse, WaitlistCountResponse } from "@/types";

const API_BASE_URL = process.env.API_BASE_URL;
const USE_MOCK = !API_BASE_URL;

// In-memory storage for mock mode
let mockWaitlistCount = 42; // Start with some base count
const mockEntries: WaitlistEntry[] = [];

async function mockSubmit(email: string): Promise<WaitlistResponse> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Check for duplicate
  if (mockEntries.some((entry) => entry.email === email)) {
    return {
      success: false,
      error: "This email is already on the waitlist",
    };
  }

  mockWaitlistCount++;
  const entry: WaitlistEntry = {
    email,
    createdAt: new Date().toISOString(),
  };
  mockEntries.push(entry);

  return {
    success: true,
    position: mockWaitlistCount,
    message: "You've been added to the waitlist!",
  };
}

async function realSubmit(email: string): Promise<WaitlistResponse> {
  const response = await fetch(`${API_BASE_URL}/v1/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    return {
      success: false,
      error: error.message || "Failed to join waitlist",
    };
  }

  return response.json();
}

export async function submitToWaitlist(email: string): Promise<WaitlistResponse> {
  if (USE_MOCK) {
    return mockSubmit(email);
  }
  return realSubmit(email);
}

async function mockGetCount(): Promise<WaitlistCountResponse> {
  return { count: mockWaitlistCount };
}

async function realGetCount(): Promise<WaitlistCountResponse> {
  const response = await fetch(`${API_BASE_URL}/v1/waitlist/count`);
  if (!response.ok) {
    throw new Error("Failed to get waitlist count");
  }
  return response.json();
}

export async function getWaitlistCount(): Promise<WaitlistCountResponse> {
  if (USE_MOCK) {
    return mockGetCount();
  }
  return realGetCount();
}
