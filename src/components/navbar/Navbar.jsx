import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("")

  function cartPageSelect() {
    setSelectedPage("cart")
  }

  function shopPageSelect() {
    setSelectedPage("shop")
  }

  return (
    <div className='navbar'>
      <div className="navbar__title">
        <h1>Sika's Store</h1>
      </div>
      <div className="navbar__links">
        <Link to="/">
          <div onClick={shopPageSelect} className={selectedPage === "shop" ? "selectedBG" : "noBG"}>
            Shop
          </div>
        </Link>
        <Link to="/cart">
          <div onClick={cartPageSelect} className={selectedPage === "cart" ? "selectedBG" : "noBG"}>
            <ShoppingCart size={32}/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
