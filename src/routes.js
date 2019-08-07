import CatView from './components/CatView.vue'
import CatPoll from './components/CatPoll.vue'
import Error from './components/Error.vue'

const routes = [
    { path: '/', component: CatPoll, name: 'home'},
    { path: '/cats', component: CatView, name: 'list' },
    { path: '/error', component: Error, name: 'error' }
];

export default routes;