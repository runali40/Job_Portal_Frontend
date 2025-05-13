// src/api/apiClient.js
import axios from 'axios';
import UrlData from './UrlData';
import Cookies from 'js-cookie';

const getSessionId = () => {
  let sessionId = sessionStorage.getItem('sessionid');
  return sessionId;
};

// Create an Axios instance with base URL
const apiClient = axios.create({
  baseURL: UrlData,
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use(
  async config => {
    const token = Cookies.get("UserCredential");
    // console.log('Adding token to headers:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    try {
      // const ipAddress = await getLocalIP();
      config.headers['IpAddress'] = "192.168.1.4";
      // config.headers['IpAddress'] = "192.168.1.2";
      // console.log('Adding local IP to headers:', ipAddress);
    } catch (error) {
      console.warn('Failed to get local IP:', error);
    }
    
    const sessionId = getSessionId();
    config.headers['SessionId'] = sessionId;
    // console.log('Adding session ID to headers:', sessionId);
    
    return config;
  },
  error => {
    console.warn('Request interceptor error:', error);
    return Promise.reject(error);
  }
);
// Response Interceptor: handle token refresh in responses
apiClient.interceptors.response.use(
  (response) => {
    // Check if response contains a new token and update cookie
    if (response.data && response.data.outcome && response.data.outcome.tokens) {
      const newToken = response.data.outcome.tokens;
      Cookies.set("UserCredential", newToken, { expires: 7 });
    }
    return response;
  },
  (error) => {
    // Even in case of error, check if there's a new token
    if (error.response && error.response.data && error.response.data.outcome && error.response.data.outcome.tokens) {
      const newToken = error.response.data.outcome.tokens;
      Cookies.set("UserCredential", newToken, { expires: 7 });
    }
    return Promise.reject(error);
  }
);

export { apiClient };