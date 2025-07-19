<template>
    <h2> V-model</h2>
    <input type="text" v-model="title" />
</template>
<script setup>
const title = defineModel('title')

</script>

<style scoped></style>