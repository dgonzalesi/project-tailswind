import React from 'react'
import logo from './img/logo-white.svg'
import facebook from './img/icon-facebook.svg'
import youtube from './img/icon-youtube.svg'
import twitter from './img/icon-twitter.svg'
import pinterest from './img/icon-pinterest.svg'
import instagram from './img/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-800">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-12 md:flex-row md:space-y-0">
        {/* Logo And Social Links */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/* Logo */}
          <div className="text-white md:block md:hidden">
            Copyright &copy; 2022, All rights reserved
          </div>
          <div className="py-8">
            <img src={logo} alt="" className="h-8" />
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-5">
            <a href="#">
              <img src={facebook} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={youtube} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={twitter} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={pinterest} alt="" className="h-8" />
            </a>
            <a href="#">
              <img src={instagram} alt="" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3 text-white">
          {/* Links */}
          <a href="#" className="hover:text-brightRed">
            Home
          </a>
          <a href="#" className="hover:text-brightRed">
            Pricing
          </a>
          <a href="#" className="hover:text-brightRed">
            Products
          </a>
          <a href="#" className="hover:text-brightRed">
            About
          </a>
        </div>
        <div className="flex flex-col space-y-3 text-white">
          {/* Links */}
          <a href="#" className="hover:text-brightRed">
            Carrers
          </a>
          <a href="#" className="hover:text-brightRed">
            Comunity
          </a>
          <a href="#" className="hover:text-brightRed">
            Privacy Policy
          </a>
        </div>
        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form action="POST">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full md:focus:outline-white bg-slate-700 placeholder-gray-500 placeholder-opacity-50 text-white"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-red-400 focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
