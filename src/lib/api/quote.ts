import { api } from "./client";

export type QuoteRoute = {
  departureAddress: string;
  destinationAddress: string;
  departureDate: string;
};

export type QuoteHome = {
  residenceScaleId: string;
  floorLevel: number;
  hasMechanicalLiftAccess: boolean;
};

export type EliteServiceSelection = {
  eliteServiceId: string;
  isSelected: boolean;
};

export type QuoteAddOns = {
  eliteServices: EliteServiceSelection[];
};

export type QuoteRequestPayload = {
  route: QuoteRoute;
  home: QuoteHome;
  addOns: QuoteAddOns;
};

export type GuestContact = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type GuestQuoteRequestPayload = QuoteRequestPayload & {
  guest: GuestContact;
};

export type QuoteScheduleResponse = {
  id: string;
};

export type EliteService = {
  id: string;
  name: string;
  description: string;
};

export type ResidenceScale = {
  id: string;
  name: string;
  description: string;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

export const quoteApi = {
  requestUserQuote: (payload: QuoteRequestPayload) =>
    api.post<QuoteScheduleResponse>("/api/quote/user/request", payload),

  requestGuestQuote: (payload: GuestQuoteRequestPayload) =>
    api.post<QuoteScheduleResponse>("/api/quote/guest-user/request", payload),

  uploadUserMediaEvidence: (quoteScheduleId: string, files: File[]) => {
    const form = new FormData();
    form.append("quoteScheduleId", quoteScheduleId);
    files.forEach((file) => form.append("files", file));
    return api.postForm<{ message: string }>("/api/quote/user/media-evidence", form);
  },

  uploadGuestMediaEvidence: (quoteScheduleId: string, files: File[]) => {
    const form = new FormData();
    form.append("quoteScheduleId", quoteScheduleId);
    files.forEach((file) => form.append("files", file));
    return api.postForm<{ message: string }>("/api/quote/guest-user/media-evidence", form);
  },

  getEliteServices: (page = 0, pageSize = 50) =>
    api.get<PaginatedResponse<EliteService>>(
      `/api/quote/elite-services/all?page=${page}&pageSize=${pageSize}`
    ),

  getResidenceScales: (page = 0, pageSize = 50) =>
    api.get<PaginatedResponse<ResidenceScale>>(
      `/api/quote/residence-scales/all?page=${page}&pageSize=${pageSize}`
    ),
};
