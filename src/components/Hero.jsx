import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Conecta, <span className="highlight">Explora</span> y Crece
          </h1>
          <p className="hero-subtitle">
            La plataforma líder para profesionales tech en Argentina. 
            Descubre oportunidades laborales, conecta con expertos y 
            acelera tu carrera profesional.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Explorar Empleos
            </button>
            <button className="btn btn-outline">
              Ver Eventos
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-text">Empleos Activos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2K+</span>
              <span className="stat-text">Profesionales</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-text">Empresas</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-header">💼</div>
            <h3>Frontend Developer</h3>
            <p>MercadoLibre • Remote</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-header">🚀</div>
            <h3>Tech Meetup</h3>
            <p>Este Sábado • CABA</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-header">👥</div>
            <h3>+50 Conectados</h3>
            <p>En los últimos 7 días</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;