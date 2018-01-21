/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window._ = require('lodash');
window.Vue = require('vue');
import store from './vuex';
import './axios';
import router from './router';
import './plugin';
import * as filters from './filter';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

//注册全局的过滤函数
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

const app = new Vue({
    beforeCreate() {
    	if (localStorage.hasOwnProperty('admin_data')) {
    		this.$store.commit('setStateValue', { 'admin_data': JSON.parse(localStorage.getItem('admin_data')) });
    	}
    },
    router,
    store
}).$mount('#app');