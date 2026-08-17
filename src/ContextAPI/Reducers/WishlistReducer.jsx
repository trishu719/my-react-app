import { Fragment } from "react";

export const WishlistReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO-WISHLIST":
            return (
                {
                    ...state,
                    wishlistItems:[
                        {
                            id: payload.id,
                            thumbnail:payload.thumbnail,
                            title:payload.title,
                            price:payload.price,
                        }
                    ]
                }
            )

        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((item) => item.id !== payload.id)
             };
    }
};