export default function BolsaEmpleo({ ofertas, handleJobApplication }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">💼 Bolsa de Empleo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ofertas.map((oferta, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold">{oferta.puesto}</h3>
            <p className="text-gray-600">{oferta.empresa}</p>
            <p className="mt-2">{oferta.descripcion}</p>
            <button onClick={() => handleJobApplication(oferta)} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Postularme
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
