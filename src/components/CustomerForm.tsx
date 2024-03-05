import React, { useState } from "react";
import { Button, Card, FloatingLabel, Form, InputGroup, Row, Spinner, Stack } from "react-bootstrap";
import { validationFieldAddress, validationFieldEmail, validationFieldName, validationFieldPhone, validationFieldZipCode } from "../validations/validations";
import { useNavigate } from "react-router";
import { useCartStore } from "../store/cart";


import { useCustomer } from "../customHooks/useCustomer";








export function CustomerForm() {



    const {customer,
           changeCustomerName,
           changeCustomerEmail,
           changeCustomerZipcode,
           changeCustomerAddress,
           changeCustomerPhone} = useCustomer()



    const stateCart = useCartStore(state => state)
    


    const [handleSubmitButtonTouch, setHandleSubmitButtonTouch] = useState(false)


    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        zipcode: '',
        address: '',
        phone: ''
    });

    

   
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        changeCustomerName(event.target.value);

        const nameError = validationFieldName(event.target.value)
        if(nameError){
            setErrors({
                ...errors,
                name: nameError.name
            })
        }
    }


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        changeCustomerEmail(event.target.value);

        const emailError = validationFieldEmail(event.target.value)
        if(emailError){
            setErrors({
                ...errors,
                email: emailError.email
            })
        }
    }


    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        changeCustomerZipcode(event.target.value)

        const zipcodeError = validationFieldZipCode(event.target.value)
        if(zipcodeError){
            setErrors({
                ...errors,
                zipcode: zipcodeError.zipcode
            })
        }
    }


    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        changeCustomerAddress(event.target.value);

        const addressError = validationFieldAddress(event.target.value)
        if(addressError){
            setErrors({
                ...errors,
                address: addressError.address
            })
        }
    }


    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        changeCustomerPhone(event.target.value);

        const phoneError = validationFieldPhone(event.target.value)
        if(phoneError){
            setErrors({
                ...errors,
                phone: phoneError.phone
            })
        }
    }

    const handleNavigateToSelectedProducts = () => {
        navigate('/selected-products')
    }





    //submit
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent) => {
        //setHandleSubmitTouch(true)
        event.preventDefault()
        
        
        const nameError = validationFieldName(customer.name)
        const emailError = validationFieldEmail(customer.email)
        const addressError = validationFieldAddress(customer.address)
        const phoneError = validationFieldPhone(customer.phone)
        const zipcodeError = validationFieldZipCode(customer.zipcode)
        
        //verificar si hay errores
        if( nameError.name != '' || emailError.email != '' || addressError.address != '' || phoneError.phone != '' || zipcodeError.zipcode != '' ){
            setErrors({
                ...errors,
                name: nameError.name,
                email: emailError.email,
                zipcode: zipcodeError.zipcode,
                address: addressError.address,
                phone: phoneError.phone
            });
        }else{
            //almaceno en el localStorage "arrayItems"
            localStorage.setItem('localStorageStateCart', JSON.stringify(stateCart))
            localStorage.setItem('localStorageCustomer', JSON.stringify(customer))
           navigate(`/payment-form`);
            
        }
    }


    
    return(
        <Row xs={1} md={3} lg={12} className="g-2">
            <Card className="mx-auto mt-4" style={{ width: '30rem', padding: '15px' }}>
                
                <Stack direction="horizontal" gap={5}>
                <Button variant='link' onClick={handleNavigateToSelectedProducts}>
                    <i className='material-icons' >arrow_back</i>
                </Button>
                <Card.Title className="text-center">Customer information</Card.Title>
                </Stack>

                
                <Card.Body>
                <form action="" onSubmit={handleSubmit}>
                    
                    <FloatingLabel controlId="floatingInput" label="Customer name" className="mb-3">
                        <Form.Control type="text" name="name" value={customer.name} onChange={handleNameChange} />
                    </FloatingLabel>
                    {errors.name && <div className="text-danger">{errors.name}</div>}

                    <FloatingLabel controlId="floatingInput" label="Customer email" className="mb-3">
                        <Form.Control type="text" name="email" value={customer.email} onChange={handleEmailChange} />
                    </FloatingLabel>
                    {errors.email && <div className="text-danger">{errors.email}</div>}

                    <InputGroup>
                        <FloatingLabel controlId="floatingInput" label="Customer zip code" className="mb-3">
                            <Form.Control type="text" name="zipcode" value={customer.zipcode} onChange={handleZipCodeChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Customer address" className="mb-3">
                            <Form.Control type="text" name="address" value={customer.address} onChange={handleAddressChange} />
                        </FloatingLabel>
                    </InputGroup>
                    {errors.zipcode && <div className="text-danger">{errors.zipcode}</div>}
                    {errors.address && <div className="text-danger">{errors.address}</div>}

                    <FloatingLabel controlId="floatingInput" label="Customer phone" className="mb-3">
                        <Form.Control type="text" name="phone" value={customer.phone} onChange={handlePhoneChange} />
                    </FloatingLabel>
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    
                </form>
                </Card.Body>
                
                    <Button className="mt-3"
                            type="button"
                            onClick={handleSubmit}>
                            Continue with the payment
                            {handleSubmitButtonTouch == true &&
                                <Spinner  animation="border" />
                            }
                    </Button>
                
            </Card>
            
        </Row>
        
    )
} 

