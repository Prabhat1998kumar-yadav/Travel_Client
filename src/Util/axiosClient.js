import axios from 'axios';

const api = axios.create({
  baseURL: 'https://travel-server-nu.vercel.app/'
});

export const getDestinations = async () => {
  const res = await api.get('/destinations');
  return res.data;
};

export const getTopPackages = async () => {
  const res = await api.get('/packages');
  return res.data;
};