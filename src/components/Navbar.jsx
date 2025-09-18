import React from 'react';
import SocialLinks from './SocialLinks';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Xplora</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#events">Eventos</a></li>
        <li><a href="#jobs">Bolsa de Empleo</a></li>
        <li><a href="#community">Comunidad</a></li>
        <li><a href="#team">Equipo</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn create-account">Crear Cuenta</button>
      </div>
      <SocialLinks />
    </nav>
  );
}

export default Navbar;
