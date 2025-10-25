import { Briefcase, Calendar, Home, LogOut, Users } from "lucide-react";
import '../styles/Navigation.css';
import logo from '../assets/logo.png';

export default function Navigation({ currentSection, setCurrentSection, user, logout, setShowLoginModal }) {
  return (
    <nav className="nav-bar">
      <div className="nav-bar_container">
        <img className="nav-logo" src={logo} alt="Xplora Logo" />

        <div className="nav-links">
          <button 
            onClick={() => setCurrentSection("inicio")} 
            className={currentSection === "inicio" ? "active" : ""}
          >
            <Home className="icon" />Inicio
          </button>

          <button 
            onClick={() => setCurrentSection("eventos")} 
            className={currentSection === "eventos" ? "active" : ""}
          >
            <Calendar className="icon" />Eventos
          </button>

          <button 
            onClick={() => setCurrentSection("charlas")} 
            className={currentSection === "charlas" ? "active" : ""}
          >
            <Users className="icon" />Charlas
          </button>

          <button 
            onClick={() => setCurrentSection("empleo")} 
            className={currentSection === "empleo" ? "active" : ""}
          >
            <Briefcase className="icon" />Bolsa de Empleo
          </button>

          {user && (
            <button 
              onClick={() => setCurrentSection("postulaciones")} 
              className={currentSection === "postulaciones" ? "active" : ""}
            >
              📄 Mis Postulaciones
            </button>
          )}
        </div>

        <div className="nav-user">
          {user ? (
            <div className="user-info">
              <span>Hola, {user.name}</span>
              <button onClick={logout}><LogOut className="icon" /></button>
            </div>
          ) : (
            <button onClick={() => setShowLoginModal(true)} className="login-btn">Login / Registro</button>
          )}
        </div>
      </div>
    </nav>
  );
}
