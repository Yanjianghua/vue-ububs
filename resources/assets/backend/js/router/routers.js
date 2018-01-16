import Main from '../components/common/main.vue';
import Login from '../components/common/login.vue';
export default [{
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true,
}, {
    path: '/index',
    component: Main,
    name: '首页',
    iconCls: 'fa fa-television', //图标样式class
    noDropdown: true,
    children: [
        // { path: 'index', component: Index, name: '首页'}
    ]
}];