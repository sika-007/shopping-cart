let products = []

fetch("https://fakestoreapi.com/products?limit=10")
.then(res => res.json())
.then(data => products.push(...data))

export default products
