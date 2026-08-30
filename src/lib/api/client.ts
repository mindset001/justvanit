import { clearToken, getToken } from "@/lib/auth/session";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export class ApiError extends Error {
  status: number;
  responseCode?: string;
  body: unknown;

  constructor(status: number, message: string, body: unknown, responseCode?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
    this.responseCode = responseCode;
  }
}

export type ApiEnvelope<T> = {
  isSuccess: boolean;
  message: string;
  responseCode: string;
  data: T;
};

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const isFormData = options.body instanceof FormData;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const contentType = res.headers.get("content-type");
  const body: ApiEnvelope<T> | null = contentType?.includes("application/json")
    ? await res.json()
    : null;

  if (res.status === 401) {
    clearToken();
  }

  if (!res.ok || body?.isSuccess === false) {
    const message = body?.message ?? res.statusText;
    throw new ApiError(res.status, message, body, body?.responseCode);
  }

  return (body ? body.data : null) as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path, { method: "GET" }),
  post: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: "POST", body: data !== undefined ? JSON.stringify(data) : undefined }),
  put: <T>(path: string, data?: unknown) =>
    request<T>(path, { method: "PUT", body: data !== undefined ? JSON.stringify(data) : undefined }),
  postForm: <T>(path: string, data: FormData) => request<T>(path, { method: "POST", body: data }),
};
