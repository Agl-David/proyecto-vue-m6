import api from './api';

// export const updateCourse = (id, data) => api.put(`/courses/${id}`, data)

export const getCourses = async () => {
  const res = await api.get('/courses');
  return res.data;
};

export const createCourse = async (course) => {
  const res = await api.post('/courses', course);
  return res.data;
};

export const updateCourse = async (id, course) => {
  const res = await api.put(`/courses/${id}`, course);
  return res.data;
};

export const deleteCourse = async (id) => {
  await api.delete(`/courses/${id}`);
};
