import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} By Davin RPl</p>
    </footer>
  );
};

export default Footer;