import api from './api';

// OBTENER CURSOS
export const getCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
};

// CREAR CURSO
export const createCourse = async (course) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const res = await api.post('/courses', {
    ...course,
    userId: user.id // 👈 CLAVE
  });

  return res.data;
};

// ACTUALIZAR CURSO
export const updateCourse = async (id, course) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const res = await api.put(`/courses/${id}`, {
    ...course,
    userId: user.id // 👈 IMPORTANTE
  });

  return res.data;
};

// ELIMINAR CURSO
export const deleteCourse = async (id) => {
  await api.delete(`/courses/${id}`);
};
