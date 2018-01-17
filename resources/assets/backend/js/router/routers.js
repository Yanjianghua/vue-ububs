import Main from '../components/common/main.vue';
import Login from '../components/common/login.vue';
import AdminIndex from '../components/admin/index.vue';

export default [{
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true,
}, {
    path: '/index',
    component: Main,
    name: '首页',
    iconCls: 'ios-navigate', //图标样式class
    noDropdown: true,
    children: [
        // { path: 'index', component: Index, name: '首页'}
    ]
}, {
    path: '/admin',
    component: Main,
    name: '管理员管理',
    iconCls: 'ios-navigate', //图标样式class
    children: [
        { path: 'lists', component: AdminIndex, name: '管理员列表' },
        { path: 'permission', component: AdminIndex, name: '管理员权限' },
    ]
}];