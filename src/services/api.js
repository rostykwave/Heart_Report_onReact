import axios from 'axios';
axios.defaults.baseURL = 'https://62c6dc952b03e73a58d905e0.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
