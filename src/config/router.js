import Vue from 'vue'
import Router from 'vue-router'



import Longtail from '@/components/Longtail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    // {
    //   path: '/notfound',
    //   name: '404Company',
    //   component: ErrorCompany404
    // },
    {
      path: '*',
      name: 'Longtail',
      component: Longtail
    }
  ]
})

export default router
