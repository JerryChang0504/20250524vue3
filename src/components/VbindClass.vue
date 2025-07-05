<template>
    <div>
        <p>請選擇一個水果：</p>
        <button v-for="fruit in fruits" :key="fruit" :class="{ selected: selectedClass(fruit) }"
            @click="selectedFunc(fruit)">
            {{ fruit }}
        </button>
        <p>你選的是：{{ selectedFruits }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const fruits = ['蘋果', '香蕉', '葡萄']
const selectedFruits = ref('')

const selectedFunc = (fruit) => {
    selectedFruits.value = fruit
}

const selectedClass = (fruit) => selectedFruits.value === fruit

</script>

<style scoped>
button {
    margin: 4px;
    padding: 8px 12px;
    border: 1px solid #ccc;
}

.selected {
    background-color: orange;
    color: white;
    font-weight: bold;
}
</style>