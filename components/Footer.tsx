import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link href="/testimonials" className="text-sm text-gray-600 hover:text-gray-900">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><span className="text-sm text-gray-600">About</span></li>
              <li><span className="text-sm text-gray-600">Contact</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><span className="text-sm text-gray-600">Privacy</span></li>
              <li><span className="text-sm text-gray-600">Terms</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} My Product. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}