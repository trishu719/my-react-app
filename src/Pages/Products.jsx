import React from "react";
import { ProductCard } from "../Components/ProductCard";
import { productsData } from "../Data/productsData";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


export const Products = () => {
    return (
        <div>
            <h3 className="fw-bold">Products</h3>
            <Row className="justify-content-center px-4 g-4" >
                {productsData.map((product) => {
                    return (
                        <Col key={product.id} lg={4} xs={12} md={6} >
                            <ProductCard product={product} />
                        </Col>
                    )
                })}
            </Row>
            <ToastContainer />
        </div >
    )
}

