import '../styles/Inicio.css';

export default function Inicio({ setCurrentSection }) {
  return (
    <div className="inicio">
      <h2 className="inicio-title">Bienvenido al Club de Emprendedores UCEMA 🚀</h2>
      <p className="inicio-description">
        Conectamos estudiantes con oportunidades, eventos, charlas y empleos relacionados al mundo emprendedor.
      </p>
      <button
        onClick={() => setCurrentSection("eventos")}
        className="inicio-button"
      >
        Explorar Eventos
      </button>

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
