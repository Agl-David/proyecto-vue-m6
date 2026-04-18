# 📚 Proyecto Final - Gestión de Cursos (Vue 3)

## 🚀 Descripción

Aplicación web desarrollada con Vue 3 que permite la gestión de cursos y categorías, incluyendo autenticación de usuarios.

---

## 🎯 Funcionalidades

* Registro e inicio de sesión
* CRUD completo de cursos
* Relación cursos ↔ categorías
* Filtro y búsqueda de cursos
* Ruta dinámica (detalle de curso)
* Protección de rutas
* Consumo de API con Axios

---

## 🛠️ Tecnologías

* Vue 3
* Vue Router
* Axios
* JSON Server Auth
* Vite

---

## ⚙️ Instalación

### 1. Clonar repositorio

```bash
git clone <tu-repo>
cd proyecto
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar backend

```bash
npx json-server-auth db.json --port 3000 -r routes.json
```

### 4. Ejecutar frontend

```bash
npm run dev
```

---

## 🌐 Acceso

Frontend:
http://localhost:5173

Backend:
http://localhost:3000

---

## 🔐 Usuarios de prueba

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

## 📁 Estructura del proyecto

```
src/
├── services/
├── views/
├── components/
├── router/
├── App.vue
└── main.js
```

---

## 📌 Notas

* No subir `node_modules`
* Incluir `db.json`
* Usar variables de entorno (.env)

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica final de Vue 3.
