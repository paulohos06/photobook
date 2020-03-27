import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
const Register = () => import('../views/Register')

Vue.use(VueRouter)

const routes = [
  { path: '/', id: 0, label: 'Home', name: 'home', component: Home, menu: true },
  { path: '/cadastro', id: 1, label: 'Cadastrar', name: 'register', component: Register, menu: true },
  { path: '/cadastro/:id', id: 2, label: 'Alterar', name: 'update', component: Register, menu: false },
  { path: '*', id: 3, component: Home, menu: false }
]

const router = new VueRouter({ routes, mode: 'history' })

export default router
