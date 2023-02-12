import React from 'react'
import "./product.css"
import RegStar from "../../assets/star-regular.svg"
import SolidStar from "../../assets/star-solid.svg"


const Product = (props) => {
  return (
    <div className="product">
      <div className="product__image">
        <img src={props.productImage} alt={props.name} />
      </div>
      <div className="product__description">
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
      <button className="product__add-to-cart">
        Add to Cart
      </button>
      
    </div>
  )
}

export default Product
