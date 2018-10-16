import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/mainContent/index.vue'
import Album from '../components/mainContent/album.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/album/:albumname',
            name: 'Album',
            component: Album
        }
    ]
})