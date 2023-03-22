import React from 'react'

export const CTA = () => {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="mt-10 container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today.
        </h1>
        <div className="p-3 px-6 pt-2 text-white bg-white rounded-full shadow-2xl baseline hover:bg-rose-900 hover:text-white hover:drop-shadow-lg text-brightRed text-bold">Get Started</div>
      </div>
    </section>
  )
}
