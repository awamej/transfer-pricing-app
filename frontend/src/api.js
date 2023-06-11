const axios = require('axios');

export async function getAllUsers() {
  const response = await axios.get('/api/users');
  return response.data;
}

export async function registerUser(user) {
  const response = await axios.post('/api/users', { user });
  return response.data;
}
