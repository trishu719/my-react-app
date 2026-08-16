import { Outlet, NavLink } from "react-router-dom";
import React,{ useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import Navigation from "../Components/Navigation";
import { Badge } from "react-bootstrap";


export const RootLayout = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode
          ? "#212529"
          : "#ffffff",
        color: darkMode
          ? "#ffffff"
          : "#212529",
        transition: "0.3s",
      }}
    >
      <Container>
        <div                                                 
          className="d-flex justify-content-between align-items-center"
          style={{
            padding: "15px 0",
          }}
        >
          <h3>
            React Assignment
          </h3>
          
          <button
            onClick={toggleTheme}
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              border: "none",

              backgroundColor: darkMode
                ? "#ffffff"
                : "#212529",

              color: darkMode
                ? "#212529"
                : "#ffffff",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              cursor: "pointer",
            }}
          >

            {darkMode ? (
              <FaSun size={14} />
            ) : (
              <FaMoon size={14} />
            )}

          </button>

        </div>


        <Row>

          {/* Left Accordion / Navigation */}

          <Col md={3}>
            <Navigation />
          </Col>


          {/* Right Page */}

          <Col md={9}>

            <Outlet />

          </Col>

        </Row>

      </Container>

    </div>
  );
};
                                                              