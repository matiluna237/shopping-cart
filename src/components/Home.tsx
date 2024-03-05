import { Container } from "react-bootstrap";
import { ListOfProducts } from "./ListOfProducts";
import { Carrito } from "./Carrito";
import { useEffect } from "react";
import { useCart } from "../customHooks/useCart";
import { useFilters } from "../customHooks/useFilters";
import { useProducts } from "../customHooks/useProducts";
import { AlertMessage } from "./Alert";




export function Home(){

  const {fetchProducts,
         stateProducts} = useProducts()

  const { filterProducts } = useFilters()
  
  
  useEffect( () => {
    fetchProducts()  
  },[])
    
    
  const productosFiltrados = filterProducts(stateProducts)
  

  
  
  
  const {cartShow, setCartShow} = useCart()
  
   
  const handleCartClose = () => {
    setCartShow(false);
  } 
  const handleCartShow = () => {
    setCartShow(true);
  } 
    


    
  return (
    <>
    <Container style={{marginTop:170}}>
      <AlertMessage></AlertMessage>
      <ListOfProducts products={productosFiltrados} handleShow={handleCartShow}></ListOfProducts>
      <Carrito show={cartShow} handleClose={handleCartClose}></Carrito>   
    </Container>
    </>
  )
}