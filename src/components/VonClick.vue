<template>
    <button @click="(e) => handleClick(e, 'msg')">Click me</button>
    {{ message }}
</template>

<script setup>
import { ref } from 'vue'
const message = ref('')
const handleClick = (e, msg) => {
    message.value = `Hello : ${msg}`
    e.target.disabled = true
}
</script>

<style lang="scss" scoped></style>