import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import "./App.css"
import axios from "axios"
import { ShopContextProvider } from "./context/context"



export const App = () => {
  
  const [productData, setProductData] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=20")
    .then(res => {
        setProductData(res.data)
    }).catch(err => {
        console.log(err)
    })
  }, [])

  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop productData={productData}/>}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}
