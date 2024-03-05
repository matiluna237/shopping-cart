import { create } from "zustand";
import { StatePayment } from "../interfaces/interfaces";



export const usePaymentStore = create<StatePayment>((set, get) => {

    


    return {
        payment: {
            nameOnCard: 'Matías Perez',
            cardNumber: '1234-5678-9123-4567',
            expiryData: '09/28',
            securityCode: '369',
        },

        //funcion para modificar el campo nameOnCard
        changePaymentNameOnCard: (newNameOnCard: string) => {
            const {payment} = get();
            set({
                payment: {
                    nameOnCard: newNameOnCard,
                    cardNumber: payment.cardNumber,
                    expiryData: payment.expiryData,
                    securityCode: payment.securityCode, 
                }
            })
        },

        //funcion para modificar el campo cardNumber
        changePaymentCardNumber: (newCardNumber: string) => {
            const {payment} = get();
            set({
                payment: {
                    nameOnCard: payment.nameOnCard,
                    cardNumber: newCardNumber,
                    expiryData: payment.expiryData,
                    securityCode: payment.securityCode, 
                }
            })
        },

        //funcion para modificar el campo expiryDate
        changePaymentExpiryDate: (newExpiryDate: string) => {
            const {payment} = get();
            set({
                payment: {
                    nameOnCard: payment.nameOnCard,
                    cardNumber: payment.cardNumber,
                    expiryData: newExpiryDate,
                    securityCode: payment.securityCode, 
                }
            })
        },

        //funcion para modificar el campo securityCode
        changePaymentSecurityCode: (newSecurityCode: string) => {
            const {payment} = get();
            set({
                payment: {
                    nameOnCard: payment.nameOnCard,
                    cardNumber: payment.cardNumber,
                    expiryData: payment.expiryData,
                    securityCode: newSecurityCode, 
                }
            })
        },

    }
})