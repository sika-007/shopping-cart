import React, { useContext } from 'react'
import "./product.css"
import RegStar from "../../assets/star-regular.svg"
import SolidStar from "../../assets/star-solid.svg"
import { nanoid } from 'nanoid'
import { ShopContext } from '../../context/context'


const Product = (props) => {

  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemAmount = cartItems[props.id]


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
    <div className="product">
      <div className="product__image">
        <img src={props.productImage} alt={props.name}/>
      </div>
      <div className="product__description">
        <p className='product__name'>{props.name}</p>
        <p className="product__price">${props.price}</p>
      </div>
      <button className="product__add-to-cart" onClick={() => addToCart(props.id)}>
        Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
      </button>
      <div className='rating'>
        <StarElements/>
        <p>({props.rateCount})</p>
      </div>
    </div>
  )
}

export default Product
