"use client";

import { useState } from "react";

export default function ApplyPage() {
  const programmes = [
    "Safety, Health & Quality Practitioner",
    "Solar Photovoltaic Service Technician",
    "Water Works Management Practitioner",
    "Retail Store Manager",
    "EPC Practitioner",
    "New Venture Creation",
    "Major Appliances Repairer",
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programme: "",
    qualification: "",
    studyMode: "",
    motivation: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);  
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    )=> {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0] || null;
  setCvFile(file);
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const data = new FormData();

      data.append("firstName", form.firstName);
      data.append("lastName", form.lastName);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("programme", form.programme);
      data.append("qualification", form.qualification);
      data.append("studyMode", form.studyMode);
      data.append("motivation", form.motivation);

      if (cvFile) {
        data.append("cv", cvFile);
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setMessage("Application submitted successfully.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programme: "",
        qualification: "",
        studyMode: "",
        motivation: "",
      });
      setCvFile(null);

      const fileInput = document.getElementById("cv-upload") as HTMLInputElement | null;
      if (fileInput) {
        fileInput.value = "";
    }
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
          <a href="/" className="text-xl font-bold text-[#163c43]">
            Kinnor Institute
          </a>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Home
            </a>
            <a href="/login" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Login
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
            Student Application Portal
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#163c43] md:text-5xl">
            Apply to Kinnor Institute
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Start your journey toward practical skills, career growth, and meaningful opportunity.
            Complete the application form below and our team will review your submission.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold text-[#163c43]">Application Form</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Complete the form and upload your CV.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Programme of Interest</label>
                <select
                  name="programme"
                  value={form.programme}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                >
                  <option value="">Select a programme</option>
                  {programmes.map((programme) => (
                    <option key={programme} value={programme}>
                      {programme}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Highest Qualification</label>
                <input
                  name="qualification"
                  type="text"
                  value={form.qualification}
                  onChange={handleChange}
                  placeholder="e.g. Matric / Diploma / Degree"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Preferred Study Mode</label>
                <select
                  name="studyMode"
                  value={form.studyMode}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                >
                  <option value="">Select study mode</option>
                  <option value="In-person">In-person</option>
                  <option value="Online">Online</option>
                  <option value="Blended">Blended</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Why are you applying?</label>
                <textarea
                  name="motivation"
                  value={form.motivation}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your goals, interests, or background"
                  className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Upload CV</label>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1e5f68]"
                  required
                />
                <p className="mt-2 text-xs text-slate-500">
                  Accepted formats: PDF, DOC, DOCX
                </p>
              </div>

              {(message || error) && (
                <div className="md:col-span-2">
                  {message && (
                    <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
                      {message}
                    </div>
                  )}
                  {error && (
                    <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}
                </div>
              )}

              <div className="md:col-span-2 flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

                <a
                  href="/"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
                >
                  Back to Home
                </a>
              </div>
            </form>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#163c43] p-8 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">Application Journey</p>
              <h3 className="mt-4 text-2xl font-semibold">Simple steps toward your future</h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/85">
                <p><span className="font-semibold text-white">1.</span> Complete the online application form.</p>
                <p><span className="font-semibold text-white">2.</span> Submit your details and CV.</p>
                <p><span className="font-semibold text-white">3.</span> Await review and further communication.</p>
                <p><span className="font-semibold text-white">4.</span> Begin your training journey with Kinnor Institute.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1e5f68]">Need Help?</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#163c43]">Our team is here to assist</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <p>Email: academic@kinnorinstitute.co.za</p>
                <p>Phone: 072 639 6097</p>
                <p>Hours: Monday–Friday, 08:00–16:30</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}