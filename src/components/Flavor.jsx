import React from 'react'

export default function Flavor() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Authentic Milk Tea Flavor</h2>
        <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
          Creamy, malty, smooth, and tea-forward with a gentle sweetness. Not a gimmick flavor — made with real black tea for a profile that actually tastes like the milk tea you crave.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Creamy', 'Malty', 'Smooth', 'Tea-Forward'].map((t) => (
            <div key={t} className="rounded-xl border border-stone-200 bg-amber-50/40 py-4">
              <p className="text-sm font-medium text-amber-900">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
