import Image from "next/image";

export default function DashboardPage() {
  const cards = [
    {
      title: "Application Status",
      value: "Submitted",
      desc: "Your application has been received and is awaiting review.",
    },
    {
      title: "Programme Selected",
      value: "Safety, Health & Quality Practitioner",
      desc: "You can update this later once the portal is fully connected.",
    },
    {
      title: "Next Step",
      value: "Document Review",
      desc: "Our admissions team will verify your submitted information.",
    },
  ];

  const updates = [
    "Application submitted successfully",
    "Admissions review pending",
    "Further communication will be sent by email",
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Kinnor Institute Logo"
              width={220}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="/" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Home
            </a>
            <a href="/apply" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Apply
            </a>
            <a href="/login" className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]">
              Login
            </a>
          </nav>

          <a
            href="/"
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
          >
            Log Out
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
              Learner Dashboard
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#163c43] md:text-5xl">
              Welcome back, Student
            </h1>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
              Track your application progress, view key updates, and prepare for the next step in your training journey.
            </p>
          </div>

          <a
            href="/apply"
            className="w-fit rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57]"
          >
            Update Application
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section>
            <div className="grid gap-5 md:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1e5f68] to-[#b7b184]" />
                  <p className="text-sm font-medium text-slate-500">{card.title}</p>
                  <h2 className="mt-3 text-xl font-semibold text-[#163c43]">{card.value}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Recent Updates
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[#163c43]">
                Your application activity
              </h2>

              <div className="mt-6 space-y-4">
                {updates.map((update, index) => (
                  <div
                    key={update}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#fafafa] p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e5f68]/10 text-sm font-bold text-[#1e5f68]">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-[#163c43]">{update}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        This section can later pull live timeline updates from the system.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                <p>• Prepare supporting documents for future upload.</p>
                <p>• Review your selected programme and career pathway.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#b7b184]/20 p-8 ring-1 ring-[#b7b184]/30">
              <p className="text-sm uppercase tracking-[0.28em] text-[#1e5f68]">
                Prototype Note
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                This is a dashboard prototype. The next phase can connect live user accounts, real application records, and admin-side review tools.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}