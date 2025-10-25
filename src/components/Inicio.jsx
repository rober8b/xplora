import '../styles/Inicio.css';
import logo from '../assets/logo.png'

export default function Inicio({ setCurrentSection }) {
  return (
    <div className="inicio">

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
          <img src={logo} alt="" />
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
    </div>
  );
}
