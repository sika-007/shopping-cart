import React from 'react'
import "./product.css"

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
    </div>
  )
}

export default Product
