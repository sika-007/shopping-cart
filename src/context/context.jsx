import React, { createContext, useEffect, useState } from 'react'
import { generatePath } from 'react-router-dom';
import products  from '../productData';

 export const ShopContext = createContext();
    

export const ShopContextProvider = (props) => {

    const getDefaultCart = () => {
        let cart = {}
        for (let i = 0; i < products.length; i++) {
            cart[i] = 0
        }
        return cart
    }

    const [cartItems, setCartItems] = useState({})

    useEffect(() => {
        setCartItems(getDefaultCart())
    }, [])

    console.log(cartItems)

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

