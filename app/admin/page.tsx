"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type AdminUser = {
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type AdminApplication = {
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
  updatedAt: string;
  user?: {
    _id: string;
    fullName: string;
    email: string;
  } | null;
};

type AdminOverviewResponse = {
  totalUsers: number;
  totalApplications: number;
  users: AdminUser[];
  applications: AdminApplication[];
};

export default function AdminPage() {
  const [data, setData] = useState<AdminOverviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await fetch("/api/admin/overview");
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Failed to load admin data");
        }

        setData(result);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f6f2]">
        <p className="text-sm text-slate-600">Loading admin dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f6f2] px-6">
        <div className="rounded-2xl bg-red-50 px-6 py-4 text-sm text-red-700">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-xl font-bold text-[#163c43]">
            Kinnor Institute Admin
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              User Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
            Admin Testing View
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#163c43] md:text-5xl">
            Users and Applications
          </h1>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            This page displays all registered users and all submitted applications,
            including uploaded CV links.
          </p>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Total Users</p>
            <h2 className="mt-3 text-3xl font-bold text-[#163c43]">
              {data?.totalUsers ?? 0}
            </h2>
          </div>

          <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Total Applications</p>
            <h2 className="mt-3 text-3xl font-bold text-[#163c43]">
              {data?.totalApplications ?? 0}
            </h2>
          </div>

          <div className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">CV Uploads</p>
            <h2 className="mt-3 text-3xl font-bold text-[#163c43]">
              {data?.applications?.length ?? 0}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* USERS */}
          <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Registered Users
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#163c43]">
                All user accounts
              </h2>
            </div>

            <div className="space-y-4">
              {data?.users?.length ? (
                data.users.map((user, index) => (
                  <div
                    key={user._id}
                    className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e5f68]/10 text-sm font-bold text-[#1e5f68]">
                        {index + 1}
                      </div>
                      <span className="text-xs text-slate-500">
                        {new Date(user.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500">Full Name</p>
                    <p className="font-semibold text-[#163c43]">{user.fullName}</p>

                    <p className="mt-3 text-sm text-slate-500">Email</p>
                    <p className="font-medium text-slate-700">{user.email}</p>

                    <p className="mt-3 text-sm text-slate-500">User ID</p>
                    <p className="break-all text-xs text-slate-600">{user._id}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4 text-sm text-slate-600">
                  No users found.
                </div>
              )}
            </div>
          </section>

          {/* APPLICATIONS */}
          <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Submitted Applications
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#163c43]">
                All application records
              </h2>
            </div>

            <div className="space-y-5">
              {data?.applications?.length ? (
                data.applications.map((application, index) => (
                  <div
                    key={application._id}
                    className="rounded-[1.6rem] border border-slate-200 bg-[#fafafa] p-5"
                  >
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e5f68]/10 text-sm font-bold text-[#1e5f68]">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-[#163c43]">
                            {application.firstName} {application.lastName}
                          </p>
                          <p className="text-sm text-slate-500">
                            {application.programme}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-slate-500">
                        {new Date(application.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Applicant Email
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {application.email}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Phone Number
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {application.phone}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Qualification
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {application.qualification}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Study Mode
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {application.studyMode}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Linked User
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {application.user?.fullName || "Unknown user"} —{" "}
                          {application.user?.email || "No email"}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Motivation
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-700">
                          {application.motivation}
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Uploaded CV
                        </p>
                        <a
                          href={application.cvUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-sm font-semibold text-[#1e5f68] hover:underline"
                        >
                          View CV ({application.cvFileName})
                        </a>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          Application ID
                        </p>
                        <p className="mt-1 break-all text-xs text-slate-600">
                          {application._id}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-4 text-sm text-slate-600">
                  No applications found.
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}