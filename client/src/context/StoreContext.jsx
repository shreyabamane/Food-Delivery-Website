import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(()=>{
        const savedCart = localStorage.getItem('cartItems');
        return savedCart? JSON.parse(savedCart) : {};
    });

    const url = "http://localhost:8000";

    const [token, setToken] = useState(""); //store a token in state

    const addToCart = (itemId) => {
        // if (!cartItems[itemId]) {
        //     setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        // }
        // else {
        //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        // }

        setCartItems((prev)=>{
            const updatedCart = {...prev,[itemId] : (prev[itemId] || 0) + 1};
            localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // save to localstorage
            return updatedCart;
        })
    }

    const removeFromCart = (itemId) => {
       // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

       setCartItems((prev)=> {
        const updatedCart = {...prev,[itemId]:prev[itemId]-1};
        if(updatedCart[itemId]<=0) delete updatedCart[itemId]; // remove item if quantity is zero
        localStorage.setItem('cartItems',JSON.stringify(updatedCart)); //save to local storage
        return updatedCart;
       })
    }

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item]; // Add the quantity of the current item
            }
        }
        return totalItems;
    }

    useEffect(() => {
        //If a token exists, it updates the state with the token to keep the user logged in.
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    }, [])

    const contextValue = {
        //we can access this in any components
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;