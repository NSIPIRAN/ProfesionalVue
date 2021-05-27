import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TrackDetail from '../components/TrackDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/about',
    name: 'About',
    component: About
  }, 
  {
    path: '/track/:id',
    name: 'track',
    component: TrackDetail
  },
  /* {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */             /*  '../views/About.vue') */
 /*  }  */
]

const router = new VueRouter({
  routes,
  //para desaparecer el michi de las rutas:
  mode: 'history'
})

export default router
