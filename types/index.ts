// Waitlist types
export interface WaitlistEntry {
  email: string;
  createdAt: string;
}

export interface WaitlistResponse {
  success: boolean;
  position?: number;
  message?: string;
  error?: string;
}

export interface WaitlistCountResponse {
  count: number;
}
