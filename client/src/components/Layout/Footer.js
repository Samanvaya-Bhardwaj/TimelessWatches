import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h1 className="text-center">
        All Right Reserved &copy; Timeless
        <span className="text-red">Watches</span>
      </h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/faq">FAQ's</Link>
      </p>
      <p className="text-center">© {currentYear} Timeless Watches</p>
    </div>
  );
};

export default Footer;