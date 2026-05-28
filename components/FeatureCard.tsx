import type { Feature } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FeatureCard({ feature }: { feature: Feature }) {
  const name = getMetafieldValue(feature.metadata?.name) || feature.title
  const description = getMetafieldValue(feature.metadata?.description)
  const icon = getMetafieldValue(feature.metadata?.icon)
  const iconImage = feature.metadata?.icon_image

  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white text-2xl shadow-md">
        {iconImage ? (
          <img
            src={`${iconImage.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            className="h-6 w-6"
            width={24}
            height={24}
          />
        ) : icon ? (
          <span>{icon}</span>
        ) : (
          <span>⚡</span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      {description && (
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  )
}