<template>
    <form @submit.prevent="handleLogin">
        <div>
            <label for="name">Name :</label>
            <input type="text" v-model="email" />
        </div>

        <div>
            <label for="password">密碼：</label>
            <input type="password" v-model="password" />
        </div>

        <button type="submit">登入</button>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

function handleLogin() {
    console.log("🚀 ~ handleLogin ~ '登入成功！':", '登入成功！')

    // if (email.value === 'test@example.com' && password.value === '123456') {
    //     alert('登入成功！')
    //     // 可以改為跳轉或儲存 token 等
    // } else {
    //     errorMessage.value = '帳號或密碼錯誤'
    // }
}
</script>

<style scoped>
.error {
    color: red;
    margin-top: 10px;
}
</style>
