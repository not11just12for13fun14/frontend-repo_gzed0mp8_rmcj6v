import React from 'react'

export default function Story() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-200 p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">Built for milk tea lovers who train</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              We were tired of chalky bars and fake flavors. So we created something new: a bar that channels real milk tea culture with serious macros. Crafted with Yunnan and Assam tea, its smooth, malty, and actually delicious.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Designed for people who care about performance and taste — without the junk fillers, artificial flavors, or chemical sweeteners.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 p-8">
            <h4 className="text-sm uppercase tracking-[0.25em] text-neutral-500">Our North Star</h4>
            <p className="mt-3 text-xl font-semibold text-neutral-900">The first high-protein bar inspired by authentic milk tea culture.</p>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li>• Real black tea sourced from Yunnan & Assam</li>
              <li>• Clean and minimal ingredient list</li>
              <li>• A bar that finally tastes like a real milk tea</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
