import React, { useContext } from 'react'
import "./cart.css"
import { ShopContext } from '../../context/context'
import CartItem from '../../components/cartItem/CartItem'


const Cart = () => {

  const { cartItems, products } = useContext(ShopContext)

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

  const cartTotal = () => {
    const cartPriceArr = []
    for (let i = 0; i < Object.values(cartItems).length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (i === j) {
          cartPriceArr.push(Object.values(cartItems)[i] * products[i].price)
        }
      }
    }

    //Calculating the total from the array
    const total = cartPriceArr.reduce((acc, cur) => acc + cur, 0)

    //Limiting the total to 2 decimal places
    return Number.parseFloat(total).toFixed(2)
  }

  return (
    <div className="cart">
      <div className="cart__title">
        {!Object.values(cartItems).every(num => num === 0) && <h1>Your Cart Items</h1>}
      </div>
      <div className="cart__items section__padding">
        {Object.values(cartItems).every(num => num === 0) ? <h3 className='no-cart-items'>&#128161;Why not Add Some Items to Your Cart?&#128522;</h3> : cartElements}
      </div>
      {!Object.values(cartItems).every(num => num === 0) && <div className="cart__total-and-btn slide-in-bottom">
        <h3>Your Total: ${cartTotal()}</h3>
        <button>Purchase</button>
      </div>}
    </div>
  )
}

export default Cart
