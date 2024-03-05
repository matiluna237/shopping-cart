import { Button, Card, FloatingLabel, Form, InputGroup, Row, Spinner, Stack } from "react-bootstrap";
import { useCartStore } from "../store/cart";
import { useNavigate } from "react-router";
import { usePaymentStore } from "../store/payment";
import { useState } from "react";


export function PaymentForm() {

    const total = useCartStore(state => state.total);

    const payment = usePaymentStore(state => state.payment)
    const changePaymentNameOnCard = usePaymentStore(state => state.changePaymentNameOnCard)
    const changePaymentCardNumber = usePaymentStore(state => state.changePaymentCardNumber)
    const changePaymentExpiryDate = usePaymentStore(state => state.changePaymentExpiryDate)
    const changePaymentSecurityCode = usePaymentStore(state => state.changePaymentSecurityCode)

    const clearCart = useCartStore(state => state.clearCart)

    const [loading, setLoading] = useState(false)



    const handleNameOnCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePaymentNameOnCard(event.target.value);
    }

    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePaymentCardNumber(event.target.value);
    }

    const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePaymentExpiryDate(event.target.value);
    }


    const handleSecurityCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePaymentSecurityCode(event.target.value);
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        event?.preventDefault();
        clearCart()
        localStorage.setItem('localStoragePaymentInfo', JSON.stringify(payment))
        setLoading(true)

        setTimeout(() => {
            navigate('/success-screen')
        },2000)
        
    }


    const handleNavigateToCustomerForm= () => {
        navigate('/customer-form')
    }

    return(
        <Row xs={1} md={3} lg={12} className="g-2">
            <Card className="mx-auto mt-4" style={{ width: '30rem', padding: '15px' }}>
                
            <Stack direction="horizontal" gap={5}>
                <Button variant='link' onClick={handleNavigateToCustomerForm}>
                <i className='material-icons' >arrow_back</i>
                </Button>
                <Card.Title className="text-center">Payment details</Card.Title>
            </Stack>

            <Stack direction='horizontal' className='m-3'>
                    <label className="fw-bold me-1">Payment amount:</label>
                    <div style={{color: 'green'}}>${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </Stack>
            
            <Card.Body>
            <form action="" onSubmit={handleSubmit}>
                
                <FloatingLabel controlId="floatingInput" label="Name on card" className="mb-3">
                    <Form.Control type="text" name="nameOnCard" value={payment.nameOnCard} onChange={handleNameOnCardChange} />
                </FloatingLabel>


                <FloatingLabel controlId="floatingInput" label="Card number" className="mb-3">
                    <Form.Control type="text" name="cardNumber" value={payment.cardNumber} onChange={handleCardNumberChange} />
                </FloatingLabel>


                <InputGroup>
                    <FloatingLabel controlId="floatingInput" label="Expiry date" className="mb-3">
                        <Form.Control type="text" name="expiryDate" value={payment.expiryData} onChange={handleExpiryDateChange} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Security code" className="mb-3">
                        <Form.Control type="text" name="securityCode" value={payment.securityCode} onChange={handleSecurityCodeChange} />
                    </FloatingLabel>
                </InputGroup>




                <Button className="mt-3" type="submit">
                 Pay ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                {loading &&
                    <Spinner  animation="border" className="ms-2" style={{height:20, width:20}}/>
                }
                </Button>
            </form>
            </Card.Body>
            </Card>
        </Row>
    )
}