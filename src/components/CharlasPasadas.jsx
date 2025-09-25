export default function CharlasPasadas({ charlas }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">🎤 Charlas Pasadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {charlas.map((charla, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold">{charla.titulo}</h3>
            <p className="text-gray-600">Con {charla.orador}</p>
            <a href={charla.grabacion} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Ver grabación</a>
            <br />
            <a href={charla.material} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Material descargable</a>
          </div>
        ))}
      </div>
    </div>
  );
}
