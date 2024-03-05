import { Button, Col, ListGroup, Row, Stack } from "react-bootstrap";
import { Customer, Payment, ProductInCart, StateCart } from "../interfaces/interfaces";
//import axios from 'axios'
//import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";







export function SuccessScreen() {

  //const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

  //recupero del localStorage los datos del carrito
  const localStorageStateCart: StateCart = JSON.parse(localStorage.getItem('localStorageStateCart')!);
  const localStorageCart: ProductInCart[] = localStorageStateCart.cart;

  //recupero del localStorage los datos del customer
  const localStorageCustomer: Customer = JSON.parse(localStorage.getItem('localStorageCustomer')!);
  const localStorageDataCustomer: Customer = localStorageCustomer;

  //recupero del localStorage los datos del payment
  const localStoragePaymentInfo: Payment = JSON.parse(localStorage.getItem('localStoragePaymentInfo')!);
  const localStorageDataPayment: Payment = localStoragePaymentInfo;


    const navigate = useNavigate();
    const handleButtonReturnToStore = () => {
      
      navigate('/')
    } 


    return(
      <>
      <h1 className="text-center" style={{color: 'green'}}>Thank you for your purchase</h1>
      {localStorageCart.length == 0 && <p>no hay items en el carrito</p>}
      
      

      <ListGroup as="ol" numbered>
        
        <h1 className="text-center" style={{color: 'gray'}}>Order summary</h1>

        {localStorageCart.map((item: ProductInCart) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          key={item.id}
        >

          <Stack direction='vertical'>
            <div className="ms-2 me-auto">
              <img src={item.thumbnail} alt={item.title} style={{width: 40, height:40}} />
              <div className="fw-bold">{item.title}</div>
              <div>Price: <strong style={{color: 'green'}}>${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></div>
              <div>Quantity: {item.quantity}</div>
              <div>Subtotal: <strong style={{color: 'green'}}>${item.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></div>
            </div>        
          </Stack>
 
        </ListGroup.Item>
            
        ))}
        <div>Total: <strong style={{color: 'green'}}>${localStorageStateCart.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></div>
          
          <Row>
            <Col xs={12} md={6}>
              <section className="text-center">
              {localStorageDataPayment && (
                <>
                <h1 className="text-center" style={{color: 'gray'}}>Billing details</h1>
                <div>payment method: <strong>credit card</strong> </div>
                <div>installments: <strong>1</strong> </div>
                <div>card number: <strong>{localStorageDataPayment.cardNumber}</strong> </div>
                </>
              )}
              </section> 
            </Col>

            <Col xs={12} md={6}>
              <section className="text-center">
                <>
                <h1 className="text-center" style={{color: 'gray'}}>Shipment details</h1>
                  
                <div>customer name: <strong>{localStorageDataCustomer.name}</strong> </div>
                <div>customer address: <strong>{localStorageDataCustomer.address}</strong> </div>
                <div>customer email: <strong>{localStorageDataCustomer.email}</strong> </div>
                </>
              </section> 
            </Col>      
          </Row>

    </ListGroup>

    <div className="text-center mt-3" >
      <Button variant="outline-primary" onClick={handleButtonReturnToStore}>Return to store 
        <i className='material-icons' >shopping_bag</i>
      </Button>
    </div>
  </>
  )
    

}