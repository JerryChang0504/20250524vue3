<template>
    <div class="filter">
        <label>
            分類：
            <select v-model="localCategory">
                <option v-for="cat in categories" :key="cat" :value="cat">
                    {{ cat }}
                </option>
            </select>
        </label>

        <label>
            價格上限：
            <input type="number" v-model.number="localMaxPrice" />
        </label>

        <button @click="reset">🔁 重設</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    category: String,
    categories: Array
})

const localCategory = ref(props.category)

</script>

<style scoped>
.filter {
    width: 600px;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    align-items: center;
}
</style>