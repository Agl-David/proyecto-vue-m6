<template>
  <h2>Login</h2>
  <input v-model="email" placeholder="Email" />
  <input v-model="password" type="password" placeholder="Password" />
  <button @click="handleLogin">Login</button>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '../services/authService';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  await login(email.value, password.value);
  router.push('/courses');
};
</script>
