import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// We need to dynamically import the module to control the environment at test time
describe("api-client", () => {
  // Mock fetch globally
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    globalThis.fetch = mockFetch as unknown as typeof fetch;
  });

  afterEach(() => {
    // Clean up env
    delete process.env.API_BASE_URL;
  });

  describe("submitToWaitlist", () => {
    describe("mock mode (no API_BASE_URL)", () => {
      it("should return success response for new email", async () => {
        delete process.env.API_BASE_URL;
        const { submitToWaitlist } = await import("./api-client");

        const result = await submitToWaitlist("test@example.com");

        expect(result.success).toBe(true);
        expect(result.position).toBeGreaterThan(0);
        expect(result.message).toBe("You've been added to the waitlist!");
        expect(mockFetch).not.toHaveBeenCalled();
      });

      it("should return error for duplicate email", async () => {
        delete process.env.API_BASE_URL;
        const { submitToWaitlist } = await import("./api-client");

        // First submission
        await submitToWaitlist("duplicate@example.com");

        // Second submission with same email
        const result = await submitToWaitlist("duplicate@example.com");

        expect(result.success).toBe(false);
        expect(result.error).toBe("This email is already on the waitlist");
      });

      it("should increment position for each new email", async () => {
        delete process.env.API_BASE_URL;
        const { submitToWaitlist } = await import("./api-client");

        const result1 = await submitToWaitlist("user1@example.com");
        const result2 = await submitToWaitlist("user2@example.com");

        expect(result2.position).toBeGreaterThan(result1.position!);
      });

      it("should simulate network delay", async () => {
        delete process.env.API_BASE_URL;
        const { submitToWaitlist } = await import("./api-client");

        const start = Date.now();
        await submitToWaitlist("delay@example.com");
        const end = Date.now();

        expect(end - start).toBeGreaterThanOrEqual(400);
      });
    });

    describe("real mode (with API_BASE_URL)", () => {
      it("should call the real API endpoint", async () => {
        process.env.API_BASE_URL = "https://api.example.com";
        vi.resetModules();
        const { submitToWaitlist } = await import("./api-client");

        const mockResponse = {
          success: true,
          position: 100,
          message: "Welcome to the waitlist!",
        };
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => mockResponse,
        });

        const result = await submitToWaitlist("real@example.com");

        expect(mockFetch).toHaveBeenCalledWith("https://api.example.com/v1/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: "real@example.com" }),
        });
        expect(result).toEqual(mockResponse);
      });

      it("should handle API error responses", async () => {
        process.env.API_BASE_URL = "https://api.example.com";
        vi.resetModules();
        const { submitToWaitlist } = await import("./api-client");

        mockFetch.mockResolvedValueOnce({
          ok: false,
          json: async () => ({ message: "Email already exists" }),
        });

        const result = await submitToWaitlist("existing@example.com");

        expect(result.success).toBe(false);
        expect(result.error).toBe("Email already exists");
      });

      it("should handle API errors without message", async () => {
        process.env.API_BASE_URL = "https://api.example.com";
        vi.resetModules();
        const { submitToWaitlist } = await import("./api-client");

        mockFetch.mockResolvedValueOnce({
          ok: false,
          json: async () => ({}),
        });

        const result = await submitToWaitlist("error@example.com");

        expect(result.success).toBe(false);
        expect(result.error).toBe("Failed to join waitlist");
      });

      it("should handle JSON parse errors gracefully", async () => {
        process.env.API_BASE_URL = "https://api.example.com";
        vi.resetModules();
        const { submitToWaitlist } = await import("./api-client");

        mockFetch.mockResolvedValueOnce({
          ok: false,
          json: async () => {
            throw new Error("Invalid JSON");
          },
        });

        const result = await submitToWaitlist("badjson@example.com");

        expect(result.success).toBe(false);
        expect(result.error).toBe("Failed to join waitlist");
      });
    });
  });

  describe("getWaitlistCount", () => {
    describe("mock mode (no API_BASE_URL)", () => {
      it("should return the current mock count", async () => {
        delete process.env.API_BASE_URL;
        const { getWaitlistCount } = await import("./api-client");

        const result = await getWaitlistCount();

        expect(result.count).toBeGreaterThan(0);
        expect(typeof result.count).toBe("number");
      });

      it("should reflect additions from submitToWaitlist", async () => {
        delete process.env.API_BASE_URL;
        const { getWaitlistCount, submitToWaitlist } = await import("./api-client");

        const beforeCount = await getWaitlistCount();
        await submitToWaitlist("counttest@example.com");
        const afterCount = await getWaitlistCount();

        expect(afterCount.count).toBeGreaterThan(beforeCount.count);
      });
    });

    describe("real mode (with API_BASE_URL)", () => {
      it("should call the real API endpoint", async () => {
        process.env.API_BASE_URL = "https://api.example.com";
        vi.resetModules();
        const { getWaitlistCount } = await import("./api-client");

        const mockResponse = { count: 1234 };
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => mockResponse,
        });

        const result = await getWaitlistCount();

        expect(mockFetch).toHaveBeenCalledWith("https://api.example.com/v1/waitlist/count");
        expect(result).toEqual(mockResponse);
      });

      it("should throw on non-ok responses", async () => {
        process.env.API_BASE_URL = "https://api.example.com";
        vi.resetModules();
        const { getWaitlistCount } = await import("./api-client");

        mockFetch.mockResolvedValueOnce({
          ok: false,
        });

        await expect(getWaitlistCount()).rejects.toThrow("Failed to get waitlist count");
      });
    });
  });

  describe("mode switching", () => {
    it("should use mock mode when API_BASE_URL is not set", async () => {
      delete process.env.API_BASE_URL;
      vi.resetModules();
      const { submitToWaitlist } = await import("./api-client");

      mockFetch.mockClear();
      await submitToWaitlist("mock@example.com");

      expect(mockFetch).not.toHaveBeenCalled();
    });

    it("should use real mode when API_BASE_URL is set", async () => {
      process.env.API_BASE_URL = "https://api.example.com";
      vi.resetModules();
      const { submitToWaitlist } = await import("./api-client");

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, position: 1 }),
      });

      await submitToWaitlist("real@example.com");

      expect(mockFetch).toHaveBeenCalled();
    });
  });
});
