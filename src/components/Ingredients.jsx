import React from 'react'

const ingredients = [
  'Milk protein isolate',
  'Almond butter',
  'Tapioca fiber',
  'Yunnan & Assam black tea',
  'Cocoa butter',
  'Sea salt',
  'Natural vanilla',
]

export default function Ingredients() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Simple, Recognizable Ingredients</h2>
        <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
          The cleanest bar you’ll actually want to eat. We keep the list tight — nothing to hide, nothing extra.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {ingredients.map((i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-white py-4 px-4">
              <p className="text-sm font-medium text-neutral-800">{i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
