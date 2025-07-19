<template>

    <ProductFilter :categories="categoryOptions" />
</template>

<script setup>
import { reactive, computed } from 'vue'

import ProductFilter from './ProductFilter.vue'


const products = reactive([
    { id: 1, name: '無線滑鼠', category: '配件', price: 800 },
    { id: 2, name: '筆記型電腦', category: '筆電', price: 24000 },
    { id: 3, name: '藍牙耳機', category: '配件', price: 1500 },
    { id: 4, name: '智慧手機', category: '手機', price: 20000 },
    { id: 5, name: 'USB-C 集線器', category: '配件', price: 900 },
    { id: 6, name: '平板電腦', category: '平板', price: 18000 },
    { id: 7, name: '螢幕掛燈', category: '配件', price: 1200 },
    { id: 8, name: '觸控筆', category: '配件', price: 600 },
    { id: 9, name: '摺疊手機', category: '手機', price: 42000 },
    { id: 10, name: '桌上型電腦', category: '桌機', price: 30000 },
    { id: 11, name: '電競筆電', category: '筆電', price: 55000 },
    { id: 12, name: '行動電源', category: '配件', price: 1000 },
    { id: 13, name: '智慧手錶', category: '穿戴', price: 9500 },
    { id: 14, name: 'VR 頭戴裝置', category: '穿戴', price: 28000 },
    { id: 15, name: '桌面喇叭', category: '配件', price: 2200 },
])

// 由 products 自動抽出唯一分類，加上「全部」
const categoryOptions = computed(() => {
    const set = new Set(products.map((p) => p.category))
    return ['全部', ...set]
})
</script>

<style scoped></style>