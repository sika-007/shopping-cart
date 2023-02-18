import React, { createContext, useEffect, useState } from 'react'
import products from '../productData';

export const ShopContext = createContext();


export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [moreInfoId, setMoreInfoId] = useState(null)

    useEffect(() => {
        let cart = {}
        for (let i = 1; i <= products.length; i++) {
            cart[i] = 0
        }
        setCartItems(cart)
    }, [products.length])


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, moreInfoId, setMoreInfoId }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

