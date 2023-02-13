import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__title">
        <h1>Sika's Store</h1>
      </div>
      <div className="navbar__links">
        <Link to="/">
            Shop
        </Link>
        <Link to="/cart">
            <ShoppingCart size={32}/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
