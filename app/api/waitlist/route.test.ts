import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";
import { NextRequest } from "next/server";

// Mock the api-client module
vi.mock("@/lib/api-client", () => ({
  submitToWaitlist: vi.fn(),
}));

import { submitToWaitlist } from "@/lib/api-client";

async function makeRequest(body: Record<string, unknown>): Promise<Response> {
  const request = new NextRequest("http://localhost:3000/api/waitlist", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return POST(request);
}

describe("POST /api/waitlist", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 400 for missing email field", async () => {
    const response = await makeRequest({});
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Email is required",
    });
  });

  it("should return 400 for null email", async () => {
    const response = await makeRequest({ email: null });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Email is required",
    });
  });

  it("should return 400 for undefined email", async () => {
    const response = await makeRequest({ email: undefined });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Email is required",
    });
  });

  it("should return 400 for non-string email", async () => {
    const response = await makeRequest({ email: 12345 });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Email is required",
    });
  });

  it("should return 400 for empty string email", async () => {
    const response = await makeRequest({ email: "" });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Email is required",
    });
  });

  it("should return 400 for invalid email format - no @", async () => {
    const response = await makeRequest({ email: "invalidemail.com" });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Please enter a valid email address",
    });
  });

  it("should return 400 for invalid email format - no domain", async () => {
    const response = await makeRequest({ email: "user@" });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Please enter a valid email address",
    });
  });

  it("should return 400 for invalid email format - no extension", async () => {
    const response = await makeRequest({ email: "user@example" });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Please enter a valid email address",
    });
  });

  it("should return 400 for invalid email format - multiple @", async () => {
    const response = await makeRequest({ email: "user@@example.com" });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Please enter a valid email address",
    });
  });

  it("should accept valid email format", async () => {
    vi.mocked(submitToWaitlist).mockResolvedValueOnce({
      success: true,
      position: 42,
    });

    await makeRequest({ email: "valid@example.com" });

    expect(submitToWaitlist).toHaveBeenCalledWith("valid@example.com");
  });

  it("should accept valid email with subdomain", async () => {
    vi.mocked(submitToWaitlist).mockResolvedValueOnce({
      success: true,
      position: 42,
    });

    await makeRequest({ email: "user@mail.example.com" });

    expect(submitToWaitlist).toHaveBeenCalledWith("user@mail.example.com");
  });

  it("should accept valid email with plus addressing", async () => {
    vi.mocked(submitToWaitlist).mockResolvedValueOnce({
      success: true,
      position: 42,
    });

    await makeRequest({ email: "user+tag@example.com" });

    expect(submitToWaitlist).toHaveBeenCalledWith("user+tag@example.com");
  });

  it("should return success response when submission succeeds", async () => {
    vi.mocked(submitToWaitlist).mockResolvedValueOnce({
      success: true,
      position: 100,
      message: "Welcome!",
    });

    const response = await makeRequest({ email: "test@example.com" });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      success: true,
      position: 100,
      message: "Welcome!",
    });
  });

  it("should return 400 when submission fails with success: false", async () => {
    vi.mocked(submitToWaitlist).mockResolvedValueOnce({
      success: false,
      error: "Email already exists",
    });

    const response = await makeRequest({ email: "existing@example.com" });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Email already exists",
    });
  });

  it("should return 500 on unexpected error", async () => {
    vi.mocked(submitToWaitlist).mockRejectedValueOnce(new Error("Database error"));

    const response = await makeRequest({ email: "test@example.com" });
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({
      success: false,
      error: "An unexpected error occurred",
    });
  });

  it("should handle invalid JSON in request body", async () => {
    const request = new NextRequest("http://localhost:3000/api/waitlist", {
      method: "POST",
      body: "invalid json",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.success).toBe(false);
  });

  it("should validate email with leading whitespace", async () => {
    // Email with leading whitespace doesn't match the regex
    const response = await makeRequest({ email: "  test@example.com  " });
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      success: false,
      error: "Please enter a valid email address",
    });
  });
});
