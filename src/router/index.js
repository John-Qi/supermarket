import VueRouter from 'vue-router'
import Vue from 'vue'
const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart.vue');
const Profile = () => import('../views/profile/Profile.vue');
const Category = () => import('../views/category/Category.vue');
Vue.use(VueRouter)
const routes =[
    {
        path: '',
        redirect: '/Home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      }
]
const router =new VueRouter ({
    routes,
    mode:'history'
})
export default router