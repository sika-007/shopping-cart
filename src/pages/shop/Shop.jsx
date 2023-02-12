import React, {useState, useEffect} from 'react'
import Product from '../../components/product/Product'
import "./shop.css"

const Shop = ({productData}) => {

   const productElements = productData.map(data => {
    return <Product
      key={data.id}
      id={data.id}
      name={data.title}
      productImage={data.image}
      price={data.price}
    />
  })

  return (
    <div className="shop section__padding">
      <div className="Shop__title">
        <h1> Sika's Shop </h1>
      </div>
      <div className="shop__products">
        {productElements}
      </div>
    </div>
  )
}

export default Shop
