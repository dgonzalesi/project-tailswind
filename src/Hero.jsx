import React from 'react'
import ilustration from './img/illustration-intro.svg'

export const Hero = () => {
  return (
    <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-5xl md:text-left">
                    Bring everyone together to build better products.
                </h1>
                <p className="max-w-sm text-center text-sky-800 md:text-left">Manage make it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
                <div className="flex justify-center md:justify-start"><a href="" className="md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-rose-900">Get Started</a></div>
            </div>
            <div className="md:w-1/2">
                <img src={ilustration} alt="Illustration" className="w-full" />
            </div>
        </div>
    </section>
  )
}
