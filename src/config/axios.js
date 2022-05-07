import axios from 'axios';

export const productAxios = axios.create({
  baseURL: 'https://fakestoreapi.com/products?limit=5',
});
