import React, { useContext } from 'react'
import "./cartItem.css"
import SolidStar from "../../assets/star-solid.svg"
import RegStar from "../../assets/star-regular.svg"
import { nanoid } from "nanoid"
import { ShopContext } from '../../context/context'

const CartItem = (props) => {

  const { addToCart, removeFromCart, cartItems, updateCartItems } = useContext(ShopContext)

  function StarElements() {
    let starArr = []
    for (let i = 0; i < 5; i++) {
      if (i < props.rating) {
        starArr.push(
          <img key={nanoid()} src={SolidStar} alt="filled star" width="14px" />
        )
      } else {
        starArr.push(
          <img key={nanoid()} src={RegStar} alt="empty star" width="10px" />
        )
      }
    }
    return starArr
  }

  return (
    <div className='cart-item'>
      <div className="cart-item__productinfo">
        <div className="cart-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="cart-item__info">
          <h2>{props.title}</h2>
          <div className="star-elements">
            <StarElements />
          </div>
          <p>({props.rateCount})</p>
        </div>
      </div>
      <div className="cart-item__product-count">
        <button className='cart-item__btn' onClick={() => addToCart(props.id)}>+</button>
        <input type="text" value={cartItems[props.id]} onChange={(e) => {
          updateCartItems(e, props.id)
        }} />
        <button className='cart-item__btn' onClick={() => removeFromCart(props.id)}>-</button>
      </div>
    </div>
  )
}

export default CartItem
