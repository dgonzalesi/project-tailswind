import { useState, React } from 'react'
import { MobileMenu } from './MobileMenu'
import logo from './img/logo.svg'

export const Navbar = () => {
  const [mouted, setMout] = useState('')
  const [open, setOpen] = useState('')
  const demoSite = (value = 'No Value') => {
    alert(
      `${value}: This is a demo site. It's only for show the skill set with Tailwind, sub-pages are not built.`
    )
    console.log(value)
  }
  const clickHandler = (e) => {
    if (open === 'open') {
      setOpen('')
      setMout('')
    } else {
      setOpen('open')
      setMout(<MobileMenu demo={demoSite} />)
    }
  }

  return (
    <nav className="relative container mx-auto p-6">
      {mouted}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="Logo hotel test" className="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href=""
            onClick={(e) => demoSite(e.target.innerHTML)}
            className="text-gray-500 hover:text-gray-900">
            Pricing
          </a>
          <a
            href="#"
            onClick={(e) => demoSite(e.target.innerHTML)}
            className="text-gray-500 hover:text-gray-900">
            Product
          </a>
          <a
            href="#"
            onClick={(e) => demoSite(e.target.innerHTML)}
            className="text-gray-500 hover:text-gray-900">
            About Us
          </a>
          <a
            href="#"
            onClick={(e) => demoSite(e.target.innerHTML)}
            className="text-gray-500 hover:text-gray-900">
            Careers
          </a>
          <a
            href="#"
            onClick={(e) => demoSite(e.target.innerHTML)}
            className="text-gray-500 hover:text-gray-900">
            Community
          </a>
        </div>
        <a
          href=""
          onClick={(e) => demoSite(e.target.innerHTML)}
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
    </nav>
  )
}
