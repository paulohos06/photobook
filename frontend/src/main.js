import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

import router from './router'
import './directives/Transform'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({ baseURL: 'http://localhost:3000' })

// VeeValidation
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
extend('required', { ...required, message: 'Esse campo é obrigatório!' })
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: `Esse campo deve ter no mínimo {min} e no máximo {max} caracteres!`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
