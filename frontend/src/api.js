const axios = require('axios');

export async function registerUser(user) {
  const response = await axios.post('/api/users/register', { user });
  return response.data;
}

export async function loginUser(user) {
  const response = await axios.post('/api/users/login', { user });
  return response.data;
}
