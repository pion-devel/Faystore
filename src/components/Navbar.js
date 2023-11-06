// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.products.cartCount);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Carello ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
