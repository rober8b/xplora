import '../styles/Eventos.css';

export default function Eventos({ eventos }) {
  return (
    <div className="eventos">
      <h2 className="eventos-title">📅 Próximos Eventos</h2>
      <div className="eventos-grid">
        {eventos.map((evento, index) => (
          <div key={index} className="evento-card">
            <h3 className="evento-titulo">{evento.titulo}</h3>
            <p className="evento-info">{evento.fecha} - {evento.lugar}</p>
            <p className="evento-descripcion">{evento.descripcion}</p>
            <button 
              onClick={() => window.open(evento.link, "_blank")}
              className="evento-btn"
            >
              Inscribirme
            </button>
            <img src={evento.imagen} alt={evento.titulo} className="evento-imagen" />
          </div>
        ))}
      </div>
    </div>
  );
}
