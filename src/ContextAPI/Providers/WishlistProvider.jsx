import React, { useReducer } from "react"
import { WishlistContext } from "../context"
import { WishlistReducer } from "../Reducers/WishlistReducer"

const initialState = {
    userId:1,
    wishlistItems:[],
};

export const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer( WishlistReducer, initialState);

    return(
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    );
};