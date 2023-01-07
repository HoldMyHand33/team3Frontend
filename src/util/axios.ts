import type {AxiosRequestConfig, AxiosResponse} from 'axios';
import axios, {AxiosError} from 'axios';

const instance = axios.create({
  baseURL:
    'http://team3holdmyhand-springboot.ap-northeast-2.elasticbeanstalk.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 4000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    return error;
  },
);

export default instance;
