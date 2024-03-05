import { create } from "zustand";
import { Product, StateCart } from "../interfaces/interfaces";



export const useCartStore = create<StateCart>((set, get) => {

    return {
        cart: [],
        total: 0,

        addProductToCart: (product: Product) => {
            const {cart, total} = get();
            
            const newProduct = {
                ...product,
                quantity: 1,
                subtotal: product.price
            };
            const newCart = [
                ...cart,
                newProduct
            ];
            
            
            set({
                cart: newCart,
                total: total + newProduct.subtotal
            });

        },

        //addQuantity
        addQuantity: (product: Product) => {
            const {cart, total} = get();
            const productInCartIndex = cart.findIndex(productInCart => productInCart.id == product.id)
            if(productInCartIndex >= 0){
                const newCart = structuredClone(cart)
                newCart[productInCartIndex].quantity++;
                newCart[productInCartIndex].subtotal = newCart[productInCartIndex].subtotal + newCart[productInCartIndex].price
                set({cart: newCart,
                    total: total + newCart[productInCartIndex].price
                })
            }
        },

        //removeQuantity
        removeQuantity: (product: Product) => {
            const {cart, total} = get();
            const productInCartIndex = cart.findIndex(productInCart => productInCart.id == product.id)
            if(productInCartIndex >= 0){
                const newCart = structuredClone(cart)
                if(newCart[productInCartIndex].quantity == 1){
                    return
                }
                newCart[productInCartIndex].quantity--;
                newCart[productInCartIndex].subtotal = newCart[productInCartIndex].subtotal - newCart[productInCartIndex].price
                set({cart: newCart,
                    total: total - newCart[productInCartIndex].price
                })
            }
        },

        //clear cart
        clearCart: () => {
            set({cart: [],
                 total: 0
            })
        },

        //checkProductInCart
        checkProductInCart: (product: Product) => {
            const {cart} = get();
            return cart.some(productInCart => productInCart.id == product.id)
        },

        //removeProductFromCart
        removeProductFromCart: (product: Product) => {
            const {cart,total} = get();
            const productToRemove = cart.find(productInCart => productInCart.id == product.id);
            if(productToRemove){
                const newtotal = total - productToRemove.subtotal;
                const newCart = cart.filter(productInCart => productInCart.id != product.id);

                set({cart: newCart,
                    total: newtotal
                })
            }
        }


    }
})



