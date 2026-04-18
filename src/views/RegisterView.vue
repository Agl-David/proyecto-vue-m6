<template>
  <h2>Register</h2>
  <input v-model="name" placeholder="Nombre" />
  <input v-model="email" placeholder="Email" />
  <input v-model="password" type="password" />
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
  await register(name.value, email.value, password.value);
  router.push('/courses');
};
</script>
