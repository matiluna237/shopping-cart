import { Col, Row} from "react-bootstrap";
import { useFilterStore } from "../store/filters";






export function Filters() {

    

    const filters = useFilterStore(state => state.filters)
    const setFilters = useFilterStore(state => state.setFilters)


    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory = event.target.value;
    
        const newFilters = {
            category: newCategory,
            minPrice: filters.minPrice,
            searchInput: filters.searchInput
        }
    
        setFilters(newFilters)
    }

    const handleChangeMinPrice = (event) => {
        const newMinPrice = event.target.value; 
        
        const newFilters = {
            category: filters.category,
            minPrice: newMinPrice,
            searchInput: filters.searchInput
        } 

        setFilters(newFilters)
    }

    const handleChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchInput = event.target.value.trim();

        const newFilters = {
            category: filters.category,
            minPrice: filters.minPrice,
            searchInput: newSearchInput
        }

        setFilters(newFilters)
    }
    

    


    return(
        <section className="d-flex justify-content-center align-items-center">
            <Row>
                {/*
                <Col>
                    <div>
                        <label htmlFor="price">Precio a partir de: </label>
                        <input 
                            type="range"
                            id="price"
                            min='0'
                            max='1000'
                            onChange={handleChangeMinPrice}
                        />
                        <span>${filters.minPrice}</span>
                    </div>
                </Col>
                */}


                <Col>
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <select name="" id="category" value={filters.category} onChange={handleChangeCategory}>
                            <option value='all'>Todas</option>
                            <option value="laptops">Notbooks</option>
                            <option value='smartphones'>Celulares</option>
                        </select>
                    </div>
                </Col>

                <Col>
                    <div>
                        <input type="text" placeholder="Buscar productos..." value={filters.searchInput} onChange={handleChangeSearchInput}/>
                    </div>
                </Col>
            </Row>
        </section>

    )
}