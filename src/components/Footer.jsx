// Footer.jsx
import React from 'react';
import SocialLinks from './SocialLinks';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <SocialLinks />
      <p>© {new Date().getFullYear()} Xplora. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
