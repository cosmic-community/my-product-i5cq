import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const customerName = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.role)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const photo = testimonial.metadata?.photo
  const rating = testimonial.metadata?.rating ?? 5

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.075 9.1c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>

      {quote && (
        <blockquote className="text-gray-700 leading-relaxed">
          "{quote}"
        </blockquote>
      )}

      <div className="mt-6 flex items-center gap-4">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={customerName}
            className="h-12 w-12 rounded-full object-cover"
            width={48}
            height={48}
          />
        ) : (
          <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white font-semibold">
            {customerName.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{customerName}</div>
          {(role || company) && (
            <div className="text-sm text-gray-600">
              {role}{role && company ? ', ' : ''}{company}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}