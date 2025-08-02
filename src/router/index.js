// src/router/index.js
import { createRouter, createWebHistory,createMemoryHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import UserPost from '@/views/UserPost.vue'
import Users from '@/views/Users.vue'
import UserList from '@/views/UserList.vue'
import UserProfile from '@/views/UserProfile.vue'
import Login from '@/views/Login.vue'

const routes = [
  { path: '/', name:'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/about', component: About },
  { path: '/users/:username/posts/:postId', component: UserPost },{
    path: '/users', name:'Users',
    component: Users,
    children: [
      { path: 'list', name: 'UserList', component: UserList },
      {
        path: ':id',
        name: 'UserProfile',
        component: UserProfile,
        props: true // ✅ 啟用 props 傳遞 id 給 UserProfile.vue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
