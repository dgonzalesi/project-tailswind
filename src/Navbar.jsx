import { useState, React } from 'react'
import { MobileMenu } from './MobileMenu'

export const Navbar = () => {
  const [mouted, setMout] = useState('')
  const [open, setOpen] = useState('')
  const clickHandler = (e) => {
    const button = document.getElementById('menu-btn')
    e.preventDefault()
    if (open === 'open') {
      setOpen('')
      setMout('')
    } else {
      setOpen('open')
      setMout(<MobileMenu />)
    }
  }

  return (
    <nav className="relative container mx-auto p-6">
      {mouted}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="/src/img/logo.svg" alt="Logo hotel" className="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Product
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Careers
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Community
          </a>
        </div>
        <a
          href=""
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-rose-900">
          Get Started
        </a>
        {/* Hamburger Menu */}
        {}
        <button
          id="menu-btn"
          onClick={clickHandler}
          className={`${open} block hamburger md:hidden focus:outline-none`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
    </nav>
  )
}
