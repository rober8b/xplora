import '../styles/CharlasPasadas.css';

export default function CharlasPasadas({ charlas }) {
  return (
    <div className="charlas-pasadas">
      <div className="charlas-container">
        <h2 className="charlas-title">🎤 Charlas Pasadas</h2>
        <div className="charlas-grid">
          {charlas.map((charla, index) => (
            <div key={index} className="charla-card">
              <h3 className="charla-titulo">{charla.titulo}</h3>
              <p className="charla-orador">Con {charla.orador}</p>
              <a href={charla.grabacion} target="_blank" rel="noopener noreferrer" className="charla-link">Ver grabación</a>
              <br />
              <a href={charla.material} target="_blank" rel="noopener noreferrer" className="charla-link">Material descargable</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
