import React from 'react'

export default function Nutrition() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">Clean, functional macros</h3>
              <p className="mt-3 text-neutral-700 max-w-md">High protein, low sugar, and low junk — designed for performance without compromising flavor.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{k:'Protein', v:'25g'}, {k:'Sugar', v:'3g'}, {k:'Fiber', v:'10g'}, {k:'Calories', v:'230'}].map((n) => (
                <div key={n.k} className="rounded-2xl bg-amber-50/50 border border-stone-200 p-6 text-center">
                  <p className="text-3xl font-extrabold text-neutral-900">{n.v}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">{n.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
