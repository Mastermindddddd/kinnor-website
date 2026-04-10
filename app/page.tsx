"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleApplyClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/dashboard");
    } else {
      router.push("/apply");
    }
  };
  const programmes = [
    {
      title: "Safety, Health & Quality Practitioner",
      desc: "Build safer workplaces through compliance, risk management, and quality systems.",
    },
    {
      title: "Solar Photovoltaic Service Technician",
      desc: "Develop practical skills for installing, maintaining, and servicing solar systems.",
    },
    {
      title: "Water Works Management Practitioner",
      desc: "Support clean water delivery, environmental protection, and plant operations.",
    },
    {
      title: "Retail Store Manager",
      desc: "Lead people, drive performance, and manage profitable retail operations.",
    },
    {
      title: "EPC Practitioner",
      desc: "Advance building energy performance and support compliance readiness.",
    },
    {
      title: "New Venture Creation",
      desc: "Turn ideas into income through entrepreneurship and business fundamentals.",
    },
  ];

  const sectors = [
    "Water & Environmental Sciences",
    "Renewable Energy & Engineering",
    "Safety & Compliance",
    "Retail & Business Leadership",
    "Construction & Project Management",
    "Waste & Recycling Entrepreneurship",
  ];

  const reasons = [
    "Fully QCTO-accredited direction",
    "Industry-aligned qualifications",
    "Workplace-focused learning",
    "Modern training approach",
    "Strong partnership potential",
    "Youth and community empowerment",
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Kinnor Institute Logo"
              width={240}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-slate-700 transition hover:text-[#1e5f68]"
            >
              About
            </a>
            <a
              href="#programmes"
              className="text-sm font-medium text-slate-700 transition hover:text-[#1e5f68]"
            >
              Programmes
            </a>
            <a
              href="#partners"
              className="text-sm font-medium text-slate-700 transition hover:text-[#1e5f68]"
            >
              Partnerships
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 transition hover:text-[#1e5f68]"
            >
              Contact
            </a>
          </nav>

            <button onClick={handleApplyClick} className="rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57]">
              Apply Now
            </button>
          
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(30,95,104,0.12),_transparent_28%),radial-gradient(circle_at_left,_rgba(183,177,132,0.16),_transparent_24%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <span className="mb-5 inline-flex w-fit rounded-full border border-[#1e5f68]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e5f68] shadow-sm">
                Unlocking Skills. Empowering Futures.
              </span>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#163c43] md:text-6xl">
                Build real skills today that turn into income tomorrow.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Accredited occupational training that transforms people,
                strengthens industries, and builds sustainable communities
                across South Africa.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
  onClick={handleApplyClick}
  className="rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1e5f68]/20 transition hover:translate-y-[-1px] hover:bg-[#184f57]"
>
  Apply Now
</a>
                <a
  href="/partners"
  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
>
  Partner With Us
</a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["QCTO", "Accredited direction"],
                  ["Youth", "Career-focused training"],
                  ["Industry", "Workplace relevance"],
                ].map(([value, label]) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <p className="text-xl font-bold text-[#163c43]">{value}</p>
                    <p className="mt-1 text-sm text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-[#b7b184]/20 blur-2xl" />
              <div className="absolute bottom-8 right-0 h-36 w-36 rounded-full bg-[#1e5f68]/20 blur-3xl" />

              <div className="relative w-full max-w-xl rounded-[2rem] border border-white/70 bg-white p-6 shadow-2xl shadow-slate-300/40">
                <div className="rounded-[1.8rem] bg-gradient-to-br from-[#163c43] via-[#1e5f68] to-[#0f2b30] p-8 text-white">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-[1.5rem] bg-white p-4 shadow-lg">
                      <Image
                        src="/logo.png"
                        alt="Kinnor Institute Logo"
                        width={420}
                        height={180}
                        className="h-auto w-full max-w-[360px]"
                        priority
                      />
                    </div>

                    <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/70">
                      Created for Preview by ABZELA
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      Future-ready training for real-world impact
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                      A modern institutional website direction designed to
                      attract learners, strengthen partnerships, and present
                      Kinnor Institute with greater professionalism and
                      credibility.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                        Occupational Training
                      </span>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                        Industry-Aligned Skills
                      </span>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                        2026 Intake
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#163c43] md:text-4xl">
                A modern institute built around opportunity, industry
                relevance, and community impact.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Kinnor Institute is a QCTO-accredited skills development
                provider focused on occupational training that equips learners
                with practical competencies needed to thrive in evolving
                industries.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We work at the intersection of education, employability, and
                community upliftment—offering training that leads to real
                opportunity, real jobs, and meaningful transformation.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] bg-[#163c43] p-8 text-white shadow-sm">
                <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                  Purpose
                </p>
                <p className="mt-4 text-2xl font-semibold leading-9">
                  To create a skilled, employable, and economically active South
                  Africa.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#b7b184]/25 p-8 text-[#163c43] ring-1 ring-[#b7b184]/30">
                <p className="text-sm uppercase tracking-[0.28em] text-[#1e5f68]">
                  Vision
                </p>
                <p className="mt-4 text-2xl font-semibold leading-9">
                  To be Africa’s most trusted, future-focused institute of
                  occupational excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="programmes" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                What We Offer
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#163c43] md:text-4xl">
                Programmes aligned to South Africa’s priority skills needs.
              </h2>
            </div>

            <button className="w-fit rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]">
              View All Programmes
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programmes.map((programme) => (
              <div
                key={programme.title}
                className="group rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1e5f68] to-[#b7b184]" />

                <h3 className="text-xl font-semibold text-[#163c43]">
                  {programme.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {programme.desc}
                </p>

                <button className="mt-6 text-sm font-semibold text-[#1e5f68] transition group-hover:translate-x-1">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2.2rem] bg-[#163c43] px-8 py-10 text-white shadow-xl md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                  Priority Sectors
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Skills development that responds to real economic and industry
                  demand.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
                  Kinnor Institute focuses on fields that matter for
                  employability, compliance, infrastructure, sustainability, and
                  entrepreneurship.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <div
                    key={sector}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-medium text-white/90 backdrop-blur"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
              Why Choose Kinnor Institute
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#163c43] md:text-4xl">
              Built for credibility, excellence, and measurable impact.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason, idx) => (
              <div
                key={reason}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#b7b184]/25 text-sm font-bold text-[#163c43]">
                  0{idx + 1}
                </div>
                <p className="text-base font-semibold text-[#163c43]">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Partnerships
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#163c43]">
                Together, we develop skills that build industries.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We partner with employers, municipalities, SETAs, corporates,
                NGOs, and public institutions to deliver impactful training and
                workforce development solutions.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Workplace-based learning placements</li>
                <li>• Compliance training and upskilling</li>
                <li>• Large-scale youth development initiatives</li>
                <li>• Enterprise and community impact programmes</li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#1e5f68] to-[#163c43] p-8 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                Corporate Value
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight">
                Upskill your workforce. Strengthen your impact.
              </h3>
              <p className="mt-4 text-base leading-8 text-white/80">
                From safety and energy to retail and environmental services,
                Kinnor Institute helps organisations improve compliance,
                productivity, and talent development outcomes.
              </p>
              <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#163c43] transition hover:scale-[1.02]">
                Partner With Us
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:pb-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[#f0efe8] p-8 ring-1 ring-[#d9d5be]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#163c43]">
                Let’s connect.
              </h2>
              <div className="mt-6 space-y-4 text-slate-700">
                <p>
                  Cambridge Office Park, 5 Bauhinia Street, Building 26,
                  Highveld Technopark, Centurion, Gauteng
                </p>
                <p>academic@kinnorinstitute.co.za</p>
                <p>072 639 6097</p>
                <p>Monday–Friday, 08:00–16:30</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
                Enquiry Form
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  placeholder="Full Name"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  placeholder="Email Address"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  placeholder="Phone Number"
                />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
                  placeholder="Subject"
                />
                <textarea
                  className="min-h-[140px] rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68] md:col-span-2"
                  placeholder="Message"
                />
              </div>

              <button className="mt-6 rounded-full bg-[#1e5f68] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57]">
                Submit Enquiry
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Kinnor Institute. Prototype homepage in progress.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#1e5f68]">
              Privacy
            </a>
            <a href="#programmes" className="hover:text-[#1e5f68]">
              Programmes
            </a>
            <a href="#contact" className="hover:text-[#1e5f68]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}