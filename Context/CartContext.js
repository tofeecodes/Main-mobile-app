import React, {useState} from 'react'

const CartStore = React.createContext(null)

const CartContext = ({ children }) => {
    const [cartstore, setCartstore] = useState([])
    return (
        <CartStore.Provider value={[cartstore, setCartstore]}>
         {children}
        </CartStore.Provider>
    )
}

export {CartContext, CartStore}
