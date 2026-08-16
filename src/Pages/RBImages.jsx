import React from "react";
import { Row, Col } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

const RBImages = () => {
  const avatarStyle = {
    backgroundColor: "#e97b87",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  return (
    <div>
        <div className="fw-bold text-info">Images</div>< hr/>
      <Row>
        {/* Avatar With Name */}
        <Col md={4}>
          <h5 className="mb-3">Avatar With Name</h5>

          <div className="d-flex align-items-center mb-3">
            <div
              style={{
                ...avatarStyle,
                width: "40px",
                height: "40px",
              }}
            >
              <PersonFill size={20} />
            </div>

            <span className="ms-2">Radhika Parmar</span>
          </div>

          <div className="d-flex align-items-center">
            <div
              style={{
                ...avatarStyle,
                width: "40px",
                height: "40px",
              }}
            >
              <PersonFill size={20} />
            </div>

            <span className="ms-2">Rajkumar Jadeja</span>
          </div>
        </Col>

        {/* Avatar Sizes */}
        <Col md={4}>
          <h5 className="mb-3">Avatar Sizes</h5>

          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                ...avatarStyle,
                width: "24px",
                height: "24px",
              }}
            >
              <PersonFill size={12} />
            </div>

            <div
              style={{
                ...avatarStyle,
                width: "32px",
                height: "32px",
              }}
            >
              <PersonFill size={16} />
            </div>

            <div
              style={{
                ...avatarStyle,
                width: "42px",
                height: "42px",
              }}
            >
              <PersonFill size={20} />
            </div>

            <div
              style={{
                ...avatarStyle,
                width: "55px",
                height: "55px",
              }}
            >
              <PersonFill size={28} />
            </div>

            <div
              style={{
                ...avatarStyle,
                width: "68px",
                height: "68px",
              }}
            >
              <PersonFill size={34} />
            </div>
          </div>
        </Col>

        {/* Avatar Group */}
        <Col md={4}>
          <h5 className="mb-3">Avatar Group</h5>

          <div className="d-flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                style={{
                  ...avatarStyle,
                  width: "40px",
                  height: "40px",
                  marginLeft: item === 1 ? "0" : "-12px",
                  border: "2px solid white",
                }}
              >
                <PersonFill size={20} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RBImages;