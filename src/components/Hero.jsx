import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh] pt-12 lg:pt-20">
          <div className="relative z-10">
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-500">The Milk Tea Protein Bar</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-neutral-900">
              The High-Protein Milk Tea Bar.
            </h1>
            <p className="mt-6 text-neutral-700 text-lg sm:text-xl max-w-xl">
              The first high-protein bar inspired by authentic milk tea culture — crafted with real black tea from Yunnan & Assam, high protein, and a clean, minimal formulation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-black transition-colors">
                Get Early Access
              </button>
              <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 px-6 py-3 text-sm font-semibold tracking-wide hover:border-neutral-400 transition-colors">
                Join the Waitlist
              </button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-neutral-500 text-sm">
              <div className="h-2 w-2 rounded-full bg-amber-700/70" />
              <span>Real tea. Real taste. No junk fillers.</span>
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[440px] lg:h-[560px] rounded-3xl bg-gradient-to-br from-rose-50 via-amber-50 to-stone-50">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-stone-200/50 blur-3xl" />
    </section>
  )
}
