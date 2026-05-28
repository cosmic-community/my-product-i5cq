import FaqItem from '@/components/FaqItem'
import SectionHeader from '@/components/SectionHeader'
import { getFaqs, getMetafieldValue } from '@/lib/cosmic'
import type { Faq } from '@/types'

export const metadata = {
  title: 'FAQ - My Product',
  description: 'Frequently asked questions about My Product.',
}

export default async function FaqPage() {
  const faqs = await getFaqs()

  // Group by category
  const grouped: Record<string, Faq[]> = {}
  faqs.forEach((faq) => {
    const category = getMetafieldValue(faq.metadata?.category) || 'General'
    if (!grouped[category]) {
      grouped[category] = []
    }
    const categoryArray = grouped[category]
    if (categoryArray) {
      categoryArray.push(faq)
    }
  })

  const categories = Object.keys(grouped).sort()

  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Find answers to common questions about My Product."
        />

        {faqs.length === 0 ? (
          <p className="text-center text-gray-600">No FAQs available yet.</p>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryFaqs = grouped[category]
              if (!categoryFaqs || categoryFaqs.length === 0) {
                return null
              }
              return (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
                  <div className="bg-white rounded-2xl border border-gray-200 px-8 shadow-sm">
                    {categoryFaqs.map((faq) => (
                      <FaqItem key={faq.id} faq={faq} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}