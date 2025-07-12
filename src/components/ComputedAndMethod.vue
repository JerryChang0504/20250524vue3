<template>
    <div>
        <h2>Computed & Method</h2>
        <button @click="add">新增商品</button>
        <button @click="remove">刪除商品</button>
        <table>
            <tbody>
                <tr>
                    <th>序號</th>
                    <th>商品</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>computed 庫存不足</th>
                    <th>Method 庫存不足</th>
                </tr>
                <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ index }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ InventoryByComputed[product.id] }}</td>
                    <td>{{ InventoryByMethod(product.quantity) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed, reactive } from "vue";
const products = reactive([
    { id: 1, name: 'product1', price: 100, quantity: 1 },
    { id: 2, name: 'product1', price: 200, quantity: 2 },
    { id: 3, name: 'product3', price: 300, quantity: 3 }])

const limitquantity = 2

const InventoryByComputed = computed(() => {
    const result = {}
    for (const p of products) {
        result[p.id] = p.quantity > limitquantity ? '✅' : '❌'
    }
    console.log("🚀 ~ InventoryByComputed ")
    return result
})

const InventoryByMethod = (quantity) => {
    console.log("🚀 ~ InventoryByMethod ")
    return quantity > limitquantity ? '✅' : '❌'
}

const add = () => {
    let newid = products.length + 1;
    products.push({ id: newid, name: `product${newid}`, price: 400, quantity: 4 })
}

const remove = () => {
    products.pop()
}

</script>

<style scoped>
/* //table 表格美化 */
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

button {
    border-radius: 5px;
    margin: 5px 5px;
    background-color: cornflowerblue;
}
</style>