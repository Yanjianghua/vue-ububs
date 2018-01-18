import Main from '../components/common/main.vue';
import Login from '../components/common/login.vue';
import AdminLists from '../components/admin/lists.vue';
import AdminPermission from '../components/admin/permission.vue';

export default [{
    id: 100,
    path: '/login',
    component: Login,
    name: '登录',
    hidden: true,
}, {
    id: 200,
    path: '/index',
    component: Main,
    name: '首页',
    iconCls: 'ios-navigate', //图标样式class
    noDropdown: true,
    children: [
        // { path: 'index', component: Index, name: '首页'}
    ]
}, {
    id: 300,
    path: '/admin',
    component: Main,
    name: '管理员管理',
    iconCls: 'ios-navigate', //图标样式class
    children: [
        { id: 301, path: 'lists', component: AdminLists, name: '管理员列表' },
        { id: 302, path: 'permission', component: AdminPermission, name: '管理员权限' },
    ]
}, {
    id: 400,
    path: '/user',
    component: Main,
    name: '用户管理',
    iconCls: 'ios-navigate', //图标样式class
    children: [
        { id: 401, path: 'lists', component: AdminLists, name: '用户列表' },
    ]
}];