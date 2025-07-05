<template>
    <button @click="(e) => handleClick(e, 'msg')">Click me</button>
    {{ message }}
    <br>
    <button @click="(e) => { handleClickEvent(e); handleClickMsg('msg'); }">Click me</button>
    {{ message2 }}
</template>

<script setup>
import { ref } from 'vue'
const message = ref('')
const message2 = ref('')

const handleClick = (e, msg) => {
    message.value = `Hello : ${msg}`
    e.target.disabled = true
}

const handleClickEvent = (e) => {
    e.target.disabled = true
}

const handleClickMsg = (msg) => {
    message2.value = `Hello : ${msg}`
}
</script>

<style lang="scss" scoped></style>