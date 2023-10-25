import axios from 'axios';

const API_URL = 'http://localhost:8080';

const Services = {
  getItems: async () => {
    const response = await axios.get(`${API_URL}/createuser`);
    return response.data;
  },
  getAllItems: async () => {
    const response = await axios.get(`${API_URL}/getAllData`);
    return response.data;
  },
  getItemById: async (id) => {
    const response = await axios.get(`${API_URL}/getById/${id}`);
    return response.data;
  },
  createItem: async (data) => {
    const response = await axios.post(`${API_URL}/createuser`, data);
    return response.data;
  },
  updateItem: async (id, data) => {
    const response = await axios.put(`${API_URL}/userupdate/${id}`, data);
    return response.data;
  },
  deleteItem: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  },
};

export default Services;
