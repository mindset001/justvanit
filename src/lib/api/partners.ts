import { api } from "./client";

export type PartnerRegistrationResponse = {
  businessId: string;
  companyName: string;
  fleetCapabilities: string[];
  serviceAreaPostCodes: string[];
};

export type FleetCapability = {
  id: string;
  name: string;
};

export const partnersApi = {
  // Request field names are unconfirmed — pass a FormData built by the caller
  // (multipart, since registration includes an insurance file upload).
  register: (formData: FormData) =>
    api.postForm<PartnerRegistrationResponse>("/api/partners/register", formData),

  getFleetCapabilities: () => api.get<FleetCapability[]>("/api/partners/fleet-capabilities/all"),
};
