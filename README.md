# 📚 Proyecto Final - Gestión de Cursos (Vue 3)

## 🚀 Descripción

Aplicación web desarrollada con **Vue 3** que permite la gestión de cursos y categorías, incluyendo autenticación de usuarios mediante **JSON Server Auth**.

El sistema permite crear, editar, eliminar y visualizar cursos, además de filtrarlos por categoría y buscarlos por nombre.

---

## 🎯 Funcionalidades

* 🔐 Registro e inicio de sesión
* 📚 CRUD completo de cursos
* 🧩 Relación cursos ↔ categorías
* 🔍 Buscador de cursos
* 🗂️ Filtro por categoría
* 🔗 Ruta dinámica (detalle de curso)
* 🚫 Protección de rutas privadas
* 🌐 Consumo de API con Axios
* 💾 Persistencia con JSON Server

---

## 🛠️ Tecnologías

* Vue 3 (Composition API)
* Vue Router
* Axios
* JSON Server Auth
* Vite

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <tu-repo>
cd proyecto-vue
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Crear archivo `.env` en la raíz:

```env
VITE_API_URL=http://localhost:3000
VITE_TIMEOUT=3000
```

---

### 4. Ejecutar backend (JSON Server Auth)

```bash
npx json-server-auth db.json --routes routes.json --port 3000
```

---

### 5. Ejecutar frontend

```bash
npm run dev
```

---

## 🌐 Acceso

* Frontend: http://localhost:5173
* Backend: http://localhost:3000

---

## 🔐 Autenticación

El sistema utiliza autenticación basada en token.

### Usuario de prueba

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

> También puedes registrar nuevos usuarios desde la app.

---

## 📁 Estructura del proyecto

```
src/
├── components/     # Componentes reutilizables
├── views/          # Vistas principales
├── services/       # Lógica de API (Axios)
├── router/         # Rutas y protección
├── assets/         # Estilos
├── App.vue
└── main.js
```

---

## 📌 Notas importantes

* No subir la carpeta `node_modules`
* Incluir `db.json` en el repositorio
* Usar `.env` para configuración
* El backend usa reglas de autorización (`routes.json`)
* Puede aparecer error 401 en DELETE por json-server-auth, pero el recurso sí se elimina

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica final de Vue 3. - Alumno David Adria Aguilar Loza
