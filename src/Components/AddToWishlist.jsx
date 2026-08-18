import React, { useContext } from "react";
import { WishlistContext } from "../ContextAPI/context";
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import { toast } from "react-toastify";

export const AddToWishlist = ({ product }) => {
    const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

    const found = wishlistState.wishlistItems.some((item) => item.id === product.id);

    const handleAddToWishlist = () => {
        if (found) {
            toast.error("This item already exist in your wishlist");
        }
        else {
            wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
            });
        }
    };
    return (
        <Button
          variant="outline-success"
          size="sm"
          onClick={handleAddToWishlist}
          >Add To Wishlist
            {found ? <Check /> : ""}
          </Button>
    );
};