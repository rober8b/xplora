import { useState } from "react";
import Navigation from "./components/Navigation";
import Inicio from "./components/Inicio";
import Eventos from "./components/Eventos";
import CharlasPasadas from "./components/CharlasPasadas";
import BolsaEmpleo from "./components/BolsaEmpleo";
import Postulaciones from "./components/Postulaciones";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";

// 🔹 Datos simulados
const eventosMock = [
  { titulo: "Workshop Design Thinking", fecha: "10/10/2023", lugar: "Auditorio UCEMA", descripcion: "Taller práctico sobre innovación." },
  { titulo: "Networking Emprendedor", fecha: "15/10/2023", lugar: "Online", descripcion: "Conectá con otros emprendedores." },
];

const charlasMock = [
  { titulo: "Cómo financiar tu startup", orador: "María López", grabacion: "#", material: "#" },
  { titulo: "Marketing digital", orador: "Juan Pérez", grabacion: "#", material: "#" },
];

const ofertasMock = [
  { puesto: "Analista de Marketing", empresa: "Startup X", descripcion: "Buscamos estudiante para marketing digital." },
  { puesto: "Desarrollador Web", empresa: "Tech UCEMA", descripcion: "Oportunidad para programadores juniors." },
];

function App() {
  const [currentSection, setCurrentSection] = useState("inicio");
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });
  const [jobApplications, setJobApplications] = useState([]);

  const handleLogin = () => {
    if (loginForm.email && loginForm.password) {
      setUser({ name: "Usuario", email: loginForm.email });
      setShowLoginModal(false);
      setLoginForm({ email: "", password: "" });
    } else {
      alert("Completa todos los campos");
    }
  };

  const handleRegister = () => {
    if (registerForm.name && registerForm.email && registerForm.password) {
      setUser({ name: registerForm.name, email: registerForm.email });
      setShowLoginModal(false);
      setRegisterForm({ name: "", email: "", password: "" });
    } else {
      alert("Completa todos los campos");
    }
  };

  const logout = () => setUser(null);

  const handleJobApplication = (oferta) => {
    if (user) {
      setJobApplications([...jobApplications, oferta]);
      alert(`Te postulaste a: ${oferta.puesto}`);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <div className="Landing-Page">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} user={user} logout={logout} setShowLoginModal={setShowLoginModal} />

      <main>
        {currentSection === "inicio" && <Inicio setCurrentSection={setCurrentSection} />}
        {currentSection === "eventos" && <Eventos eventos={eventosMock} />}
        {currentSection === "charlas" && <CharlasPasadas charlas={charlasMock} />}
        {currentSection === "empleo" && <BolsaEmpleo ofertas={ofertasMock} handleJobApplication={handleJobApplication} />}
        {currentSection === "postulaciones" && <Postulaciones jobApplications={jobApplications} setCurrentSection={setCurrentSection} />}
      </main>

      <Footer />

      <LoginModal
        showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}
        isRegistering={isRegistering} setIsRegistering={setIsRegistering}
        loginForm={loginForm} setLoginForm={setLoginForm}
        registerForm={registerForm} setRegisterForm={setRegisterForm}
        handleLogin={handleLogin} handleRegister={handleRegister}
      />
    </div>
  );
}

export default App;