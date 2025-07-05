<template>
    <div>
        <p>Email: <input v-model="email" /></p>
        <p>Password: <input type="password" v-model="password" /></p>
        <button :disabled="!canSubmit">送出</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const email = ref('')
const password = ref('')
const canSubmit = computed(() => {
    return email.value.trim !== '' && password.value !== ''
})
</script>

<style scoped></style>