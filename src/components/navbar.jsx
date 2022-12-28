import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home  </Link>
        <Link to="/login">login </Link>
        <Link to="/Signup"> Signup </Link>
        <Link to="/cart">
        <Link to="/Balance"> Balance </Link>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
