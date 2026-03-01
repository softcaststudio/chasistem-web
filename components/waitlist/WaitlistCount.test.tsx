import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { WaitlistCount } from "./WaitlistCount";

describe("WaitlistCount", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    globalThis.fetch = mockFetch as unknown as typeof fetch;
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("should render null when count is below minimum threshold", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 25 }),
    } as unknown as Response);

    const { container } = render(<WaitlistCount />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it("should render null when count equals minimum threshold", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 50 }),
    } as unknown as Response);

    const { container } = render(<WaitlistCount />);

    await waitFor(() => {
      // Count of 50 should NOT be displayed (threshold is > 50)
      expect(container.firstChild).toBeNull();
    });
  });

  it("should display count when above minimum threshold", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 75 }),
    } as unknown as Response);

    render(<WaitlistCount />);

    await waitFor(() => {
      expect(screen.getByText("75")).toBeInTheDocument();
      expect(screen.getByText(/others on the waitlist/)).toBeInTheDocument();
    });
  });

  it("should cap display at max count (100)", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 150 }),
    } as unknown as Response);

    render(<WaitlistCount />);

    await waitFor(() => {
      expect(screen.getByText("100+")).toBeInTheDocument();
      // Should not show the raw number
      expect(screen.queryByText("150")).not.toBeInTheDocument();
    });
  });

  it("should display 100+ when count equals max", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 100 }),
    } as unknown as Response);

    render(<WaitlistCount />);

    await waitFor(() => {
      expect(screen.getByText("100+")).toBeInTheDocument();
    });
  });

  it("should display 99 without plus when just below max", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 99 }),
    } as unknown as Response);

    render(<WaitlistCount />);

    await waitFor(() => {
      expect(screen.getByText("99")).toBeInTheDocument();
      expect(screen.getByText(/others on the waitlist/)).toBeInTheDocument();
    });
  });

  it("should render with custom className", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 75 }),
    } as unknown as Response);

    render(<WaitlistCount className="text-blue-500" />);

    await waitFor(() => {
      const element = screen.getByText(/others on the waitlist/);
      expect(element).toHaveClass("text-blue-500");
    });
  });

  it("should fetch count on mount", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 60 }),
    } as unknown as Response);

    render(<WaitlistCount />);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/waitlist/count");
    });
  });

  it("should not render if fetch fails", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    const { container } = render(<WaitlistCount />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });

    // console.error should have been called
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it("should not render if API returns non-ok response", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    } as unknown as Response);

    const { container } = render(<WaitlistCount />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it("should handle malformed JSON response gracefully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        throw new Error("Invalid JSON");
      },
    } as unknown as Response);

    const { container } = render(<WaitlistCount />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it("should not render if response is missing count field", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as unknown as Response);

    const { container } = render(<WaitlistCount />);

    await waitFor(() => {
      expect(container.firstChild).toBeNull();
    });
  });

  it("should display the count number with font-semibold styling", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ count: 67 }),
    } as unknown as Response);

    render(<WaitlistCount />);

    await waitFor(() => {
      const countElement = screen.getByText("67");
      expect(countElement).toHaveClass("font-semibold");
    });
  });
});
