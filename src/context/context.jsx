import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const ShopContext = createContext();


export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [moreInfoId, setMoreInfoId] = useState(null)
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const url = "https://fakestoreapi.com/products?limit=20"

        async function getProducts(url) {
            try {
                const response = await axios.get(url)
                const data = await response.data
                setProducts(data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }  

        getProducts(url)
        
    }, [])

    useEffect(() => {
        let cart = {}
        for (let i = 1; i <= products?.length; i++) {
            cart[i] = 0
        }
        setCartItems(cart)
    }, [products?.length])

    const updateCartItems = (event, itemId) => {
        setCartItems(prev => ({...prev, [itemId]: event.target.value}))
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, moreInfoId, setMoreInfoId, products, updateCartItems }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

