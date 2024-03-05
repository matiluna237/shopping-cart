import Offcanvas from 'react-bootstrap/Offcanvas';
import { Badge, Button, ListGroup, Stack } from 'react-bootstrap';
import { Product } from '../interfaces/interfaces';
import { useNavigate } from 'react-router';
import { useCart } from '../customHooks/useCart';






export function Carrito({ show, handleClose }: { show: boolean, handleClose: () => void }) {
  

  const {cart,
         clearCart,
         removeProductInCart,
         addQuantity,
         removeQuantity,
         total} = useCart()


  const handleRemoveProductInCart = (product: Product) => {
    removeProductInCart(product)
  }


  const handleAddQuantity = (product: Product) => {
    addQuantity(product)
  }
  const handleRemoveQuantity = (product: Product) => {
    removeQuantity(product)
  }



  
  console.log(cart)
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate('/selected-products')
  }
  



  





  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header>


          <Offcanvas.Title>
            <Button variant='link' onClick={handleClose}>
              <i className='material-icons' >arrow_back</i>
            </Button>
              Cart
          </Offcanvas.Title>


          {cart.length > 0 &&
            <Stack direction='horizontal'>
              <Button variant='link' onClick={clearCart}>clear cart
              <i className='material-icons' onClick={clearCart} style={{color:'red'}}>delete</i>
              </Button>
            </Stack>
          }


        </Offcanvas.Header>
        <Offcanvas.Body>

          {cart.length == 0 && <p>There is not items in the cart</p>}


          <ListGroup as="ol" numbered>
            {cart.map(item => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={item.id}
            >

              <Stack direction='vertical'>
                <div className="ms-2 me-auto">
                  <img src={item.thumbnail} alt={item.title} style={{width: 40, height:40}} />
                  <div className="fw-bold">{item.title}</div>
                  <div style={{color: 'green'}}>${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                

                <Stack direction='horizontal' className='mt-3'>
                  <label className="fw-bold me-1">Subtotal:</label>
                  <div style={{color: 'green'}}>${item.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </Stack> 
                
              </Stack>




             <div>
                <Stack direction='vertical'>
                  <Button variant='link' onClick={() => handleAddQuantity(item)}>
                    <i className='material-icons'>add_circle</i>
                  </Button>
                    
                  <Badge bg="primary" pill>
                    {item.quantity}
                  </Badge>

                  <Button variant='link'>
                    <i className='material-icons' onClick={() => handleRemoveQuantity(item)}>do_not_disturb_on</i>
                  </Button>
                </Stack>
              </div>


              <div>
                <Button variant='link' style={{color:'red'}}>
                    <i className='material-icons' onClick={() => handleRemoveProductInCart(item)}>close</i>
                </Button>
              </div>

            </ListGroup.Item>
            ))}
          </ListGroup>


          

        </Offcanvas.Body>

        {cart.length > 0 && 
          <Stack direction='horizontal' className='m-3'>
                  <label className="fw-bold me-1">Total:</label>
                  <div style={{color: 'green'}}>${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </Stack>
        }

        {cart.length > 0 && 
          <Button onClick={handleBuy}>Buy</Button>
        }
      </Offcanvas>

      
    </>

    
  );
}


