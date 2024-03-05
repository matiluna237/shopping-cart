import { Badge, Button, Container, Navbar} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Filters } from "./Filters";


import { Carrito } from "./Carrito";
import { useCart } from "../customHooks/useCart";





export function NavBar() {


  const { cart, cartShow, setCartShow } = useCart()



  const handleCartClose = () => {
    setCartShow(false);
  } 
  const handleCartShow = () => {
    setCartShow(true);
  } 

  //recupero la ruta actual y si es igual a la ruta "/" entonces quiere decir que estoy en "Home.tsx" Esto me sirve luego para mostrar los filtros y el carrito o ocultarlos si no estoy en "Home.tsx"
  const location = useLocation();
  const isHomePage = location.pathname === "/";


    return(
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        
        <Navbar.Brand>
            <Link to="/" style={{textDecoration: "none", color: "white"}}> Shopping Cart </Link> 
            
        </Navbar.Brand> 
      

          {isHomePage && 
              <>

              <Filters></Filters>
                  
              <div className='ms-auto'>
                <Button variant='link' onClick={handleCartShow}>
                  <i className='material-icons' >shopping_cart</i>
                  <Badge bg='warning'>{cart.length}</Badge>
                </Button>
              </div>
                
              <Carrito show={cartShow} handleClose={handleCartClose}></Carrito>

              
            </>
          }
        
      </Container>
    </Navbar>
    )
}