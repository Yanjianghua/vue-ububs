// 文档
import Document from '../components/common/document.vue';
import DocumentIndex from '../components/document/index.vue';
import DocumentContent from '../components/document/content.vue';
export default [{
    path: '/document',
    component: Document,
    children: [
        { path: 'index', component: DocumentIndex, name: '文档首页' },
        { path: 'content', component: DocumentContent, name: '文档内容' },
    ]
}];