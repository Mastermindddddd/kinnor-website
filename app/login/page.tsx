"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/apply";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      router.push(redirectTo);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Kinnor Institute Logo"
              width={220}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              Home
            </Link>
            <Link
              href="/apply"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              Apply
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8">
        <section>
          <span className="inline-flex rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
            Student Portal
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#163c43] md:text-5xl">
            Welcome back to Kinnor Institute
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Sign in to access your learner dashboard, check your application progress,
            and stay updated on your training journey.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
            Sign In
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-[#163c43]">
            Access your account
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Sign in to continue with your Kinnor Institute application.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                required
              />
            </div>

            {error && (
              <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="block w-full rounded-full bg-[#1e5f68] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <Link
              href={`/signup?redirect=${encodeURIComponent(redirectTo)}`}
              className="block w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
            >
              Create Account
            </Link>
          </form>
        </section>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f7f6f2]">
          <p className="text-sm text-slate-600">Loading login page...</p>
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}