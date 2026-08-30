import { api } from "./client";

export type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type GuestSignUpCompletionPayload = SignUpPayload & {
  guestToken: string;
};

export type VerifyAccountPayload = {
  email: string;
  otp: string;
};

export type RegenerateOtpPayload = {
  email: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type InitPasswordResetPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  email: string;
  otp: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};

export type MessageResponse = {
  message: string;
};

export const authApi = {
  signUp: (payload: SignUpPayload) => api.post<AuthResponse>("/api/auth/user/sign-up", payload),

  completeGuestSignUp: (payload: GuestSignUpCompletionPayload) =>
    api.post<AuthResponse>("/api/auth/guest-user/sign-up-completion", payload),

  verifyAccount: (payload: VerifyAccountPayload) =>
    api.put<AuthResponse>("/api/auth/user/verify-account", payload),

  regenerateOtp: (payload: RegenerateOtpPayload) =>
    api.put<MessageResponse>("/api/auth/user/regenerate-otp", payload),

  signIn: (payload: SignInPayload) => api.post<AuthResponse>("/api/auth/sign-in", payload),

  me: () => api.post<AuthUser>("/api/auth/me"),

  initPasswordReset: (payload: InitPasswordResetPayload) =>
    api.post<MessageResponse>("/api/auth/init-password-reset", payload),

  resetPassword: (payload: ResetPasswordPayload) =>
    api.post<MessageResponse>("/api/auth/reset-password", payload),
};
