import { useCustomerStore } from "../store/customer"



export function useCustomer() {
    
    const customer = useCustomerStore(state => state.customer)
    const changeCustomerName = useCustomerStore(state => state.changeCustomerName)
    const changeCustomerEmail = useCustomerStore(state => state.changeCustomerEmail)
    const changeCustomerZipcode = useCustomerStore(state => state.changeCustomerZipcode)
    const changeCustomerAddress = useCustomerStore(state => state.changeCustomerAddress)
    const changeCustomerPhone = useCustomerStore(state => state.changeCustomerPhone)

    return {
        customer,
        changeCustomerName,
        changeCustomerEmail,
        changeCustomerZipcode,
        changeCustomerAddress,
        changeCustomerPhone
    }
}