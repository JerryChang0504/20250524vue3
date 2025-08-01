<template>

    <ProductFilter v-model:category="productFilterData.category" v-model:maxPrice="productFilterData.maxPrice"
        :categories="categoryOptions" @reset="resetFilter" />

    <h3>📦 商品清單</h3>
    <div class="table-wrapper">
        <table v-if="filteredProducts.length > 0">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>分類</th>
                    <th>價格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredProducts" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ $formatPrice(item.price, 0) }}</td>
                </tr>
            </tbody>
        </table>

        <p v-else class="no-data">❌ 找不到符合的商品</p>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import ProductFilter from './ProductFilter.vue'
import useFormat from '@/composables/useFormat'
const { $formatPrice } = useFormat()
console.log($formatPrice(1000))

const products = reactive([
    { id: 1, name: '無線滑鼠', category: '配件', price: 8000 },
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

// 根據篩選條件過濾商品
const filteredProducts = computed(() => {
    return products.filter((item) => {
        // 1. 判斷分類是否符合
        // 如果篩選分類是「全部」，代表不限制分類，全部都符合
        // 否則只要商品分類等於篩選分類才符合
        const matchCategory =
            productFilterData.category === '全部' || item.category === productFilterData.category
        // 2. 判斷價格是否符合
        // 商品價格必須小於等於篩選價格上限
        const matchPrice = item.price <= productFilterData.maxPrice
        // 3. 只有兩者都符合才保留該商品
        return matchCategory && matchPrice
    })
})

const productFilterData = reactive({
    category: '全部',
    maxPrice: 30000,
})

const resetFilter = () => {
    productFilterData.category = '全部'
    productFilterData.maxPrice = 30000
}

</script>

<style scoped>
container {
    width: 600px;
    margin: 0 auto;
}

.table-wrapper {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

.no-data {
    padding: 16px;
    text-align: center;
    color: #888;
}
</style>