<template>
    <div>
        <h2>購物車</h2>
        <div v-if="cart.length > 0">
            <p>您的購物車中有以下商品：</p>
            <ul>
                <li v-for="(product, index) in cart" :key="index">
                    {{ product.name }} - {{ product.price }} 元
                    <button @click="removeFromCart(index)">刪除</button>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>您的購物車是空的。</p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
const cart = reactive([
    { name: '蘋果', price: 5 },
    { name: '香蕉', price: 3 }
])

const removeFromCart = (index) => {
    cart.splice(index, 1)
}
</script>

<style scoped></style>