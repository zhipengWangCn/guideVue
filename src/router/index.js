import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Guide from '@/components/guide'
import guideIng from '@/components/guideIng'
import guideQuest from '@/components/guideQuest'
import succee from '@/components/succee'
import query from '@/components/query'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/guide',
    	name:'guide',
    	component:Guide
    },
    {
      path:'/report',
      name:'guideIng',
      component:guideIng
    },{
      path:'/guideQuest',
      name:'guideQuset',
      component:guideQuest
    },{
      path:'/succee',
      name:'succee',
      component:succee
    },{
      path:'/query',
      name:'query',
      component:query
    }
  ]
})
