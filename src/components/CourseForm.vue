<script setup>
import { ref, onMounted, watch } from 'vue'
import { createCourse, updateCourse } from '../services/courseService'

const props = defineProps({
  course: Object
})

const emit = defineEmits(['saved'])

const title = ref('')
const description = ref('')
const categoryId = ref('')

onMounted(() => {
  if (props.course) {
    title.value = props.course.title
    description.value = props.course.description
    categoryId.value = props.course.categoryId
  }
})

watch(() => props.course, (newVal) => {
  if (newVal) {
    title.value = newVal.title
    description.value = newVal.description
    categoryId.value = newVal.categoryId
  }
})

const save = async () => {
  if (props.course) {
    await updateCourse(props.course.id, {
      title: title.value,
      description: description.value,
      categoryId: Number(categoryId.value)
    })
  } else {
    await createCourse({
      title: title.value,
      description: description.value,
      categoryId: Number(categoryId.value)
    })
  }

  emit('saved')
}
</script>

<template>
  <div class="form-card">
    <h3>{{ course ? 'Editar Curso' : 'Nuevo Curso' }}</h3>

    <input v-model="title" placeholder="Título" />
    <input v-model="description" placeholder="Descripción" />
    <input v-model="categoryId" placeholder="ID Categoría" />

    <button @click="save">
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
