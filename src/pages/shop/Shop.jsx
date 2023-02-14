import React from 'react'
import Product from '../../components/product/Product'
import "./shop.css"

const Shop = ({productData}) => {

   const productElements = productData.map(data => {
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
