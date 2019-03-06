import Vue from 'vue'
import Router from 'vue-router'
import leads from '@/components/leads/leads'
import login from '@/components/login/login'
import Welcome from '@/components/HelloWorld'
import AddLead from '@/components/leads/addLead'
import leadDetail from '@/components/leads/leadDetail'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path: '/dashboard',
      name: 'welcome',
      component:Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
      props: true
    },
    {
      path: '/leads',
      name: 'Leads',
      component: leads
    },
    {
      path: '/leads/add-lead',
      name: 'add-lead',
      component:AddLead
    },
    {
      path: '/leads/:id',
      name: 'lead-detail',
      component:leadDetail,
      props: true
    }
  ]
})
