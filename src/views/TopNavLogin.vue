<template>
    <nav class="top-nav">
        <span class="logo">🛒 MyShop</span>

        <div class="user-info">
            <template v-if="userStore.isLoggedIn">
                👋 Hello, {{ userStore.username }} |
                <a href="#" @click.prevent="gotLogout">Logout</a>
            </template>
            <template v-else>
                <a href="#" @click.prevent="gotoLogin">Login</a>
            </template>
        </div>
    </nav>
</template>

<script setup>
import { useUserStore } from '@/stores/UserStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

function gotoLogin() {
    router.push({ name: 'Login' })
}

function gotLogout() {
    userStore.logout()
    router.push({ name: 'Login' })
}
</script>

<style scoped>
.top-nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #eee;
}
</style>
