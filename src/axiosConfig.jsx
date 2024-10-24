import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-backend-url.com', // 백엔드 API 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
