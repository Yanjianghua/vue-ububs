
// 文档
import Main from '../components/common/document.vue';

// 首页
import Index from '../components/index/index.vue';
export default [{
    path: '/',
    component: Main,
    children: [
        { path: 'index', component: Index, name: '首页' },
    ]
}];