import React, { useContext } from 'react'
import "./cart.css"
import products from '../../productData'
import { ShopContext } from '../../context/context'
import CartItem from '../../components/cartItem/CartItem'


const Cart = () => {

  const {cartItems} = useContext(ShopContext)
  
  const cartElements = products.map((product) => {
    if (cartItems[product.id] > 0) {
      return <CartItem 
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
        rating={product.rating.rate}
        rateCount={product.rating.rateCount}
      />
    }
  })

  console.log(products)

  return (
    <div className="cart section__padding">
      <div className="cart__title">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart__items">
        {cartElements}
      </div>
    </div>
  )
}

export default Cart
