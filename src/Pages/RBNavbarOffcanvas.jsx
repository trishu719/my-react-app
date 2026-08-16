import { useState } from "react";
import {Navbar,Container,Nav,NavDropdown,Button,Offcanvas,} from "react-bootstrap";
import {BsGeoAlt,BsEnvelope,BsTelephone,} from "react-icons/bs";

function RBNavbarOffcanvas() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-3 mt-2">
      <h3 className="fw-bold text-info fs-5">Navbar with Offcanvas</h3>
      <hr />
      <Navbar bg="white" expand="lg" className="border shadow-sm mt-3">
        <Container>

          <Navbar.Brand
            className="bg-dark text-white px-3 py-2 fw-bold rounded"
          >
            RB
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />

          <Navbar.Collapse id="navbar">

            <Nav className="me-auto">

              <Nav.Link href="#">Home</Nav.Link>

              <Nav.Link href="#">Services</Nav.Link>

              <NavDropdown title="Company">

                <NavDropdown.Item href="#">
                  About Us
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  Our Team
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  Infrastructure
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#">
                  Testimonials
                </NavDropdown.Item>

              </NavDropdown>

            </Nav>

            <div className="d-flex gap-2">

              <Button variant="primary">
                Login
              </Button>

              <Button variant="outline-primary">
                Sign Up
              </Button>

              <Button
                variant="dark"
                onClick={() => setShow(true)}
              >
                Contact
              </Button>

            </div>

          </Navbar.Collapse>

        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
      >
        <Offcanvas.Body>
    
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0 fw-bold">Contact Us</h5>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close" 
              onClick={() => setShow(false)}
            ></button>
          </div>

          <h3 className="fw-bold">
            We are here to help you!
          </h3>

          <hr />

          <h5 className="fw-bold">
            Indixpert
          </h5>

          <br />

          <p>
            <BsGeoAlt /> <b>Our Offices :</b>
            <br />
            1. Hyderabad, Telangana, India
            <br />
            2. Gurugram, Haryana, India
          </p>

          <p>
            <BsEnvelope /> <b>Email</b>
            <br />
            contact@indixpert.com
          </p>

          <p>
            <BsTelephone /> <b>Phone</b>
            <br />
            (+91) 778 899 2897
          </p>

        </Offcanvas.Body>

      </Offcanvas>
    </div>
  );
}

export default RBNavbarOffcanvas;