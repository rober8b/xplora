export default function Postulaciones({ jobApplications, setCurrentSection }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">📄 Mis Postulaciones</h2>
      {jobApplications.length > 0 ? (
        <ul className="list-disc list-inside">
          {jobApplications.map((job, index) => (
            <li key={index}>{job.puesto} en {job.empresa}</li>
          ))}
        </ul>
      ) : (
        <p>No tienes postulaciones aún. Explora la <button onClick={() => setCurrentSection("empleo")} className="text-indigo-600 underline">Bolsa de Empleo</button>.</p>
      )}
    </div>
  );
}
