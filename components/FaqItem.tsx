'use client'

import { useState } from 'react'
import type { Faq } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function FaqItem({ faq }: { faq: Faq }) {
  const [isOpen, setIsOpen] = useState(false)
  const question = getMetafieldValue(faq.metadata?.question) || faq.title
  const answer = getMetafieldValue(faq.metadata?.answer)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-base font-semibold text-gray-900 pr-8">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && answer && (
        <div className="pb-6 pr-8">
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  )
}