import React from 'react'
import Product from '../../components/product/Product'
import "./shop.css"
import products from '../../productData'

const Shop = () => {

   const productElements = products.map(data => {
    return <Product
      key={data.id}
      data={data}
      id={data.id}
      name={data.title}
      productImage={data.image}
      price={data.price}
      rating={data.rating.rate}
      rateCount={data.rating.count}
    />
  })

  return (
    <div className="shop section__padding">
      <div className="shop__products">
        {productElements}
      </div>
    </div>
  )
}

export default Shop
