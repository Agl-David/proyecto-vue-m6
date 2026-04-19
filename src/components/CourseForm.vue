<script setup>
import { ref, watch } from 'vue'
import { createCourse, updateCourse } from '../services/courseService'

const props = defineProps({
  course: Object
})

const emit = defineEmits(['saved'])

const title = ref('')
const description = ref('')
const categoryId = ref('')

watch(() => props.course, (newVal) => {
  if (newVal) {
    title.value = newVal.title
    description.value = newVal.description
    categoryId.value = newVal.categoryId
  } else {
    title.value = ''
    description.value = ''
    categoryId.value = ''
  }
})

const save = async () => {
  const payload = {
    title: title.value,
    description: description.value,
    categoryId: categoryId.value ? Number(categoryId.value) : null
  }

  if (props.course) {
    await updateCourse(props.course.id, payload)
  } else {
    await createCourse(payload)
  }

  emit('saved')

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
    <input v-model="categoryId" placeholder="ID Categoría" />

    <!-- 🔥 FIX AQUÍ -->
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