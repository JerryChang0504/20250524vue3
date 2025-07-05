<template>
    <div>
        <p> 原始值 : {{ orinalValue }}</p>
        <p> 計算後 : {{ computedValue }}</p>
        <p> method計算後 : {{ methodValue() }}</p>
        <button @click="add">計算</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const orinalValue = ref(1)
const add = () => {
    orinalValue.value++
}

const computedValue = computed(() => orinalValue.value * 2)
const methodValue = () => orinalValue.value * 2

</script>

<style lang="scss" scoped></style>