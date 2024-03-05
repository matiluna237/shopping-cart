import { create } from "zustand";
import { fetchProductsFromJson } from "../services/products.service";
import { StateProducts } from "../interfaces/interfaces";



export const useProductsStore = create<StateProducts>((set, get) => {

    return {
        products: [],

        fetchProducts: async() => {
            const res = await fetchProductsFromJson()
            set({products: res.products})
        }
    }
})