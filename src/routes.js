import DynamicRoute from './pages/dynamic-route.vue';
import Signin from './pages/signin.vue';

export default [
  {
    path: '/about/',
    component: require('./pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoute
  }, 
  {
    path: '/signin/',
    component: Signin
  },             
]