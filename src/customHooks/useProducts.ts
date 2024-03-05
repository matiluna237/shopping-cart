import { useProductsStore } from "../store/products"



export function useProducts(){
    
    const fetchProducts = useProductsStore(state => state.fetchProducts)
    const stateProducts = useProductsStore(state => state.products)

    return {
        fetchProducts,
        stateProducts
    }
}