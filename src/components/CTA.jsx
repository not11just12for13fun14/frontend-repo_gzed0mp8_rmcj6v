import React from 'react'

export default function CTA({ onClick }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">Be the First to Taste It</h2>
        <p className="mt-4 text-neutral-700">Join the early list for updates, drops, and tasting sessions for The Milk Tea Protein Bar.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <input type="email" placeholder="your@email" className="w-full max-w-xs rounded-full border border-stone-300 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
          <button onClick={onClick} className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition-colors">Join</button>
        </div>
      </div>
    </section>
  )
}
