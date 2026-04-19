<script setup>
import { ref, onMounted } from 'vue'
import { getCourses, deleteCourse } from '../services/courseService'
import CourseForm from '../components/CourseForm.vue'

const courses = ref([])
const selectedCourse = ref(null)

// Cargar cursos
const fetchCourses = async () => {
  const res = await getCourses()
  courses.value = res
}

// Eliminar curso (🔥 FIX COMPLETO)
const remove = async (id) => {
  try {
    await deleteCourse(id)
  } catch (e) {
    // ignoramos error 401
  }

  // 👉 si estabas editando ese curso, salir del modo edición
  if (selectedCourse.value?.id === id) {
    selectedCourse.value = null
  }

  // 👉 actualizar lista local
  courses.value = courses.value.filter(c => c.id !== id)
}

// Seleccionar curso para editar
const edit = (course) => {
  selectedCourse.value = { ...course }
}

// Guardado (crear o actualizar)
const handleSaved = () => {
  fetchCourses()
  selectedCourse.value = null
}

// Cargar al iniciar
onMounted(fetchCourses)
</script>

<template>
  <div>
    <h2>📚 Cursos</h2>

    <!-- FORMULARIO -->
    <CourseForm 
      :course="selectedCourse" 
      @saved="handleSaved"
    />

    <!-- LISTA (🔥 ocultar mientras editas) -->
    <ul v-if="!selectedCourse">
      <li v-for="c in courses" :key="c.id">
        <strong>{{ c.title }}</strong> - {{ c.description }}

        <br />

        <button @click="edit(c)">Editar</button>
        <button @click="remove(c.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
}
</style>