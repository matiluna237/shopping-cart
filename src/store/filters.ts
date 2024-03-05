
import { create } from "zustand";
import { Filter, Product, StateFilters } from "../interfaces/interfaces";




export const useFilterStore = create<StateFilters>((set, get) => {
    
    return {

        filters: {
            category: 'all',
            minPrice: 0,
            searchInput: ''
        },

        //funcion para setear filtros
        setFilters: (newFilters: Filter) => { 
            set({
                filters: {
                    category: newFilters.category,
                    minPrice: newFilters.minPrice,
                    searchInput: newFilters.searchInput
                }
            })
        },

        //funcion para filtrar productos segun el estado de los filters
        filterProducts: (products:Product[]) => {
            const {filters} = get();
            const productosFiltrados = products.filter(product => {
                return (product.category == filters.category || filters.category == 'all') &&
                       (product.price >= filters.minPrice) &&
                       (product.title.toLowerCase().includes(filters.searchInput.toLowerCase()))
            });
            return productosFiltrados
        }
    }
})


