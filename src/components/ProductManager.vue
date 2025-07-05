<template>
    <div class="container">
        <h2>🛒 商品管理系統</h2>
        <form @submit.prevent="handleSubmit">
            <input v-model="form.name" :placeholder="'商品名稱'" />
            <input v-model.number="form.price" type="number" :placeholder="'價格'" />

            <button type="submit">新增商品</button>
        </form>
        <!-- <pre> {{ products }} </pre> -->

        <ProductChildItem v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>

import { ref } from 'vue'
import ProductChildItem from './ProductChildItem.vue'
// 商品編號
let nextId = 1
const form = ref({
    id: 1,
    name: '',
    price: 1000
})


const products = ref([{
    id: nextId++,
    name: '滑鼠',
    price: 500,
},
{
    id: nextId++,
    name: '鍵盤',
    price: 800,
},
{
    id: nextId++,
    name: '顯示器',
    price: 3000,
},
])

const handleSubmit = () => {
    if (!form.value.name || !form.value.price) return

    products.value.push({
        id: nextId++,
        name: form.value.name,
        price: form.value.price
    })
    resetForm()
}

// 重置表單
function resetForm() {
    form.value = {
        id: null,
        name: '',
        price: 1000,
    }
}
</script>

<style scoped>
.container {
    max-width: 500px;
    margin: auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1rem;
}

input {
    padding: 6px;
}

button {
    padding: 6px 12px;
}
</style>