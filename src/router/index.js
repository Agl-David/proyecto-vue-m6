import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import CoursesView from '../views/CoursesView.vue';
import CourseDetailView from '../views/CourseDetailView.vue';
import { isAuth } from '../services/authService'; // 👈 CAMBIO AQUÍ

const routes = [
  { path: '/', redirect: '/courses' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  {
    path: '/courses',
    component: CoursesView,
    meta: { requiresAuth: true }
  },
  {
    path: '/courses/:id',
    component: CourseDetailView,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuth()) { // 👈 CAMBIO AQUÍ
    next('/login');
  } else {
    next();
  }
});

export default router;
