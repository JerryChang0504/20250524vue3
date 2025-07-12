<template>
    <div>
        <h1>📋 我的待辦清單</h1>
        <input v-model="newItem" placeholder="輸入待辦事項" />
        <button @click="addItem">加入</button>
    </div>

    <ul>
        <todoItem v-for="(item, index) in todos" :key="index" :text="item" :index="index" @removeItem="handleRemove" />
    </ul>
</template>

<script setup>

import { ref } from 'vue'
import todoItem from './todoItem.vue'

const newItem = ref('')
const todos = ref([])

const addItem = () => {
    if (newItem.value.trim() != '') {
        todos.value.push(newItem.value)
        newItem.value = ''
    }
}

const handleRemove = (index) => {
    todos.value.splice(index, 1)
}

</script>

<style scoped>
ol {
    padding-left: 10px;
}

li {
    margin: 5px 0;
}

button {
    margin-left: 10px;
}
</style>