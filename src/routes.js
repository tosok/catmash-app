import CatView from './components/CatView.vue'
import CatPoll from './components/CatPoll.vue'

const routes = [
    { path: '/', component: CatPoll, name: 'home'},
    { path: '/cats', component: CatView, name: 'list' }
];

export default routes;