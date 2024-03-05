import { useFilterStore } from "../store/filters"


export function useFilters() {
    
    const filters = useFilterStore(state => state.filters)
    const filterProducts = useFilterStore(state => state.filterProducts)

    return {
        filters,
        filterProducts
    }
}