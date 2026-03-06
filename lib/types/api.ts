// Backend response types (match backend DTOs)

export interface WaitlistSubmitResponse {
  id: string;
  email: string;
  name: string | null;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
}

export interface WaitlistCountResponse {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

// Backend error response format
export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  error: string;
  timestamp: string;
  path: string;
}
