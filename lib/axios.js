import axios from 'axios';

export const api = axios.create({
  baseURL: '/api', // Adjust this to your backend URL (e.g., 'https://api.yourdomain.com')
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor to automatically attach auth tokens
api.interceptors.request.use(
  (config) => {
    // Example: const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);