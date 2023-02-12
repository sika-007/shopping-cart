import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import "./App.css"

const App = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [])

  console.log(productData)

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop productData={productData}/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App