import { Badge, Button, Card, ListGroup, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Product } from "../interfaces/interfaces";
import { useCart } from "../customHooks/useCart";




export function SelectedProducts() {


    const {cart,
           total,
           addQuantity,
           removeQuantity,
           removeProductInCart} = useCart()

           
    const handleAddQuantity = (product: Product) => {
        addQuantity(product)
    }

    const handleRemoveQuantity = (product: Product) => {
        removeQuantity(product)
    }

    const handleRemoveProductInCart = (product: Product) => {
        removeProductInCart(product)
    }


    

    //-------------------------------------------------------------------------//


    const navigate = useNavigate();
    const handleNavigateToCustomerForm = () => {  
        navigate('/customer-form')
    }

    const handleNavigateToHome = () => {
        navigate('/')
    }


    return(
        
        <Row xs={1} md={3} lg={12} className="g-2">
            

            <Card className="mx-auto mt-4" style={{ width: '30rem', padding: '15px'}}>
                
            <Stack direction="horizontal" gap={5}>
            <Button variant='link'>
                <i className='material-icons' onClick={handleNavigateToHome} >arrow_back</i>
            </Button>
            <Card.Title className="text-center">Selected products</Card.Title>

            </Stack>

            
            <Card.Body>
            {cart.length == 0 && 
            <p className="text-center">There is not selected products </p>}

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
            </Card.Body>

            {cart.length > 0 && 
            <Stack direction='horizontal' className='m-3'>
                    <label className="fw-bold me-1">Total:</label>
                    <div style={{color: 'green'}}>${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </Stack>
            }

            {cart.length > 0 &&
                <Button className="mt-3" type='button' onClick={handleNavigateToCustomerForm}>Continue with the customer info</Button>
            }
            </Card>
        </Row>
       
    )
}