// src/router/index.js
import { createRouter, createWebHistory,createMemoryHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import UserPost from '@/views/UserPost.vue'
import Users from '@/views/Users.vue'
import UserList from '@/views/UserList.vue'
import UserProfile from '@/views/UserProfile.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:username/posts/:postId', component: UserPost },{
    path: '/users',
    component: Users,
    children: [
      { path: 'list', name: 'UserList', component: UserList },
      { path: 'profile', name: 'UserProfile', component: UserProfile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
