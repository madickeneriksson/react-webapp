import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon, quantity, hideMobil, hideTablet }) => {
  return (
    <NavLink className={`menu-icon ${hideMobil ? "hideMobil" : ""} ${hideTablet ? "hideTablet" : ""}`} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon