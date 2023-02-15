import React from 'react'

const CartItem = (props) => {
  return (
    <div className='cart-item'>
      <div className="cart-item__image">
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default CartItem
