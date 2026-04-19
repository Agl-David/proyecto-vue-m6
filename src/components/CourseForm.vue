<script setup>
import { ref, watch, onMounted } from 'vue'
import { createCourse, updateCourse } from '../services/courseService'
import { getCategories } from '../services/categoryService'

const props = defineProps({
  course: Object
})

const emit = defineEmits(['saved'])

const title = ref('')
const description = ref('')
const categoryId = ref('')

const categories = ref([])

// cargar categorías
onMounted(async () => {
  const res = await getCategories()
  categories.value = res
})

// 🔥 FIX: convertir a string para que el select funcione
watch(() => props.course, (newVal) => {
  if (newVal) {
    title.value = newVal.title
    description.value = newVal.description
    categoryId.value = String(newVal.categoryId)
  } else {
    title.value = ''
    description.value = ''
    categoryId.value = ''
  }
})

// guardar (crear o actualizar)
const save = async () => {
  const payload = {
    title: title.value,
    description: description.value,
    categoryId: categoryId.value ? Number(categoryId.value) : null // 🔥 FIX
  }

  if (props.course) {
    await updateCourse(props.course.id, payload)
  } else {
    await createCourse(payload)
  }

  emit('saved')

  // limpiar formulario
  title.value = ''
  description.value = ''
  categoryId.value = ''
}
</script>

<template>
  <div class="form-card">
    <h3>{{ course ? 'Editar Curso' : 'Nuevo Curso' }}</h3>

    <input v-model="title" placeholder="Título" />
    <input v-model="description" placeholder="Descripción" />

    <!-- 🔥 SELECT CORRECTO -->
    <select v-model="categoryId">
      <option disabled value="">Selecciona categoría</option>
      <option 
        v-for="cat in categories" 
        :key="cat.id" 
        :value="cat.id"
      >
        {{ cat.name }}
      </option>
    </select>

    <button type="button" @click="save">
      {{ course ? 'Actualizar' : 'Crear' }}
    </button>
  </div>
</template>

<style scoped>
.form-card {
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
}
</style>