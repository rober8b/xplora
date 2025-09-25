export default function Inicio({ setCurrentSection }) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">Bienvenido al Club de Emprendedores UCEMA 🚀</h2>
      <p className="text-gray-700 mb-6">
        Conectamos estudiantes con oportunidades, eventos, charlas y empleos relacionados al mundo emprendedor.
      </p>
      <button
        onClick={() => setCurrentSection("eventos")}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
      >
        Explorar Eventos
      </button>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">🌟 Misión</h3>
          <p className="text-gray-600">Fomentar el espíritu emprendedor en la comunidad UCEMA.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">🤝 Valores</h3>
          <p className="text-gray-600">Colaboración, innovación y aprendizaje constante.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">📈 Impacto</h3>
          <p className="text-gray-600">+500 estudiantes participaron en nuestras actividades.</p>
        </div>
      </div>
    </div>
  );
}
