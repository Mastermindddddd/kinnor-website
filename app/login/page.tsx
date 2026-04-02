import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
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

          <nav className="flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              Home
            </a>
            <a
              href="/apply"
              className="text-sm font-medium text-slate-700 hover:text-[#1e5f68]"
            >
              Apply
            </a>
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
            Sign in to access your learner dashboard, check your application
            progress, and stay updated on your training journey.
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#163c43] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.28em] text-white/70">
              What you’ll access
            </p>

            <div className="mt-5 space-y-4 text-sm leading-7 text-white/85">
              <p>
                <span className="font-semibold text-white">•</span> Application
                status tracking
              </p>
              <p>
                <span className="font-semibold text-white">•</span> Programme
                information and updates
              </p>
              <p>
                <span className="font-semibold text-white">•</span> Learner
                support communication
              </p>
              <p>
                <span className="font-semibold text-white">•</span> Future
                document and progress management
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1e5f68]">
            Sign In
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-[#163c43]">
            Access your account
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            This is a prototype login page. Authentication can be connected in
            the next development phase.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1e5f68]"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>
              <a href="#" className="font-medium text-[#1e5f68] hover:underline">
                Forgot password?
              </a>
            </div>

            <a
              href="/dashboard"
              className="block w-full rounded-full bg-[#1e5f68] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#184f57]"
            >
              Sign In
            </a>

            <a
              href="/apply"
              className="block w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-[#1e5f68] hover:text-[#1e5f68]"
            >
              Create Application
            </a>
          </form>
        </section>
      </main>
    </div>
  );
}