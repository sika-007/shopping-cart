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
        rateCount={product.rating.count}
      />
    } 
  })

console.log(Object.values(cartItems))

  return (
    <div className="cart section__padding">
      <div className="cart__title">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart__items">
        {Object.values(cartItems).every(num => num === 0) ? <h3 className='no-cart-items'>&#128161;Why not Add Some Items to Your Cart?&#128522;</h3> : cartElements} 
      </div>
    </div>
  )
}

export default Cart
