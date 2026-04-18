import api from './api';

// REGISTRO
export const register = async (name, email, password) => {
  try {
    const res = await api.post('/register', {
      email,
      password
    });

    const { accessToken, user } = res.data;

    localStorage.setItem('token', accessToken);

    // 👇 guardar user
    localStorage.setItem('user', JSON.stringify(user));

    // guardar nombre
    await api.patch(`/users/${user.id}`, { name });

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

  // 👇 solo una vez
  localStorage.setItem('user', JSON.stringify(user));

  return user;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// AUTH
export const isAuth = () => {
  return !!localStorage.getItem('token');
};
