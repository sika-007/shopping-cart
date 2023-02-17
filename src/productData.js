import axios from "axios"


async function getProducts() {
    return new Promise((accept, reject) => {
        const productsArr = []
        axios.get("https://fakestoreapi.com/products?limit=20")
        .then(res => {
            productsArr.push(...res.data)
            accept(productsArr)
        }).catch(err => {
            console.log(err)
        })
    })
    
}

const products = await getProducts()

export default products


