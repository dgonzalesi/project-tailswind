import React from 'react'

export const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src="/src/img/logo.svg" alt="Logo hotel" className="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Product</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">About Us</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Careers</a>
                <a href="#" className="text-gray-500 hover:text-gray-900">Community</a>
            </div>
            <a href="" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-rose-900">Get Started</a>
        </div>
    </nav>
  )
}
