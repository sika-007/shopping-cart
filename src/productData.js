import axios from "axios"


async function getProducts() {
    return new Promise((accept) => {
        axios.get("https://fakestoreapi.com/products?limit=20")
            .then(res => {
                accept([...res.data]);
            }).catch(err => {
                console.log(err)
            })
    })

}

const products = await getProducts()

export default products


