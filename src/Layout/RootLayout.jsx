import { Outlet, NavLink } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";
import { WishlistContext } from "../ContextAPI/context";
import Navigation from "../Components/Navigation";

export const RootLayout = () => {
  const { wishlistState } = useContext(WishlistContext);
  
  // Yeh wishlist items ka count track karega (1, 2, 3...)
  const wishlistItemsCount = wishlistState.wishlistItems ? wishlistState.wishlistItems.length : 0;

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#212529" : "#ffffff",
        color: darkMode ? "#ffffff" : "#212529",
        transition: "0.3s",
      }}
    >
      <Container fluid>
        {/* Top Header / Bar */}
        <div
          className="d-flex justify-content-between align-items-center px-4"
          style={{ padding: "15px 0", borderBottom: darkMode ? "1px solid #444" : "1px solid #ddd" }}
        >
          <h3>React Assignment</h3>

          <div className="d-flex align-items-center">
            {/* Wishlist Icon with Count Badge (Icon ko left adjust karne ke liye marginRight set kiya hai) */}
            <NavLink 
              to="/wishlist" 
              className="text-decoration-none position-relative"
              style={{ marginRight: "20px" }} 
            >
              <FaHeart size={22} color="red" />
              {wishlistItemsCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "10px", padding: "4px 6px" }}
                >
                  {wishlistItemsCount}
                </Badge>
              )}
            </NavLink>

            {/* Dark/Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: darkMode ? "#ffffff" : "#212529",
                color: darkMode ? "#212529" : "#ffffff",
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
        </div>

        {/* Main Content Layout with Sidebar and Outlet */}
        <Row className="mt-3">
          {/* Left Navigation / Sidebar */}
          <Col md={3}>
            <Navigation />
          </Col>
          
          {/* Right Dynamic Page Content */}
          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RootLayout;