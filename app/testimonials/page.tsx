import TestimonialCard from '@/components/TestimonialCard'
import SectionHeader from '@/components/SectionHeader'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Testimonials - My Product',
  description: 'See what our customers are saying about My Product.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What our customers say"
          description="Real stories from teams that use My Product every day."
        />

        {testimonials.length === 0 ? (
          <p className="text-center text-gray-600">No testimonials available yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}