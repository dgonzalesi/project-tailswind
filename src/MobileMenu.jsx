import React from 'react'

export const MobileMenu = () => {
  return (
    <div id="menu" className="hidden absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md md:hidden">
        <a href="#">Pricing </a>
        <a href="#">About Us</a>
        <a href="#">Product</a>
        <a href="#">Carrers</a>
        <a href="#">Comunity</a>
    </div>
  )
}
