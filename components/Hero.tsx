import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            New features just dropped
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            The ultimate{' '}
            <span className="gradient-text">SaaS platform</span>{' '}
            for modern teams
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Streamline your workflow, boost productivity, and scale your business with our powerful all-in-one solution.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="rounded-lg gradient-bg px-6 py-3 text-base font-semibold text-white shadow-lg hover:opacity-90 transition"
            >
              Start free trial
            </Link>
            <Link
              href="/features"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}