import '../styles/LoginModal.css';

export default function LoginModal({
  showLoginModal, setShowLoginModal,
  isRegistering, setIsRegistering,
  loginForm, setLoginForm,
  registerForm, setRegisterForm,
  handleLogin, handleRegister
}) {
  if (!showLoginModal) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <h2 className="login-modal-title">{isRegistering ? "Registro" : "Login"}</h2>
        
        {isRegistering ? (
          <div className="login-modal-form">
            <input
              type="text"
              placeholder="Nombre"
              value={registerForm.name}
              onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
              className="login-modal-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={registerForm.email}
              onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
              className="login-modal-input"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={registerForm.password}
              onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
              className="login-modal-input"
            />
            <button onClick={handleRegister} className="login-modal-button">Registrarse</button>
            <p className="login-modal-switch">
              ¿Ya tenes cuenta? <button onClick={() => setIsRegistering(false)} className="login-modal-link">Inicia sesión</button>
            </p>
          </div>
        ) : (
          <div className="login-modal-form">
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="login-modal-input"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="login-modal-input"
            />
            <button onClick={handleLogin} className="login-modal-button">Iniciar Sesión</button>
            <p className="login-modal-switch">
              ¿No tenes cuenta? <button onClick={() => setIsRegistering(true)} className="login-modal-link">Regístrate</button>
            </p>
          </div>
        )}

        <button onClick={() => setShowLoginModal(false)} className="login-modal-cancel">Cancelar</button>
      </div>
    </div>
  );
}
