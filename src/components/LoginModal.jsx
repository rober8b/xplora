export default function LoginModal({
  showLoginModal, setShowLoginModal,
  isRegistering, setIsRegistering,
  loginForm, setLoginForm,
  registerForm, setRegisterForm,
  handleLogin, handleRegister
}) {
  if (!showLoginModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{isRegistering ? "Registro" : "Login"}</h2>
        {isRegistering ? (
          <div>
            <input type="text" placeholder="Nombre" value={registerForm.name}
              onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
              className="w-full p-2 border rounded mb-2" />
            <input type="email" placeholder="Email" value={registerForm.email}
              onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
              className="w-full p-2 border rounded mb-2" />
            <input type="password" placeholder="Contraseña" value={registerForm.password}
              onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              className="w-full p-2 border rounded mb-2" />
            <button onClick={handleRegister} className="w-full bg-indigo-600 text-white py-2 rounded">Registrarse</button>
            <p className="mt-2 text-sm">¿Ya tienes cuenta? <button onClick={() => setIsRegistering(false)} className="text-indigo-600 underline">Inicia sesión</button></p>
          </div>
        ) : (
          <div>
            <input type="email" placeholder="Email" value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="w-full p-2 border rounded mb-2" />
            <input type="password" placeholder="Contraseña" value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full p-2 border rounded mb-2" />
            <button onClick={handleLogin} className="w-full bg-indigo-600 text-white py-2 rounded">Iniciar Sesión</button>
            <p className="mt-2 text-sm">¿No tienes cuenta? <button onClick={() => setIsRegistering(true)} className="text-indigo-600 underline">Regístrate</button></p>
          </div>
        )}
        <button onClick={() => setShowLoginModal(false)} className="mt-4 w-full text-gray-600 underline">Cancelar</button>
      </div>
    </div>
  );
}
