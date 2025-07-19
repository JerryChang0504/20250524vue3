<template>
    <h2> V-model</h2>
    <label>First name : </label>
    <input type="text" v-model="first" />
    <br>
    <label>last name : </label>
    <input type="text" v-model="last" />
    <br>
    <label>lazy Input : </label>
    <input type="text" v-model.lazy="lazy" />
    <br>
    <label>lazy Input : </label>
    <input type="number" v-model.number="numbervalue" />
    <br>
    <label>lazy Input : </label>
    <input type="text" v-model.trim="textTrim" />
</template>
<script setup>
const first = defineModel('firstname')
const last = defineModel('lastname')
const lazy = defineModel('lazyInput')
const numbervalue = defineModel('numberInput')
const textTrim = defineModel('inputTrim')

</script>

<style scoped></style>