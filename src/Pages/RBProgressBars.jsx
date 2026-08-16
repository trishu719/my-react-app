import React, { useState } from "react";
import { ProgressBar, Card, Row, Col, Form } from "react-bootstrap";

const RBProgressBars = () => {
  const [redProgress, setRedProgress] = useState(40);
  const [greenProgress, setGreenProgress] = useState(70);

  return (
    <div className="container py-3">
      <div className="fw-bold text-info fs-5">Progress Bars</div>
      <hr />

      {/* Red Progress Bar Section */}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-2">
          <label className="fw-bold text-danger mb-0" style={{ minWidth: "120px" }}>
            Red Progress:
          </label>
          <Form.Control
            type="number"
            min="0"
            max="100"
            value={redProgress}
            onChange={(e) =>
              setRedProgress(Math.min(100, Math.max(0, Number(e.target.value))))
            }
            style={{ width: "90px" }}
            size="sm"
          />
          <span className="fw-semibold">%</span>
        </div>

        {/* Interactive Range Slider */}
        <Form.Range
          value={redProgress}
          onChange={(e) => setRedProgress(Number(e.target.value))}
          className="mb-2"
        />

        {/* Dynamic Red Bar */}
        <ProgressBar
          variant="danger"
          now={redProgress}
          label={`${redProgress}%`}
          style={{ height: "22px" }}
        />
      </div>

      {/* Green Progress Bar Section */}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-2">
          <label className="fw-bold text-success mb-0" style={{ minWidth: "120px" }}>
            Green Progress:
          </label>
          <Form.Control
            type="number"
            min="0"
            max="100"
            value={greenProgress}
            onChange={(e) =>
              setGreenProgress(Math.min(100, Math.max(0, Number(e.target.value))))
            }
            style={{ width: "90px" }}
            size="sm"
          />
          <span className="fw-semibold">%</span>
        </div>

        {/* Interactive Range Slider */}
        <Form.Range
          value={greenProgress}
          onChange={(e) => setGreenProgress(Number(e.target.value))}
          className="mb-2"
        />

        {/* Dynamic Green Bar */}
        <ProgressBar
          variant="success"
          now={greenProgress}
          label={`${greenProgress}%`}
          style={{ height: "22px" }}
        />
      </div>

      <hr className="my-4" />

      {/* Bottom Card Section */}
      <Row>
        <Col md={6}>
          <Card className="shadow-sm border rounded-3">
            <Card.Header className="bg-info text-white fw-bold">
              Progress Status Card
            </Card.Header>
            <Card.Body>
              <Card.Title className="h6 fw-bold mb-3">
                Current Performance Summary
              </Card.Title>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>Critical Risk (Red)</span>
                  <span className="fw-bold text-danger">{redProgress}%</span>
                </div>
                <ProgressBar variant="danger" now={redProgress} size="sm" />
              </div>

              <div>
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>Task Completion (Green)</span>
                  <span className="fw-bold text-success">{greenProgress}%</span>
                </div>
                <ProgressBar variant="success" now={greenProgress} size="sm" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RBProgressBars;