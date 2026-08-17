import React from "react";
import { ProductCard } from "../Components/ProductCard";
import { productsData } from "../Data/productsData";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


export const Products = () => {
    return (
        <div>
            <h3 className="fw-bold">Products</h3>
            <Row className="justify-content-center px-4" >
                {productsData.map((product) => {
                    return (
                        <Col key={product.id} className="mb-4" lg={3}>
                            <ProductCard product={product} />
                        </Col>
                    )
                })}
            </Row>
            <ToastContainer />
        </div >
    )
}

