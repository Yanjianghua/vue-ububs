window.axios = require('axios');
import store from '../vuex';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

//axios拦截器
axios.interceptors.request.use((config) => {
    NProgress.start();
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    NProgress.done();
    let {status, message} = response.data;
    if (!status) {
    	// 返回失败直接处理
    	new Vue().$Message.error(message);
    	store.commit('setStateValue', { 'loading': false });
    	return new Promise(()=> {});
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});