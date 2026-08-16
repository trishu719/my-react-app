import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const products = [
  {
    id: 1,
    title: "Bluetooth Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description:
      "Boat newly launched Bluetooth headphones with 80H battery backup.",
    price: "₹ 1,399",
    oldPrice: "₹ 4,990",
  },
  {
    id: 2,
    title: "The Ear Gaming Headphone",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    description:
      "Gaming headset with RGB lights, detachable mic and deep bass.",
    price: "₹ 2,599",
    oldPrice: "₹ 5,799",
  },
  {
    id: 3,
    title: "boAt Rockerz 450",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    description:
      "Wireless Bluetooth headphones with 15H battery backup.",
    price: "₹ 2,199",
    oldPrice: "₹ 3,990",
  },
];

const RBCards = () => {
  return (
    <div className="container py-3">
      <h5 className="fw-bold text-info">Cards</h5>
      <hr />

      <Row className="g-3">
        {products.map((item) => (
          <Col md={4} sm={6} key={item.id}>
            <Card className="h-100 shadow-sm border rounded-3">
              {/* Image without inline style */}
              <Card.Img
                variant="top"
                src={item.image}
                className="img-fluid rounded-top"
              />

              {/* Flex utilities to align buttons at bottom */}
              <Card.Body className="d-flex flex-column justify-content-between p-3">
                <div>
                  <Card.Title className="h6 fw-bold mb-2">
                    {item.title}
                  </Card.Title>

                  <Card.Text className="text-secondary small mb-3">
                    {item.description}
                  </Card.Text>
                </div>

                <div>
                  <div className="mb-3">
                    <span className="fw-bold h5 mb-0 me-2">{item.price}</span>
                    <del className="text-muted small">{item.oldPrice}</del>
                  </div>

                  <div className="d-flex justify-content-between gap-2">
                    <Button variant="info" size="sm" className="w-50 text-white fw-bold">
                      Buy Now
                    </Button>

                    <Button variant="outline-secondary" size="sm" className="w-50">
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RBCards;