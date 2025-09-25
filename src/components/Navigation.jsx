import { Briefcase, Calendar, Home, LogOut, Users } from "lucide-react";

export default function Navigation({ currentSection, setCurrentSection, user, logout, setShowLoginModal }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Club de Emprendedores UCEMA</h1>
      <div className="flex space-x-4">
        <button onClick={() => setCurrentSection("inicio")} className={currentSection === "inicio" ? "text-indigo-600" : "text-gray-600"}><Home className="inline w-4 h-4 mr-1" />Inicio</button>
        <button onClick={() => setCurrentSection("eventos")} className={currentSection === "eventos" ? "text-indigo-600" : "text-gray-600"}><Calendar className="inline w-4 h-4 mr-1" />Eventos</button>
        <button onClick={() => setCurrentSection("charlas")} className={currentSection === "charlas" ? "text-indigo-600" : "text-gray-600"}><Users className="inline w-4 h-4 mr-1" />Charlas</button>
        <button onClick={() => setCurrentSection("empleo")} className={currentSection === "empleo" ? "text-indigo-600" : "text-gray-600"}><Briefcase className="inline w-4 h-4 mr-1" />Bolsa de Empleo</button>
        {user && <button onClick={() => setCurrentSection("postulaciones")} className={currentSection === "postulaciones" ? "text-indigo-600" : "text-gray-600"}>📄 Mis Postulaciones</button>}
      </div>
      <div>
        {user ? (
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Hola, {user.name}</span>
            <button onClick={logout} className="text-red-500"><LogOut className="inline w-4 h-4" /></button>
          </div>
        ) : (
          <button onClick={() => setShowLoginModal(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Login / Registro</button>
        )}
      </div>
    </nav>
  );
}

