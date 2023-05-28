const axios = require('axios');

export async function getAllUsers() {
  const response = await axios.get('/api/users');
  return response.data;
}

export async function getSomeUsers() {
  const response = await axios.get('/api/users');
  return response.data;
}
