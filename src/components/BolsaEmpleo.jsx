import '../styles/BolsaEmpleo.css';

export default function BolsaEmpleo({ ofertas, handleJobApplication }) {
  return (
    <div className="bolsa-empleo">
      <h2 className="bolsa-title">💼 Bolsa de Empleo</h2>
      <div className="ofertas-grid">
        {ofertas.map((oferta, index) => (
          <div key={index} className="oferta-card">
            <h3 className="oferta-puesto">{oferta.puesto}</h3>
            <p className="oferta-empresa">{oferta.empresa}</p>
            <p className="oferta-descripcion">{oferta.descripcion}</p>
            <button 
              onClick={() => handleJobApplication(oferta)} 
              className="oferta-btn"
            >
              Postularme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

