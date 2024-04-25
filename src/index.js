import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import RegistrPage from './components/RegistrPage.vue'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }, 
  {
    path: '/registr',
    name: 'RegistrPage',
    component: RegistrPage
  },


  
  {
    path: "/students",
    alias: "/students",
    name: "students",
    component: () => import("./components/StudentsList")
  },
  {
    path: "/students/:id",
    name: "StudentEdit",
    component: () => import("./components/StudentEdit")
  },
  {
    path: "/add",
    name: "AddS",
    component: () => import("./components/AddStudent")
  },



  
  {
    path: "/products",
    alias: "/products",
    name: "products",
    component: () => import("./components/ProductsList")
  },
  {
    path: "/products/:id",
    name: "ProductEdit",
    component: () => import("./components/ProductEdit")
  },
  {
    path: "/addP",
    name: "AddP",
    component: () => import("./components/AddProduct")
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
  
