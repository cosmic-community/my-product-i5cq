import type { PricingTier } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const planName = getMetafieldValue(tier.metadata?.plan_name) || tier.title
  const price = tier.metadata?.price ?? 0
  const billingPeriod = getMetafieldValue(tier.metadata?.billing_period) || 'month'
  const description = getMetafieldValue(tier.metadata?.description)
  const featuresIncluded = getMetafieldValue(tier.metadata?.features_included)
  const ctaText = getMetafieldValue(tier.metadata?.cta_text) || 'Get Started'
  const ctaLink = getMetafieldValue(tier.metadata?.cta_link) || '#'
  const isPopular = tier.metadata?.is_popular ?? false

  const featuresList = featuresIncluded
    ? featuresIncluded.split('\n').filter((f) => f.trim().length > 0)
    : []

  return (
    <div
      className={`relative rounded-2xl border p-8 shadow-sm transition-all duration-300 ${
        isPopular
          ? 'border-brand-500 bg-white ring-2 ring-brand-500 scale-105 shadow-xl'
          : 'border-gray-200 bg-white hover:shadow-lg'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="gradient-bg rounded-full px-4 py-1 text-xs font-semibold text-white shadow-md">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900">{planName}</h3>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-600">/{billingPeriod}</span>
      </div>

      {featuresList.length > 0 && (
        <ul className="mt-8 space-y-3">
          {featuresList.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700">{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        href={ctaLink}
        className={`mt-8 block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
          isPopular
            ? 'gradient-bg text-white shadow-md hover:opacity-90'
            : 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
        }`}
      >
        {ctaText}
      </a>
    </div>
  )
}