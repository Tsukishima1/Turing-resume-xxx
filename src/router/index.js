import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Tip from '@/views/Tip/index.vue'
import Manager from '@/views/Manager/index.vue'
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
          path:'/',
          component:Login
        },
        {
            path:'/Layout',
            component:Layout
        },
        {
          path:'/tip',
          component:Tip
        },
        {
          path:'/manager',
          component:Manager
        }
        
    ],
     // 路由滚动行为定制
    scrollBehavior () {
    return {
      top: 0
    }
  }
})
 
export default router