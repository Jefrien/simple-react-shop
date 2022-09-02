import { useState } from "react";

const initialState = {
    cart: [],
    orderShow: false
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id != payload.id)
        })
    }

    const toggleOrder = () => {
        setState({
            ...state,
            orderShow: !state.orderShow            
        })
    }

    return {
        state,
        addToCart,
        toggleOrder,
        removeFromCart
    }

}

export default useInitialState;