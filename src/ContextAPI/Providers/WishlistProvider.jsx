import React, { useReducer } from "react"
import { WishlistContext } from "../context"
import { WishlistReducer } from "../Reducers/WishlistReducer"

const initialState = {
    uesrId:1,
    wishlistItems:[],
};

export const WishlistProvider = ({ Children }) => {
    const [wishlistState, wishlistDispatch] = useReducer( WishlistReducer, initialState);

    return(
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch}}>
            {Children}
        </WishlistContext.Provider>
    );
};