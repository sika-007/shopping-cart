import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import "./App.css"
import { ShopContextProvider } from "./context/context"
import products from "./productData"



export const App = () => {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop productData={products}/>}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}
