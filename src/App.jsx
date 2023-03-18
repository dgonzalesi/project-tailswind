import React from 'react'
import './App.css'
import { Features } from './Features'
import { Hero } from './Hero'
import { Navbar } from './Navbar'

function App () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default App
