from flask import Flask, request, jsonify, session
from flask_cors import CORS
import json, os

app = Flask(__name__)
app.secret_key = 'clave_super_secreta'
CORS(app, supports_credentials=True) 

ARCHIVO_USUARIOS = "usuarios.json"

#cargar y guardar usuarios
def cargar_usuarios():
    if not os.path.exists(ARCHIVO_USUARIOS):
        return []
    with open(ARCHIVO_USUARIOS, "r") as f:
        return json.load(f)

def guardar_usuarios(usuarios):
    with open(ARCHIVO_USUARIOS, "w") as f:
        json.dump(usuarios, f, indent=4)


#Registro
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    nombre = data.get('nombre')
    email = data.get('email')
    password = data.get('password')

    usuarios = cargar_usuarios()

    #evitar emails repetidos
    if any(u['email'] == email for u in usuarios):
        return jsonify({"error": "El email ya está registrado"}), 400

    usuarios.append({
        "nombre": nombre,
        "email": email,
        "password": password
    })
    guardar_usuarios(usuarios)

    return jsonify({"message": "Usuario registrado correctamente"}), 201


#Login 
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    usuarios = cargar_usuarios()
    usuario = next((u for u in usuarios if u['email'] == email and u['password'] == password), None)

    if not usuario:
        return jsonify({"error": "Email o contraseña incorrectos"}), 401

    session['usuario'] = usuario
    return jsonify({"message": "Login exitoso", "usuario": usuario})


#Estado de sesion
@app.route('/usuario', methods=['GET'])
def usuario_actual():
    if 'usuario' in session:
        return jsonify(session['usuario'])
    return jsonify({"error": "No hay usuario logueado"}), 401


#Logout
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('usuario', None)
    return jsonify({"message": "Sesión cerrada"})


if __name__ == '__main__':
    app.run(debug=True)
