import React, { useContext } from 'react'
import "./moreInfo.css"
import { nanoid } from 'nanoid'
import SolidStar from "../../assets/star-solid.svg"
import RegStar from "../../assets/star-regular.svg"
import { ShopContext } from '../../context/context'
import { X } from "phosphor-react"


const MoreInfo = (props) => {

  const { addToCart, cartItems, setMoreInfoId } = useContext(ShopContext)

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
    <div className="more-info section__padding" onClick={(e) => e.stopPropagation()}>
      <div className="more-info__name">
        <h2>{props.name}</h2>
      </div>
      <div className="more-info__image">
        <img src={props.image} alt={props.name} height={200} />
      </div>
      <div className="more-info__description">
        <p><span>Description: </span>{props.description}</p>
        <div className="more-info__rating">
          <StarElements />
          ({props.rateCount})
        </div>
        <div className="more-info__price-and-add-to-cart">
          <h4>Price: ${props.price}</h4>
          <button onClick={(e) => {
            e.stopPropagation()
            addToCart(props.id)
          }}>Add to Cart ({cartItems[props.id]})</button>
        </div>
        <button className="close-more-info" onClick={(e) => {
          e.stopPropagation()
          setMoreInfoId(null)
        }}>
          <X size={32} />
        </button>
      </div>
    </div>
  )
}

export default MoreInfo
