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
              This is a prototype form for the future web app. Submission handling can be connected next.
            </p>

            <form className="mt-8 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Programme of Interest</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]">
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
                  type="text"
                  placeholder="e.g. Matric / Diploma / Degree"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Preferred Study Mode</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]">
                  <option value="">Select study mode</option>
                  <option>In-person</option>
                  <option>Online</option>
                  <option>Blended</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Why are you applying?</label>
                <textarea
                  placeholder="Tell us briefly about your goals, interests, or background"
                  className="min-h-[140px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700">Supporting Documents</label>
                <div className="rounded-2xl border border-dashed border-slate-300 bg-[#f8fafc] px-4 py-6 text-sm text-slate-500">
                  Upload feature placeholder — ID, CV, certificates, or supporting documents can be connected later.
                </div>
              </div>

              <div className="md:col-span-2 flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57]"
                >
                  Submit Application
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
                <p><span className="font-semibold text-white">2.</span> Submit your details and supporting documents.</p>
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

            <div className="rounded-[2rem] bg-[#b7b184]/20 p-8 ring-1 ring-[#b7b184]/30">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1e5f68]">Prototype Note</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                This page is the first step in turning the website into a browser-based application.
                The next phase can connect this form to a database and admin dashboard.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}