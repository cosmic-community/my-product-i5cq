import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'
import FaqItem from '@/components/FaqItem'
import SectionHeader from '@/components/SectionHeader'
import { getFeatures, getPricingTiers, getTestimonials, getFaqs } from '@/lib/cosmic'
import Link from 'next/link'

export default async function HomePage() {
  const [features, pricingTiers, testimonials, faqs] = await Promise.all([
    getFeatures(),
    getPricingTiers(),
    getTestimonials(),
    getFaqs(),
  ])

  const topFaqs = faqs.slice(0, 6)

  return (
    <>
      <Hero />

      {features.length > 0 && (
        <section id="features" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything you need to succeed"
              description="Powerful features designed to help your team work better, faster, and smarter."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      )}

      {pricingTiers.length > 0 && (
        <section id="pricing" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Pricing"
              title="Simple, transparent pricing"
              description="Choose the plan that's right for your team. Upgrade or downgrade at any time."
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section id="testimonials" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Testimonials"
              title="Loved by teams worldwide"
              description="Don't just take our word for it. Here's what our customers have to say."
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      {topFaqs.length > 0 && (
        <section id="faq" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Got questions? We've got answers."
            />
            <div className="bg-white rounded-2xl border border-gray-200 px-8 shadow-sm">
              {topFaqs.map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-brand-600 font-semibold hover:text-brand-700">
                View all questions →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 gradient-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join thousands of teams already using My Product to grow their business.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-block rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-600 shadow-lg hover:bg-gray-50 transition"
            >
              Start your free trial
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}