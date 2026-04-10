"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type DashboardUser = {
  _id: string;
  fullName: string;
  email: string;
};

type DashboardApplication = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  programme: string;
  qualification: string;
  studyMode: string;
  motivation: string;
  cvUrl: string;
  cvFileName: string;
  createdAt: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<DashboardUser | null>(null);
  const [application, setApplication] = useState<DashboardApplication | null>(null);
  const [error, setError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login?redirect=/dashboard");
      return;
    }

    setIsAuthenticated(true);
    setCheckingAuth(false);

    const fetchDashboard = async () => {
      try {
        const res = await fetch("/api/dashboard/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to load dashboard");
        }

        setUser(result.user);
        setApplication(result.application);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f6f2]">
        <p className="text-sm text-slate-600">Checking access...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f6f2]">
        <p className="text-sm text-slate-600">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Dashboard
            </Link>
          </nav>

          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
          >
            Log Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
              Learner Dashboard
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#163c43] md:text-5xl">
              Welcome back, {user?.fullName || "Student"}
            </h1>

            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
              View your account details and track your application progress.
            </p>
          </div>

          <Link
            href="/apply"
            className="w-fit rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57]"
          >
            {application ? "Update Application" : "Complete Application"}
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1e5f68] to-[#b7b184]" />
                <p className="text-sm font-medium text-slate-500">Application Status</p>
                <h2 className="mt-3 text-xl font-semibold text-[#163c43]">
                  {application ? "Submitted" : "Not Submitted"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {application
                    ? "Your application has been received and is awaiting review."
                    : "You have not submitted an application yet."}
                </p>
              </div>

              <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1e5f68] to-[#b7b184]" />
                <p className="text-sm font-medium text-slate-500">Programme Selected</p>
                <h2 className="mt-3 text-xl font-semibold text-[#163c43]">
                  {application?.programme || "Not selected yet"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  This shows the most recent programme in your application.
                </p>
              </div>

              <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1e5f68] to-[#b7b184]" />
                <p className="text-sm font-medium text-slate-500">Next Step</p>
                <h2 className="mt-3 text-xl font-semibold text-[#163c43]">
                  {application ? "Admissions Review" : "Complete Application"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {application
                    ? "Our admissions team will verify your submitted information."
                    : "Submit your application to begin the review process."}
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Personal Details
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[#163c43]">
                Your account information
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Full Name</p>
                  <p className="mt-2 font-medium text-[#163c43]">{user?.fullName || "-"}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Email Address</p>
                  <p className="mt-2 font-medium text-[#163c43]">{user?.email || "-"}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Application Details
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[#163c43]">
                Your latest application
              </h2>

              {!application ? (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-[#fafafa] p-4 text-sm text-slate-600">
                  No application has been submitted yet.
                </div>
              ) : (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">First Name</p>
                    <p className="mt-2 font-medium text-[#163c43]">{application.firstName}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Last Name</p>
                    <p className="mt-2 font-medium text-[#163c43]">{application.lastName}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Phone Number</p>
                    <p className="mt-2 font-medium text-[#163c43]">{application.phone}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Programme</p>
                    <p className="mt-2 font-medium text-[#163c43]">{application.programme}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Highest Qualification</p>
                    <p className="mt-2 font-medium text-[#163c43]">{application.qualification}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Study Mode</p>
                    <p className="mt-2 font-medium text-[#163c43]">{application.studyMode}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4 md:col-span-2">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Motivation</p>
                    <p className="mt-2 leading-7 text-[#163c43]">{application.motivation}</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4 md:col-span-2">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Uploaded CV</p>
                    <a
                      href={application.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-medium text-[#1e5f68] hover:underline"
                    >
                      View CV ({application.cvFileName})
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#163c43] p-8 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                Support
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Need help with your application?
              </h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/85">
                <p>Email: academic@kinnorinstitute.co.za</p>
                <p>Phone: 072 639 6097</p>
                <p>Hours: Monday–Friday, 08:00–16:30</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1e5f68]">
                Next Actions
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>• Monitor your email for communication from admissions.</p>
                <p>• Keep your contact details up to date.</p>
                <p>• Review your selected programme and submitted information.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}