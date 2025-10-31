import { useEffect, useState } from "react";
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
  { 
    titulo: "Como crecer tu marca personal? - Beltran Briones", 
    fecha: "7/10/2025", 
    lugar: "Auditorio UCEMA", 
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2128281121727!2d-58.3775333184397!3d-34.5987793874883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb469661bd%3A0x2ac4587e06277646!2sC1003ABO%2C%20Reconquista%20775%2C%20C1003ABO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761827775370!5m2!1ses-419!2sar", 
    descripcion: "Taller práctico sobre innovación.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFyfbyCRijM-oCh6BWhhb1MT3zYYtYNryaRJtDM3HQUMOgPQ/viewform?usp=dialog" 
  },
  { 
    titulo: "Workshop IA - Datricas", 
    fecha: "15/10/2025", 
    lugar: "UCEMA AULA 4A", 
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.216692444106!2d-58.37492212452488!3d-34.59868165723179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb40d06165%3A0xa29e8d640eb1ba4f!2sUniversidad%20del%20CEMA!5e0!3m2!1ses-419!2sar!4v1761827650831!5m2!1ses-419!2sar", 
    descripcion: "Explora las últimas tendencias en IA.", 
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFyfbyCRijM-oCh6BWhhb1MT3zYYtYNryaRJtDM3HQUMOgPQ/viewform?usp=dialog" 
  },
  { 
    titulo: "El futuro de las Fintech - Pier Paolo", 
    fecha: "24/10/2025", 
    lugar: "Oficinas UALA", 
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.65999994615!2d-58.42835742452547!3d-34.58746865663989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb50a167e242f%3A0xfdd07550880e7071!2sOficinas%20de%20Uala!5e0!3m2!1ses-419!2sar!4v1761827851299!5m2!1ses-419!2sar",
    descripcion: "Un análisis profundo de las tendencias en Fintech.", 
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfFyfbyCRijM-oCh6BWhhb1MT3zYYtYNryaRJtDM3HQUMOgPQ/viewform?usp=dialog" 
  },
  { titulo: "LaBitconf", 
    fecha: "3/11/2025", 
    lugar: "Costa Salguero", 
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.3476385596737!2d-58.39940902452635!3d-34.57006925572132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb56874c4ea2b%3A0x11d4f4fa3927de9e!2sCosta%20Salguero%20Pabell%C3%B3n%203!5e0!3m2!1ses-419!2sar!4v1761827922765!5m2!1ses-419!2sar", 
    descripcion: "La conferencia más grande de Bitcoin y Blockchain.", 
    link: "https://labitconf.com/" 
  },
];

const charlasMock = [
  { titulo: "Cómo financiar tu startup", orador: "Tino Mossu", grabacion: "https://www.youtube.com/@XploraUcema", material: "https://drive.google.com/drive/home" },
  { titulo: "Marketing digital", orador: "Colorado Masivo", grabacion: "https://www.youtube.com/@XploraUcema", material: "https://drive.google.com/drive/home" },
];

const ofertasMock = [
  { id: 1, puesto: "Analista de Marketing", empresa: "Startup PonziBro", descripcion: "Buscamos estudiantes de marketing digital." },
  { id: 2, puesto: "Desarrollador Web", empresa: "Vibe Coding Company", descripcion: "Oportunidad para programadores juniors." },
  { id: 3, puesto: "Responsable de Ventas", empresa: "Importados Dubai", descripcion: "Buscamos vendedores experimentados" },
  { id: 4, puesto: "Contador", empresa: "152 Company", descripcion: "Buscamos estudiantes de contabilidad." },

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
        setUser({ name: data.usuario.nombre, email: data.usuario.email, id: data.usuario.id });
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
      console.log("User applying:", user);
      console.log("Job offer:", oferta);
      fetch("http://127.0.0.1:5000/aplicar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id_usuario: user.id,
          id_trabajo: oferta.id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setJobApplications([...jobApplications, oferta]);
            alert(`Te postulaste a: ${oferta.puesto}`);
          } else {
            alert(data.error || "Error al postularse");
          }
        })
        .catch((err) => {
          console.error(err);
          alert("No se pudo conectar con el servidor");
        });
    } else {
        setShowLoginModal(true);
    }
  };

  useEffect(() => {
    console.log("User:", user);
    if (user?.nombre) {
      // Fetch job applications for the user
      const fetchApplications = async () => {
        try {
          const res = await fetch(`http://127.0.0.1:5000/aplicaciones/${user.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });

          const data = await res.json();

          if (res.ok) {
            setJobApplications(data.aplicaciones);
          } else {
            alert(data.error || "Error al obtener postulaciones");
          }
        } catch (err) {
          console.error(err);
          alert("No se pudo conectar con el servidor");
        }
      };

      fetchApplications();
    }
  }, [user]);


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