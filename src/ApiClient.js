// // src/api/apiClient.js
import axios from 'axios';
import UrlData from './UrlData';
import Cookies from 'js-cookie';

// Utility: Get IP Address (mock or real API if needed)
const getIpAddress = () => {
  return '192.168.1.4'; // Replace with dynamic IP logic if needed
};

// Utility: Get Session ID from sessionStorage
const getSessionId = () => {
  return sessionStorage.getItem('sessionid') || '';
};

// Utility: Get Token from cookies
const getToken = () => {
  return Cookies.get('UserCredential') || '';
};

// Create Axios instance
const apiClient = axios.create({
  baseURL: UrlData,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request Interceptor: add IP, SessionId, and Bearer Token headers
apiClient.interceptors.request.use(
  (config) => {
    const ip = getIpAddress();
    const sessionId = getSessionId();
    const token = getToken();

    config.headers = {
      ...config.headers,
      IpAddress: ip,
      SessionId: sessionId,
      Authorization: token ? `Bearer ${token}` : '' // Only add if token exists
    };

    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;

