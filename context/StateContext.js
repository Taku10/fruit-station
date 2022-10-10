import React,{useState, useContext, createContext} from "react";

const Context = createContext()

const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems]=useState()
    const [totalPrice, setTotalPrice]=useState()
    const [totalQuantities, setTotalQuanties]= useState()
    const [qty, setQty]= useState(1)
    
    return(
        <Context.Provider value={{showCart, cartItems, totalPrice, totalQuantities, qty}}>
            {children}
        </Context.Provider>
    )
}

export default StateContext
