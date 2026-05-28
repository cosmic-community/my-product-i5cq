import FeatureCard from '@/components/FeatureCard'
import SectionHeader from '@/components/SectionHeader'
import { getFeatures } from '@/lib/cosmic'

export const metadata = {
  title: 'Features - My Product',
  description: 'Explore all the powerful features of My Product.',
}

export default async function FeaturesPage() {
  const features = await getFeatures()

  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Powerful features for modern teams"
          description="Everything you need to streamline your workflow and grow your business."
        />

        {features.length === 0 ? (
          <p className="text-center text-gray-600">No features available yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}