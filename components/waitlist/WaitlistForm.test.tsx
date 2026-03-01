import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WaitlistForm } from "./WaitlistForm";

describe("WaitlistForm", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    globalThis.fetch = mockFetch as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render the form initially", () => {
    render(<WaitlistForm />);

    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Join Waitlist" })).toBeInTheDocument();
  });

  it("should render with custom className", () => {
    const { container } = render(<WaitlistForm className="custom-class" />);
    expect(container.querySelector("form")).toHaveClass("custom-class");
  });

  it("should show error for empty email submission", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    expect(screen.getByText("Please enter your email address")).toBeInTheDocument();
  });

  it("should show error for email without domain extension", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "user@example");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
  });

  it("should show error for email without domain extension", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "user@example");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
  });

  it("should show loading state during submission", async () => {
    const user = userEvent.setup();
    mockFetch.mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              ok: true,
              json: async () => ({ success: true, position: 42 }),
            } as unknown as Response);
          }, 100);
        })
    );

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    // Check for loading state immediately after click
    await waitFor(() => {
      expect(screen.getByText(/Joining\.\.\./)).toBeInTheDocument();
    });
    expect(screen.getByLabelText("Email address")).toBeDisabled();
    expect(screen.getByRole("button", { name: /Joining\.\.\./ })).toBeDisabled();

    await waitFor(() => {
      expect(screen.queryByText(/Joining\.\.\./)).not.toBeInTheDocument();
    });
  });

  it("should show success state after successful submission", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, position: 42 }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("You're on the list!")).toBeInTheDocument();
      expect(screen.getByText(/#42/)).toBeInTheDocument();
    });
  });

  it("should handle success without position", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("You're on the list!")).toBeInTheDocument();
    });
  });

  it("should show error state on API error response", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true, // The component treats 200 with success: false as an error
      json: async () => ({ success: false, error: "Email already exists" }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "existing@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Email already exists")).toBeInTheDocument();
    });
  });

  it("should show generic error when API returns error without message", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument();
    });
  });

  it("should show generic error on network failure", async () => {
    const user = userEvent.setup();
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("An unexpected error occurred. Please try again.")
      ).toBeInTheDocument();
    });
  });

  it("should clear error state when user starts typing", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false, error: "Invalid email" }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "bad@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Invalid email")).toBeInTheDocument();
    });

    // Clear and type new value
    await user.clear(input);
    await user.type(input, "n");

    expect(screen.queryByText("Invalid email")).not.toBeInTheDocument();
  });

  it("should call onSuccess callback with position on success", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, position: 99 }),
    } as unknown as Response);

    render(<WaitlistForm onSuccess={onSuccess} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith(99);
    });
  });

  it("should call onSuccess with 0 when position is null", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, position: null }),
    } as unknown as Response);

    render(<WaitlistForm onSuccess={onSuccess} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith(0);
    });
  });

  it("should not call onSuccess on failed submission", async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false, error: "Failed" }),
    } as unknown as Response);

    render(<WaitlistForm onSuccess={onSuccess} />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "test@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Failed")).toBeInTheDocument();
    });

    expect(onSuccess).not.toHaveBeenCalled();
  });

  it("should submit to the correct API endpoint", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, position: 1 }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "endpoint@example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "/api/waitlist",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: "endpoint@example.com" }),
        })
      );
    });
  });

  it("should accept valid email with subdomain", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, position: 1 }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "user@mail.example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });
  });

  it("should accept valid email with subdomain", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, position: 1 }),
    } as unknown as Response);

    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "user@mail.example.com");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });
  });

  it("should trim whitespace before validation", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    const input = screen.getByLabelText("Email address");
    await user.type(input, "   ");

    const submitButton = screen.getByRole("button", { name: "Join Waitlist" });
    await user.click(submitButton);

    expect(screen.getByText("Please enter your email address")).toBeInTheDocument();
  });
});
