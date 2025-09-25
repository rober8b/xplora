export default function Eventos({ eventos }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">📅 Próximos Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold">{evento.titulo}</h3>
            <p className="text-gray-600">{evento.fecha} - {evento.lugar}</p>
            <p className="mt-2">{evento.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
