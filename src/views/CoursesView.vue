<script setup>
import { ref, onMounted } from 'vue'
import { getCourses, deleteCourse } from '../services/courseService'
import CourseForm from '../components/CourseForm.vue'
import { getCategories } from '../services/categoryService'

// ESTADOS
const courses = ref([])
const selectedCourse = ref(null)

const search = ref('')
const selectedCategory = ref('')

const categories = ref([])

// CARGAR CURSOS
const fetchCourses = async () => {
  const res = await getCourses()
  courses.value = res
}

// CARGAR CATEGORÍAS
const fetchCategories = async () => {
  const res = await getCategories()
  categories.value = res
}

// ELIMINAR CURSO
const remove = async (id) => {
  try {
    await deleteCourse(id)
  } catch (e) {
    // ignoramos error 401 de json-server-auth
  }

  if (selectedCourse.value?.id === id) {
    selectedCourse.value = null
  }

  courses.value = courses.value.filter(c => c.id !== id)
}

// EDITAR
const edit = (course) => {
  selectedCourse.value = { ...course }
}

// GUARDADO
const handleSaved = () => {
  fetchCourses()
  selectedCourse.value = null
}

// FILTRO + BUSCADOR
const filteredCourses = () => {
  return courses.value.filter(c => {
    const title = (c.title || '').toLowerCase()

    const matchSearch = title.includes(search.value.toLowerCase())

    const matchCategory = selectedCategory.value
      ? Number(c.categoryId) === Number(selectedCategory.value)
      : true

    return matchSearch && matchCategory
  })
}

// INICIO
onMounted(() => {
  fetchCourses()
  fetchCategories()
})
</script>

<template>
  <div>
    <h2>📚 Cursos</h2>

    <!-- 🔍 BUSCADOR -->
    <input 
      v-model="search" 
      placeholder="Buscar curso..." 
    />

    <!-- 🧩 FILTRO -->
    <select v-model="selectedCategory">
      <option value="">Todas las categorías</option>
      <option 
        v-for="cat in categories" 
        :key="cat.id" 
        :value="cat.id"
      >
        {{ cat.name }}
      </option>
    </select>

    <!-- FORMULARIO -->
    <CourseForm 
      :course="selectedCourse" 
      @saved="handleSaved"
    />

    <!-- LISTA -->
    <ul v-if="!selectedCourse">
      <li v-for="c in filteredCourses()" :key="c.id">
        
        <!-- INFO -->
        <div class="course-info">
          <strong>{{ c.title }}</strong> - {{ c.description }}
        </div>

        <!-- BOTONES -->
        <div class="actions">
          <button class="edit" @click="edit(c)">Editar</button>
          <button class="delete" @click="remove(c.id)">Eliminar</button>
        </div>

      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 10px;
}

input, select {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
}

ul {
  list-style: none;
  padding: 0;
}

/* 🔥 mejora visual */
li {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* texto */
.course-info {
  max-width: 70%;
}

/* botones separados */
.actions {
  display: flex;
  gap: 10px;
}

/* estilos de botones */
button {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

/* editar */
.edit {
  background: #3498db;
}

.edit:hover {
  background: #2980b9;
}

/* eliminar */
.delete {
  background: #e74c3c;
}

.delete:hover {
  background: #c0392b;
}
</style>