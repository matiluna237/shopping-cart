import { Product } from "../interfaces/interfaces";
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useCartStore } from "../store/cart";


export function ListOfProducts({ products, handleShow }: { products: Product[], handleShow:() => void }) {

  const stateCart = useCartStore(state => state.cart)
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const checkProductInCart = useCartStore(state => state.checkProductInCart)
  

  const handleAddProductToCart = (product: Product) => {
    addProductToCart(product)
    handleShow()
  }

  const handleCheckProductInCart = (product: Product) => {
    return checkProductInCart(product)
  }


  return (
    <main>
      <Row xs={2} md={3} lg={4} className="g-2">
        {products.map((product: Product) => (
          <Col key={product.id}>
            <Card style={{ height: '20rem' }}>
              <Card.Img variant="top" src={product.thumbnail} style={{ width: '100%', height: '8rem', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}  <strong style={{ color: 'green' }}>${product.price}</strong></Card.Title>

                <div className="mt-auto">
                  <Button variant="primary"
                          className="align-self-end"
                          onClick={() => handleAddProductToCart(product)}
                          disabled={handleCheckProductInCart(product)}>Add to cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
}
