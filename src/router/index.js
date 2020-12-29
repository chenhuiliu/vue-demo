import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: 'toolCase',
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      {
        path: 'toolCase',
        component: () => import('../views/ToolCase.vue'),
      },
      {
        path: 'system',
        component: () => import('../views/SystemManage.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router