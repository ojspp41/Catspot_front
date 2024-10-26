import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.35.114.206', // 백엔드 API 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
