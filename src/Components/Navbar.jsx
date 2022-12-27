import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  const Nav = styled.nav`
    .navbar {
      display: flex;
      gap: 4.8rem;
    }
  `;
  return (
    <nav>
      <div className="menuIcon navbar ">
        <NavLink to="/" className="navbar">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar">
          About
        </NavLink>
        <NavLink to="/contact" className="navbar">
          Contact
        </NavLink>
        <NavLink to="/services" className="navbar">
          Services
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
