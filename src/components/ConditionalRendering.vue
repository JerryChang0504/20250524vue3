<template>
    <div class="container">
        <!-- 顯示登入表單 -->
        <div v-if="!isLoggedIn">
            <h3>請登入</h3>
            <input v-model="username" placeholder="帳號" />
            <input v-model="password" type="password" placeholder="密碼" />
            <button @click="login">登入</button>
            <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        </div>

        <!-- 登入後顯示身份內容 -->
        <div v-else>
            <div v-if="role === 'admin'">
                <h2>👑 歡迎管理員 {{ username }}</h2>
                <p>這是管理後台畫面。</p>
            </div>

            <div v-else-if="role === 'user'">
                <h2>👤 歡迎會員 {{ username }}</h2>
                <p>這是會員專區。</p>
            </div>

            <div v-else>
                <p>身份不明，請聯絡客服。</p>
            </div>

            <button @click="logout">登出</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// 假資料（實務上應該由後端驗證）
const users = [
    { username: 'admin', password: '1234', role: 'admin' },
    { username: 'user', password: '5678', role: 'user' },
    { username: 'guest', password: '9012', role: '' },
]

const username = ref('')
const password = ref('')
const errorMsg = ref('')
const role = ref('')
const isLoggedIn = ref(false)
const login = () => {
    const found = users.find((u) => u.username === username.value && u.password === password.value)
    if (found) {
        role.value = found.role
        isLoggedIn.value = true
        errorMsg.value = ''
    } else {
        errorMsg.value = '確認帳密'
    }
}

const logout = () => {
    isLoggedIn.value = false
    username.value = ''
    password.value = ''
    errorMsg.value = ''
    role.value = ''
}
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
}

input {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
}

.error {
    color: red;
}
</style>