import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // 프록시를 위한 API 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
