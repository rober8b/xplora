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
  { titulo: "Como hacer crecer tu marca personal? - Beltran Briones", fecha: "7/10/2025", lugar: "Auditorio UCEMA", descripcion: "Taller práctico sobre innovación.", link: "https://docs.google.com/forms/d/e/1FAIpQLSfFyfbyCRijM-oCh6BWhhb1MT3zYYtYNryaRJtDM3HQUMOgPQ/viewform?usp=dialog" },
  { titulo: "Workshop IA - Datricas", fecha: "15/10/2025", lugar: "Online", descripcion: "Explora las últimas tendencias en IA.", link: "https://docs.google.com/forms/d/e/1FAIpQLSfFyfbyCRijM-oCh6BWhhb1MT3zYYtYNryaRJtDM3HQUMOgPQ/viewform?usp=dialog" },
  { titulo: "El futuro de las Fintech - Pier Paolo", fecha: "24/10/2025", lugar: "Oficinas UALA", descripcion: "Un análisis profundo de las tendencias en Fintech.", link: "https://docs.google.com/forms/d/e/1FAIpQLSfFyfbyCRijM-oCh6BWhhb1MT3zYYtYNryaRJtDM3HQUMOgPQ/viewform?usp=dialog" },
  { titulo: "LaBitconf", fecha: "3/11/2025", lugar: "Costa Salguero", descripcion: "La conferencia más grande de Latinoamérica sobre Bitcoin y Blockchain.", link: "https://labitconf.com/" },
];

const charlasMock = [
  { titulo: "Cómo financiar tu startup", orador: "Tino Mossu", grabacion: "https://www.youtube.com/@XploraUcema", material: "https://drive.google.com/drive/home" },
  { titulo: "Marketing digital", orador: "Colorado Masivo", grabacion: "https://www.youtube.com/@XploraUcema", material: "https://drive.google.com/drive/home" },
];

const ofertasMock = [
  { puesto: "Analista de Marketing", empresa: "Startup PonziBro", descripcion: "Buscamos estudiantes de marketing digital." },
  { puesto: "Desarrollador Web", empresa: "Vibe Coding Company", descripcion: "Oportunidad para programadores juniors." },
  { puesto: "Responsable de Ventas", empresa: "Importados Dubai", descripcion: "Buscamos vendedores experimentados" },
  { puesto: "Contador", empresa: "152 Company", descripcion: "Buscamos estudiantes de contabilidad." },

];

function App() {
  const [currentSection, setCurrentSection] = useState("inicio");
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });
  const [jobApplications, setJobApplications] = useState([]);

// Login de user
  const handleLogin = async () => {
    if (!loginForm.email || !loginForm.password) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginForm),
      });

      const data = await res.json();

      if (res.ok) {
        setUser({ name: data.usuario.nombre, email: data.usuario.email });
        setShowLoginModal(false);
        setLoginForm({ email: "", password: "" });
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (err) {
      console.error(err);
      alert("No se pudo conectar con el servidor");
    }
  };

// Registracion de user
  const handleRegister = async () => {
    if (!registerForm.name || !registerForm.email || !registerForm.password) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          nombre: registerForm.name,
          email: registerForm.email,
          password: registerForm.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registro exitoso, ahora podés iniciar sesión");
        setIsRegistering(false);
        setRegisterForm({ name: "", email: "", password: "" });
      } else {
        alert(data.error || "Error al registrarse");
      }
    } catch (err) {
      console.error(err);
      alert("No se pudo conectar con el servidor");
    }
  };

// Logout de user
  const logout = () => {
    setUser(null);
    alert("Sesión cerrada");
  };

// Aplicar a empleo
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
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
        user={user} 
        logout={logout} 
        setShowLoginModal={setShowLoginModal} 
      />

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