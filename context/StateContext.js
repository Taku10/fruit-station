import React,{useState, useContext, createContext} from "react";
import {toast} from 'react-hot-toast'

 export const Context = createContext();

 export const StateContext = ({children}) => {
    const[showCart, setShowCart] = useState(false);
    const[cartItems, setCartItems]=useState([]);
    const[totalPrice, setTotalPrice]=useState(0);
    const[totalQuantities, setTotalQuanties]= useState(0);
    const[qty, setQty]= useState(1)

    const onAdd =(product, quantity)=>{
        const checkProduct = cartItems.find((item)=>item._id === product._id)
        setTotalPrice((prev)=> prev + product.price * quantity);
        setTotalQuanties((prev)=> prev + quantity)

        if(checkProduct){
            const updatedCartItems = cartItems.map((cartProduct)=>{
                if(cartProduct._id === product._id) return{
                  ...cartProduct,
                  quantity: cartProduct.quantity + quantity  
                }
            })
            setCartItems(updatedCartItems)
        }else{
            product.quantity = quantity;

            setCartItems([...cartItems, {...product}])
        }
        
        toast.success('Added to Cart')
    }


    const increaseQty = ()=>{
        setQty((prevQty)=> prevQty + 1)
    }

    const decreaseQty = ()=>{
        setQty((prevQty)=>{
            if(prevQty - 1 < 1 ) return 1; //keep decrementing, but not go lower than one

            return prevQty - 1;
        
        })
    }

    return(
        <Context.Provider value={{showCart, setShowCart, cartItems, totalPrice, totalQuantities, qty, increaseQty, decreaseQty, onAdd}}>
            {children}
        </Context.Provider>
    )
}



