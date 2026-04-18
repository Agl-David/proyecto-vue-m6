<template>
  <nav class="navbar">
    <h2>📚 Cursos</h2>
    <div>
      <router-link to="/">Cursos</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Registro</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background: #2c3e50;
  color: white;
  padding: 10px;
}

a {
  color: white;
  margin-left: 10px;
  text-decoration: none;
}
</style>
