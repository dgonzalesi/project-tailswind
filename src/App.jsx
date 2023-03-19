import React from 'react'
import './App.css'
import { Features } from './Features'
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
    </div>
  )
}

export default App
