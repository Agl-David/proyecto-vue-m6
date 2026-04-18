<template>
  <div v-if="course">
    <h2>{{ course.title }}</h2>
    <p>{{ course.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getCourses } from '../services/courseService';

const route = useRoute();
const course = ref(null);

onMounted(async () => {
  const courses = await getCourses();
  course.value = courses.find(c => c.id == route.params.id);
});
</script>
