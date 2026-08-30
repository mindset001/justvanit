"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "@/lib/auth/AuthContext";
import { getErrorMessage } from "@/lib/api/errors";
import { FormError } from "@/components/ui/FormError";

export function LoginForm() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await signIn({ email, password });
      router.push("/");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Login</h1>
      <p className="mt-3 text-zinc-500">
        Join the UK&apos;s premier network for top-tier removal professionals. Customers and
        moving partners can now log in to access their dashboards and track moving history.
      </p>

      <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormError message={error} />

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-zinc-900">
            Email
            <span className="ml-0.5 text-red-500">*</span>
          </span>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="email"
              required
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-zinc-900">
            Password
            <span className="ml-0.5 text-red-500">*</span>
          </span>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 py-3 pl-10 pr-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </label>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Logging in..." : "Login"}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-col items-center gap-3 border-t border-zinc-100 pt-6 text-center text-sm text-zinc-500">
        <p>
          I don&apos;t have an account?{" "}
          <Link href="/become-a-partner/signup" className="font-medium text-indigo-600 underline hover:text-indigo-700">
            Become a Partner
          </Link>
        </p>
        <p>
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="font-medium text-zinc-700 underline hover:text-zinc-900">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium text-zinc-700 underline hover:text-zinc-900">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
