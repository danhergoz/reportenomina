import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import UserHome from '../views/UserHome.vue'
import Account from '../views/Account.vue'
import dentronomina from '../views/dentronomina.vue'
import modfnomina from '../views/modfnomina.vue'
import detallenom from '../views/detallenomina.vue'
import nuevanomina from '../views/nuevanomina.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/UserHome',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account
  },
  {
    path: '/DentroNomina',
    name: 'dentronomina',
    component: dentronomina
  },
  {
    path: '/ModfNomina',
    name: 'modfnomina',
    component: modfnomina
  },
  {
    path: '/DetalleNom',
    name: 'detallenom',
    component: detallenom
  },
  {
    path: '/NuevaNom',
    name: 'nuevanomina',
    component: nuevanomina
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

