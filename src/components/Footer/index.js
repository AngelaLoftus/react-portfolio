import React from 'react';
import "./style.css";

const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
          <div className="container">
            &copy;{new Date().getFullYear()} by Angela Loftus
          </div>
          <div>
            
          </div>
        </footer>
      );
};

export default Footer;