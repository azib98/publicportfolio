// import React, { useState, useEffect } from "react";
// import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation(); // Get current route
//   const [activeLink, setActiveLink] = useState("home");

//   // Update active link based on route
//   useEffect(() => {
//     if (location.pathname === "/") setActiveLink("home");
//     else if (location.pathname === "/portfolio") setActiveLink("portfolio");
//   }, [location]);

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <BSNavbar
//       expand="lg"
//       fixed="top"
//       className={`vip-navbar ${scrolled ? "scrolled" : ""}`}
//     >
//       <Container>
//         <BSNavbar.Brand as={Link} to="/" className="vip-logo">
//           Azib Tanveer
//         </BSNavbar.Brand>
//         <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
//         <BSNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               as={Link}
//               to="/"
//               className={activeLink === "home" ? "active" : ""}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/portfolio"
//               className={activeLink === "portfolio" ? "active" : ""}
//             >
//               Portfolio
//             </Nav.Link>
//           </Nav>
//         </BSNavbar.Collapse>
//       </Container>
//     </BSNavbar>
//   );
// }

// export default Navbar;
