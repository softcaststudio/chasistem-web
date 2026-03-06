const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const config = {
  get apiBaseUrl() {
    if (!API_BASE_URL) {
      throw new Error("NEXT_PUBLIC_API_BASE_URL environment variable is required");
    }
    return API_BASE_URL;
  },
} as const;
