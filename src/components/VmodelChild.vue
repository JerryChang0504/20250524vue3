<template>
    <h2> V-model</h2>
    <label>First name : </label>
    <input type="text" v-model="first" />
    <br>
    <label>last name : </label>
    <input type="text" v-model="last" />
</template>
<script setup>
const first = defineModel('firstname')
const last = defineModel('lastname')
</script>

<style scoped></style>