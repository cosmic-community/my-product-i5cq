export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      )}
    </div>
  )
}