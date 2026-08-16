import { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { BsEnvelopeFill } from "react-icons/bs";

function RBModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container mt-5">
      <div className="fw-bold text-info fs-5">Modal</div><hr/>
      <Button variant="primary" onClick={handleShow}>
        <BsEnvelopeFill className="me-2" />
        Subscribe
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Don't miss out</h3>
            
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close" 
              onClick={handleClose}
            ></button>
          </div>

          <p className="text-muted">
            Signup for our newsletter to stay upto date.
          </p>

          <InputGroup>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
            />
            <Button variant="outline-secondary" onClick={handleClose}>
              Subscribe
            </Button>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RBModal;