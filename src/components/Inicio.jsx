import '../styles/Inicio.css';
import logo from '../assets/logo.png'
import videoHome from '../assets/Video-Pagina-Xplora.mp4';

export default function Inicio({ setCurrentSection }) {
  return (
    <div className="inicio">
      <div className="inicio_container">

        <div className="inicio-banner_container">
          <div className="inicio-banner">
            <h2 className="inicio-title">Conectá con experiencias, descubrí oportunidades y crecé.</h2>
            <p className="inicio-description">
              Somos Xplora el club de emprendedores de la UCEMA.
            </p>
            <button
              onClick={() => setCurrentSection("eventos")}
              className="inicio-button"
            >
              Explorar Eventos
            </button>
          </div>
          <div className="inicio-banner-img">
            <img src={logo} alt="Logo Banner Xplora UCEMA" />
          </div>
        </div>

        <div className="inicio-video">
          <div className="inicio-video-title">
            <h2>Expertos que nos compartieron sus experiencias</h2>
          </div>
          <video
            autoPlay
            loop
            muted
            className="video-content"
          >
            <source src={videoHome} type="video/mp4" />
          </video>

          <div className="inicio-video_charlas">
            <h2>¿Querés ver más charlas?</h2>
            <p>Explorá nuestra sección de charlas pasadas y no te pierdas las experiencias de nuestros expertos.</p>
            <button className='evento-btn'
              onClick={() => setCurrentSection("charlas")}
            >
              Ver Charlas Pasadas
            </button>
          </div>
        </div>

        <div className="inicio-cards">
          <div className="inicio-card">
            <h3 className="card-title">🌟 Misión</h3>
            <p className="card-description">Fomentar el espíritu emprendedor en la comunidad UCEMA.</p>
          </div>
          <div className="inicio-card">
            <h3 className="card-title">🤝 Valores</h3>
            <p className="card-description">Colaboración, innovación y aprendizaje constante.</p>
          </div>
          <div className="inicio-card">
            <h3 className="card-title">📈 Impacto</h3>
            <p className="card-description">+500 estudiantes participaron en nuestras actividades.</p>
          </div>
        </div>

        <div className="inicio-jobs">
              <h2>Descubrí nuevas oportunidades laborales</h2>
              <p>Explorá nuestra bolsa de empleo y conectate con empresas que buscan talento como el tuyo.</p>
            <button
              onClick={() => setCurrentSection("empleo")}
              className="evento-btn"
            >
              Explorar Empleos
            </button>
        </div>
        
      </div>
    </div>
  );
}
