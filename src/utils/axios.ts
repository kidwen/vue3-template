import Axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = 'https://api.github.com';

const axios = Axios.create({
    baseURL,
    timeout: 20000 // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
)
