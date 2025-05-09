// // src/api/apiClient.js
// import axios from 'axios';
// import UrlData from './UrlData';
// import Cookies from 'js-cookie';

// // Utility: Get IP Address (mock or real API if needed)
// const getIpAddress = () => {
//   return '192.168.1.4'; // Replace with dynamic IP logic if needed
// };

// // Utility: Get Session ID from sessionStorage
// const getSessionId = () => {
//   return sessionStorage.getItem('sessionid') || '';
// };

// // Utility: Get Token from cookies
// const getToken = () => {
//   return Cookies.get('UserCredential') || '';
// };

// // Create Axios instance
// const apiClient = axios.create({
//   baseURL: UrlData,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Request Interceptor: add IP, SessionId, and Bearer Token headers
// apiClient.interceptors.request.use(
//   (config) => {
//     const ip = getIpAddress();
//     const sessionId = getSessionId();
//     const token = getToken();

//     config.headers = {
//       ...config.headers,
//       IpAddress: ip,
//       SessionId: sessionId,
//       Authorization: token ? `Bearer ${token}` : '' // Only add if token exists
//     };

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default apiClient;

// src/api/apiClient.js
import axios from 'axios';
import UrlData from './UrlData';
import Cookies from 'js-cookie';

const getIpAddress = () => '192.168.1.4';
const getSessionId = () => sessionStorage.getItem('sessionid') || '';
const getToken = () => Cookies.get('UserCredential') || '';

// Create Axios instance
const apiClient = axios.create({
  baseURL: UrlData,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor: attach headers
apiClient.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      IpAddress: getIpAddress(),
      SessionId: getSessionId(),
      Authorization: `Bearer ${getToken()}`
    };
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor: handle token refresh
apiClient.interceptors.response.use(
  (response) => {
    // If a new token is received in a response, save it
    const newToken = response.data.outcome?.tokens;
    if (newToken) {
      Cookies.set('UserCredential', newToken, { expires: 7 });
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Only try refresh if 401 and retry not attempted yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const userId = localStorage.getItem('userid');


      try {
        // Attempt token refresh
        const refreshResponse = await axios.get(`${UrlData}Home/GetLocation`, {
          params: {
            UserId: userId,

          }
        });

        const refreshedToken = refreshResponse.data.outcome?.tokens;

        if (refreshedToken) {
          Cookies.set('UserCredential', refreshedToken, { expires: 7 });

          // Update headers on original request
          originalRequest.headers['Authorization'] = `Bearer ${refreshedToken}`;

          // If it had params before, preserve them; otherwise, add UserId and RecruitId
          originalRequest.params = {
            ...originalRequest.params,
            UserId: userId,

          };

          return apiClient(originalRequest); // Retry original request
        } else {
          Cookies.remove('UserCredential');
          window.location.reload(); // Optional: redirect or reload
          return Promise.reject(error);
        }
      } catch (refreshError) {
        Cookies.remove('UserCredential');
        window.location.href = '/'; // Optional fallback to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // All other errors
  }
);

export default apiClient;
