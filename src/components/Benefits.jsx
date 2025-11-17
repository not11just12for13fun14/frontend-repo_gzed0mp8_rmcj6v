import React from 'react'
import { ShieldCheck, CupSoda, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: '25g Protein',
    desc: 'Serious protein for performance and recovery — without the chalky aftertaste.'
  },
  {
    icon: CupSoda,
    title: 'Real Yunnan & Assam Tea',
    desc: 'Authentic black tea character — malty, smooth, and tea-forward.'
  },
  {
    icon: Leaf,
    title: 'Clean Ingredients. Legendary Flavor.',
    desc: 'Minimal ingredient list. No artificial flavors, no chemical sweeteners.'
  }
]

export default function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <b.icon className="h-5 w-5 text-amber-800" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{b.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
