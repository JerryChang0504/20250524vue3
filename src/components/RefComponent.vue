<template>
    <div>
        <div v-for="(item, index) in items" :key="item.id">
            <label> {{ item.name }}</label>
            <input type="text" :ref="setInputRef(index)" :placeholder="item.placeholder" />
        </div>
        <button @click="focusFirstInput">重新輸入(聚焦第一個輸入框)</button>
        <button @click="submit">送出</button>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
    { id: 1, name: '蘋果', placeholder: '請輸入數量' },
    { id: 2, name: '橘子', placeholder: '請輸入數量' },
    { id: 3, name: '香蕉', placeholder: '請輸入數量' }
])
const inputText = ref([])

const setInputRef = (index) => (el) => {
    inputText.value[index] = el
}

const submit = () => {
    inputText.value.forEach((item, index) => {
        console.log("🚀", `${items.value[index].name} 數量 ${item.value}`)
    })
}

const focusFirstInput = () => {
    inputText.value.forEach((input, index) => {
        input.value = ''
    })

    inputText.value[0].focus()
}
</script>

<style scoped></style>