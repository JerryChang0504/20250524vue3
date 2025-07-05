<template>
    <div class="container">
        <h2>🛒 商品管理系統</h2>
        <form @submit.prevent="handleSubmit">
            <input v-model="form.name" :placeholder="'商品名稱'" />
            <input v-model.number="form.price" type="number" :placeholder="'價格'" />

            <button type="submit">{{ form.id ? '更新商品' : '新增商品' }}</button>
            <button v-if="form.id" type="button" @click="resetForm">取消編輯</button>
        </form>
        <!-- <pre> {{ products }} </pre> -->

        <ProductChildItem v-for="product in products" :key="product.id" :product="product" @edit="editProduct"
            @delete="delProduct" />
    </div>
</template>

<script setup>

import { ref } from 'vue'
import ProductChildItem from './ProductChildItem.vue'
// 商品編號
let nextId = 1
const form = ref({
    id: null,
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

    if (form.value.id) {
        // 編輯
        const target = products.value.find((product) => product.id === form.value.id)
        target.name = form.value.name
        target.price = form.value.price
    } else {
        // 新增
        products.value.push({
            id: nextId++,
            name: form.value.name,
            price: form.value.price
        })
    }
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

const editProduct = (product) => {
    console.log("🚀 ~ editProduct ~ product:", product)

    // form.value.id = product.id
    // form.value.name = product.name
    // form.value.price = product.price
    form.value = { ...product }

}

const delProduct = (id) => {
    console.log("🚀 ~ delProduct ~ id:", id)
    products.value = products.value.filter((product) => product.id !== id)
    if (form.value.id === id) resetForm()
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