import type { Metadata } from "next";
import { LoginForm } from "@/components/login/LoginForm";
import { PartnerHeroPanel } from "@/components/landing/PartnerHeroPanel";

export const metadata: Metadata = {
  title: "Login — JustVanIt",
  description: "Log in to your JustVanIt customer or moving partner dashboard.",
};

export default function LoginPage() {
  return (
    <div className="grid flex-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-14 sm:px-10 lg:px-16">
        <LoginForm />
      </div>
      <PartnerHeroPanel />
    </div>
  );
}
