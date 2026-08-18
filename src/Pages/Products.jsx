import React from "react";
import { ProductCard } from "../Components/ProductCard";
import { productsData } from "../Data/productsData";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";


export const Products = () => {
    return (
        <div>
            <h2 className="fw-bold ms-4">Products</h2><hr/>
            <Row className="justify-content-center px-4" >
                {productsData.map((product) => {
                    return (
                        <Col key={product.id} className="mb-4" lg={4} >
                            <ProductCard product={product} />
                        </Col>
                    )
                })}
            </Row>
            <ToastContainer />
        </div >
    )
}

