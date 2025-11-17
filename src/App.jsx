import React, { useState } from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Flavor from './components/Flavor'
import Ingredients from './components/Ingredients'
import Nutrition from './components/Nutrition'
import Story from './components/Story'
import CTA from './components/CTA'

function App() {
  const [message, setMessage] = useState('')

  const handlePrimary = () => setMessage('Thanks — well notify you for early access!')
  const handleSecondary = () => setMessage('Added to the waitlist — stay tuned!')
  const handleJoin = () => setMessage('Welcome to the list for The Milk Tea Protein Bar!')

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-neutral-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-amber-900" />
            <span className="text-sm font-semibold tracking-wide">The Milk Tea Protein Bar</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
            <a href="#benefits" className="hover:text-neutral-900">Benefits</a>
            <a href="#flavor" className="hover:text-neutral-900">Flavor</a>
            <a href="#ingredients" className="hover:text-neutral-900">Ingredients</a>
            <a href="#nutrition" className="hover:text-neutral-900">Nutrition</a>
            <a href="#story" className="hover:text-neutral-900">Story</a>
          </div>
          <button onClick={handlePrimary} className="rounded-full bg-neutral-900 text-white px-4 py-2 text-xs font-semibold hover:bg-black">Get Early Access</button>
        </div>
      </header>

      <main>
        <div id="hero"><Hero onPrimary={handlePrimary} onSecondary={handleSecondary} /></div>
        <div id="benefits"><Benefits /></div>
        <div id="flavor"><Flavor /></div>
        <div id="ingredients"><Ingredients /></div>
        <div id="nutrition"><Nutrition /></div>
        <div id="story"><Story /></div>
        <CTA onClick={handleJoin} />
      </main>

      {message && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm shadow-lg">
          {message}
        </div>
      )}

      <footer className="border-t border-stone-200 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex items-center justify-between">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} The Milk Tea Protein Bar</p>
          <div className="text-sm text-neutral-600">Real tea. Real taste.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
