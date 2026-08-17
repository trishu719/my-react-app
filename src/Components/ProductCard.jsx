import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { WishlistContext } from "../ContextAPI/context";
import { AddToWishlist } from "./AddToWishlist";

export const ProductCard = ({ product }) => {
    return (
        <Card style={{ width: '16rem' }} className="h-100">
            <Card.Img variant="top" src={product.thumbnail}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="mt-auto d-flex gap-3">
                    <AddToWishlist product={product} />
                    <Button variant="outline-primary" size="sm">Add To Cart</Button>
                </div>
            </Card.Body>
        </Card>
    )
}