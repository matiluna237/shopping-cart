import { useState } from "react";
import { useCartStore } from "../store/cart"


export function useCart() {

    const [cartShow, setCartShow] = useState(false); //estado para mostrar y ocultar el carrito
    

    // funcionalidad del carrito cuyo código se encuentro en "store/cart.ts"
    const cart = useCartStore(state => state.cart)
    const clearCart = useCartStore(state => state.clearCart)
    const removeProductInCart = useCartStore(state => state.removeProductFromCart)
    const addQuantity = useCartStore(state => state.addQuantity)
    const removeQuantity = useCartStore(state => state.removeQuantity)
    const total = useCartStore(state => state.total)

    return {
        cart,
        total,
        clearCart,
        removeProductInCart,
        addQuantity,
        removeQuantity,
        
        cartShow,
        setCartShow
    }
}