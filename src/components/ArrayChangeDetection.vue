<template>
    <div class="container">
        <h2>🛒 商品列表操作器</h2>

        <!-- 操作按鈕 -->
        <div class="actions">
            <button @click="addItem">push（加尾端）</button>
            <button @click="removeLast">pop（移除尾端）</button>
            <button @click="addFirst">unshift（加開頭）</button>
            <button @click="removeFirst">shift（移除開頭）</button>
            <button @click="sortByPrice">sort（價格排序）</button>
            <button @click="reverseList">reverse（反轉順序）</button>
            <button @click="insertMiddle">splice（中間插入）</button>
        </div>

        <!-- 列表渲染 -->
        <ul>
            <li v-for="(item, index) in products" :key="item.id">
                {{ index + 1 }}. {{ item.name }} - ${{ item.price }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let idCounter = 4

const products = ref([
    { id: 1, name: '滑鼠', price: 300 },
    { id: 2, name: '鍵盤', price: 800 },
    { id: 3, name: '螢幕', price: 1500 },
])

// push
function addItem() {
    products.value.push({ id: idCounter++, name: '新商品', price: 999 })
}

// pop
function removeLast() {
    products.value.pop()
}

// unshift
function addFirst() {
    products.value.unshift({ id: idCounter++, name: '頭部商品', price: 123 })
}

// shift
function removeFirst() {
    products.value.shift()
}

// sort
const sortClicked = ref(false)
function sortByPrice() {
    if (sortClicked.value) {
        products.value.sort((a, b) => a.price - b.price)
        sortClicked.value = false
    } else {
        products.value.sort((a, b) => b.price - a.price)
        sortClicked.value = true
    }
}

// reverse
function reverseList() {
    products.value.reverse()
}

// splice
function insertMiddle() {
    const mid = Math.floor(products.value.length / 2)
    products.value.splice(mid, 0, { id: idCounter++, name: '中間商品', price: 456 })
}
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: auto;
}

.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
}

button {
    padding: 6px 10px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 6px 0;
    border-bottom: 1px solid #ddd;
}
</style>
