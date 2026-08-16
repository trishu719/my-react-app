import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import { Facebook,Instagram,Youtube,TwitterX,Linkedin, } from "react-bootstrap-icons";

const RBListGroup = () => {
    return (
        <div>
            <div className="fw-bold text-info">List Group</div><hr />
            <div className="container mt-5 d-flex justify-content-center">
                <Card style={{ width: "24rem" }}>
                    <Card.Body>
                        <Card.Title className="fw-bold fs-4">
                            Social Media Traffic
                        </Card.Title>

                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>
                                    <Facebook className="text-primary me-2" />
                                    Facebook
                                </span>
                                <span>20%</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>
                                    <Instagram className="text-info me-2" />
                                    Instagram
                                </span>
                                <span>20%</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>
                                    <Youtube className="text-primary me-2" />
                                    YouTube
                                </span>
                                <span>20%</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>
                                    <TwitterX className="text-info me-2" />
                                    TwitterX
                                </span>
                                <span>20%</span>
                            </ListGroup.Item>

                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <span>
                                    <Linkedin className="text-primary me-2" />
                                    LinkedIn
                                </span>
                                <span>20%</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default RBListGroup