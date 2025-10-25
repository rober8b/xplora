import '../styles/Postulaciones.css';

export default function Postulaciones({ jobApplications, setCurrentSection }) {
  return (
    <div className="postulaciones">
      <div className="postulaciones-container">
        <h2 className="postulaciones-title">📄 Mis Postulaciones</h2>
        
        {jobApplications.length > 0 ? (
          <ul className="postulaciones-list">
            {jobApplications.map((job, index) => (
              <li key={index} className="postulaciones-item">
                {job.puesto} en {job.empresa}
              </li>
            ))}
          </ul>
        ) : (
          <p className="postulaciones-empty">
            No tienes postulaciones aún. Explora la{" "}
            <button onClick={() => setCurrentSection("empleo")} className="postulaciones-link">
              Bolsa de Empleo
            </button>.
          </p>
        )}
      </div>
    </div>
  );
}
