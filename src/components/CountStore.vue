<template>
    <div>
        <h2>{{ counter.name }}</h2>
        <p>Count: {{ counter.count }}</p>
        <p>Double: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">+1</button>
        <button @click="counter.reset">重設</button>
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
