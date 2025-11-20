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

def generar_id(usuarios):
    if not usuarios:
        return 1
    return max(u.get("id", 0) for u in usuarios) + 1

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

    nuevo_usuario = {
        "id": generar_id(usuarios),
        "nombre": nombre,
        "email": email,
        "password": password,
        "aplicaciones": []
    }
    usuarios.append(nuevo_usuario)
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


# Aplicar a un trabajo
@app.route('/aplicar', methods=['POST'])
def aplicar_trabajo():
    data = request.json
    id_usuario = data.get('id_usuario')
    id_trabajo = data.get('id_trabajo')

    usuarios = cargar_usuarios()
    usuario = next((u for u in usuarios if u['id'] == id_usuario), None)

    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    if id_trabajo in usuario['aplicaciones']:
        return jsonify({"error": "Ya se ha postulado a este trabajo"}), 400

    usuario['aplicaciones'].append(id_trabajo)
    guardar_usuarios(usuarios)

    return jsonify({"message": "Postulación guardada correctamente"}), 200


# Obtener aplicaciones de un usuario
@app.route('/aplicaciones/<int:id_usuario>', methods=['GET'])
def obtener_aplicaciones(id_usuario):
    usuarios = cargar_usuarios()
    usuario = next((u for u in usuarios if u['id'] == id_usuario), None)

    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    return jsonify({"aplicaciones": usuario['aplicaciones']})

# Obtener las postulaciones de un usuario con detalles
@app.route('/api/postulaciones/<int:id_usuario>', methods=['GET'])
def get_postulaciones(id_usuario):
    # Cargar usuarios y verificar si existe
    usuarios = cargar_usuarios()
    usuario = next((u for u in usuarios if u['id'] == id_usuario), None)
    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    # Cargar lista de trabajos (si la tenés en un JSON, por ejemplo 'trabajos.json')
    if not os.path.exists("trabajos.json"):
        return jsonify([])

    with open("trabajos.json", "r", encoding="utf-8") as f:
        trabajos = json.load(f)

    # Filtrar solo los trabajos que el usuario aplicó
    postulaciones = [t for t in trabajos if t["id"] in usuario["aplicaciones"]]
    return jsonify(postulaciones)

@app.route('/api/mis_postulaciones', methods=['GET'])
def mis_postulaciones():
    if 'usuario' not in session:
        return jsonify({"error": "No hay sesión activa"}), 401
    id_usuario = session['usuario']['id']
    return get_postulaciones(id_usuario)


if __name__ == '__main__':
    app.run(debug=True)
