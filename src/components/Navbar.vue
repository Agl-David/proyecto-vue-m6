<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { logout } from '../services/authService'

const router = useRouter()

const isLogged = ref(false)

onMounted(() => {
  isLogged.value = !!localStorage.getItem('token')
})

const handleLogout = () => {
  logout()
  isLogged.value = false
  router.push('/login')
}
</script>

<template>
  <nav class="navbar">
    <h2>📚 Cursos</h2>

    <div>
      <!-- 👇 SOLO si está logeado -->
      <router-link v-if="isLogged" to="/courses">Cursos</router-link>

      <!-- 👇 SOLO si NO está logeado -->
      <router-link v-if="!isLogged" to="/login">
        Login
      </router-link>

      <router-link v-if="!isLogged" to="/register">
        Registro
      </router-link>

      <!-- 👇 SOLO si está logeado -->
      <button v-if="isLogged" @click="handleLogout">
        Cerrar sesión
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 👈 mejora visual */
  background: #2c3e50;
  color: white;
  padding: 10px 20px; /* 👈 mejor spacing */
  border-radius: 6px; /* 👈 opcional bonito */
}

a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

button {
  margin-left: 15px;
  padding: 5px 10px;
  background: #e74c3c;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #c0392b;
}
</style>