import React from 'react'
import PropTypes from 'prop-types'

export const MobileMenu = ({ demo }) => {
  return (
    <div
      id="menu"
      className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md md:hidden">
      <a href="#" onClick={(e) => demo(e.target.innerHTML)}>
        Pricing
      </a>
      <a href="#" onClick={(e) => demo(e.target.innerHTML)}>
        About Us
      </a>
      <a href="#" onClick={(e) => demo(e.target.innerHTML)}>
        Product
      </a>
      <a href="#" onClick={(e) => demo(e.target.innerHTML)}>
        Carrers
      </a>
      <a href="#" onClick={(e) => demo(e.target.innerHTML)}>
        Comunity
      </a>
    </div>
  );
}

MobileMenu.propTypes = {
  demo: PropTypes.func.isRequired
}
