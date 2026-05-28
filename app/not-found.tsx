import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold gradient-text">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-lg gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
      >
        Go home
      </Link>
    </div>
  )
}