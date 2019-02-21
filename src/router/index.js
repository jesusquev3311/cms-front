import Vue from 'vue'
import Router from 'vue-router'
import leads from '@/components/leads/leads'
import login from '@/components/login/login'
import Welcome from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/leads',
      name: 'Leads',
      component: leads
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    }
  ]
})
