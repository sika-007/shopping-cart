import axios from "axios"

const url = "https://fakestoreapi.com/products?limit=20"

let products

async function getProducts(url) {
    try {
        const response = await axios.get(url)
        products = response.data
        return response.data
    } catch (error) {
        console.error(error);
    }
}

console.log(await getProducts(url))

export default products


