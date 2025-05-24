import { useEffect, useState } from "react"


const useProducts = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(err => console.error(err));
    }, [])
    return {products, category}
}

export default useProducts;