import PricingCard from '@/components/PricingCard'
import SectionHeader from '@/components/SectionHeader'
import { getPricingTiers } from '@/lib/cosmic'

export const metadata = {
  title: 'Pricing - My Product',
  description: 'Simple, transparent pricing for teams of all sizes.',
}

export default async function PricingPage() {
  const tiers = await getPricingTiers()

  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans for teams of all sizes"
          description="Choose the perfect plan for your needs. All plans include a 14-day free trial."
        />

        {tiers.length === 0 ? (
          <p className="text-center text-gray-600">No pricing tiers available yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need a custom plan?{' '}
            <a href="#" className="text-brand-600 font-semibold hover:text-brand-700">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}