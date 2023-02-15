import axios from "axios"


let products = []

axios.get("https://fakestoreapi.com/products?limit=10")
.then(res => {
    products.push(...res.data)
}).catch(err => {
    console.log(err)
})

export default products
