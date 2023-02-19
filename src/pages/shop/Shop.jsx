import React, { useContext } from 'react'
import Product from '../../components/product/Product'
import "./shop.css"
import MoreInfo from '../../components/moreInfo/MoreInfo'
import { ShopContext } from '../../context/context'


const Shop = () => {

  const { moreInfoId, setMoreInfoId, products } = useContext(ShopContext)

  function showMoreInfo(id) {
    for (const product of products) {
      if (product.id === id) {
        return <MoreInfo
          key={product.id}
          id={product.id}
          name={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating.rate}
          rateCount={product.rating.count}
          description={product.description}
        />
      }
    }
  }

  const productElements = products?.map(product => {
    return <Product
      key={product.id}
      id={product.id}
      name={product.title}
      productImage={product.image}
      price={product.price}
      rating={product.rating.rate}
      rateCount={product.rating.count}
    />
  })

  return (
    <div className="shop section__padding">
      <div className="shop__products">
        {productElements}
      </div>
      {moreInfoId &&
        <div className="shop__more-info" onClick={(e) => {
          e.stopPropagation()
          setMoreInfoId(null)
        }}>
          {showMoreInfo(moreInfoId)}
        </div>}
    </div>
  )
}

export default Shop
