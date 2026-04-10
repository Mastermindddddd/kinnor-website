"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/apply";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Signup failed");
      }

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      router.push(redirectTo);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
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
              href="/login"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8">
        <section>
          <span className="inline-flex rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
            Create Account
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#163c43] md:text-5xl">
            Join Kinnor Institute
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Create your student account to apply for a programme, track your progress,
            and receive updates from the institute.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#163c43] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.28em] text-white/70">
              Why create an account
            </p>

            <div className="mt-5 space-y-4 text-sm leading-7 text-white/85">
              <p><span className="font-semibold text-white">•</span> Apply securely online</p>
              <p><span className="font-semibold text-white">•</span> Track your application status</p>
              <p><span className="font-semibold text-white">•</span> Manage your learner details</p>
              <p><span className="font-semibold text-white">•</span> Access future student services</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
            Sign Up
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-[#163c43]">
            Create your account
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Fill in your details below to get started.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                required
              />
            </div>

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
                placeholder="Create a password"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
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
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <Link
              href={`/login?redirect=${encodeURIComponent(redirectTo)}`}
              className="block w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
            >
              Already have an account? Sign In
            </Link>
          </form>
        </section>
      </main>
    </div>
  );
}