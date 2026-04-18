<template>
  <h2>Register</h2>

  <input v-model="name" placeholder="Nombre" />

  <input v-model="email" placeholder="Email" />

  <!-- 👇 AQUÍ EL CAMBIO -->
  <input 
    v-model="password" 
    type="password" 
    placeholder="Contraseña (mínimo 6 caracteres)" 
  />

  <button @click="handleRegister">Registrar</button>
</template>

<script setup>
import { ref } from 'vue';
import { register } from '../services/authService';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    // 👇 Validación básica (muy recomendable)
    if (password.value.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    await register(name.value, email.value, password.value);

    router.push('/courses');
  } catch (error) {
    alert('Error al registrarse');
    console.error(error);
  }
};
</script>
