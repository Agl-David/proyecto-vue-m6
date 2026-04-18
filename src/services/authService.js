import api from './api';

// REGISTRO
export const register = async (name, email, password) => {
  try {
    // 1. Crear usuario
    const res = await api.post('/register', {
      email,
      password
    });

    const { accessToken, user } = res.data;

    // 2. Guardar token
    localStorage.setItem('token', accessToken);

    // 3. Guardar nombre (IMPORTANTE)
    await api.patch(`/users/${user.id}`, {
      name
    });

    return user;

  } catch (error) {
    console.error('ERROR REGISTER:', error.response?.data || error);
    throw error;
  }
};

// LOGIN
export const login = async (email, password) => {
  const res = await api.post('/login', {
    email,
    password
  });

  const { accessToken, user } = res.data;

  localStorage.setItem('token', accessToken);

  return user;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem('token');
};

// AUTH
export const isAuth = () => {
  return !!localStorage.getItem('token');
};
