<template>
    <div>
        <h2>Login</h2>
        <input v-model="name" placeholder="Enter your name" />
        <button @click="doLogin">Login</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const name = ref('')
const userStore = useUserStore()
const router = useRouter()

function doLogin() {
    if (name.value) {
        userStore.login(name.value)
        router.push({ name: 'Home' })
    }
}
</script>
