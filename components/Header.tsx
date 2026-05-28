import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">My Product</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Testimonials
            </Link>
            <Link href="/faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              FAQ
            </Link>
          </nav>

          <Link
            href="/pricing"
            className="rounded-lg gradient-bg px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}