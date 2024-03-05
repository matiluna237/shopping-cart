
export function validationFieldName(name: string){
    const regexNameValidation = /^[a-zA-Z\s]{1,30}$/; // Nombre de hasta 30 caracteres, solo letras y espacios
    
    const nameError = {
        name: !name.match(regexNameValidation) ? 'name must have up 30 characteres' : '',
    };

    return nameError
}

export function validationFieldEmail(email: string){
    const regexEmailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Validación de email
    
    const EmailError = {
        email: !email.match(regexEmailValidation) ? 'invalid email format' : '',
    };

    return EmailError
}

export function validationFieldZipCode(zipcode: string){
    const regexZipcodeValidation = /^[0-9]{4}$/; // Validación de zipcode
    
    const ZipcodeError = {
        zipcode: !zipcode.match(regexZipcodeValidation) ? 'invalid zipcode format, must be 4 digits for postal codes in Argentina' : '',
    };

    return ZipcodeError
}



export function validationFieldAddress(address: string){
    
    const addressError = {
        address: !address ? 'address cant be empty' : ''
    };

    return addressError
}

export function validationFieldPhone(phone: string){
    const regexPhoneValidation = /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})([\s.-]?\d{1,}){1,}$/g; // Validación de phone
    
    const phoneError = {
        phone: !phone.match(regexPhoneValidation) ? 'invalid phone format' : '',
    };

    return phoneError
}
