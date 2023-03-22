import React from 'react'
import './App.css'
import { CTA } from './CTA'
import { Features } from './Features'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Navbar } from './Navbar'
import { Testimonials } from './Testimonials'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
