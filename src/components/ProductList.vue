<template>
    <div class="product-list">
        <h2>📦 商品清單</h2>
        <ProductItem v-for="product in products" :key="product.id" :name="product.name" :price="product.price" />

        <ProductItem v-for="product in products" :key="product.id" :item="product" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductItem from './ProductItem.vue';
const products = ref([
    { id: 1, name: '滑鼠', price: 500 },
    { id: 2, name: '鍵盤', price: 800 },
    { id: 3, name: '顯示器', price: 3000 }
])
</script>

<style scoped>
.product-list {
    max-width: 400px;
    margin: auto;
}
</style>