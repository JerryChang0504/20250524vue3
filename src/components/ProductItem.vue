<template>
    <div class="product-item">
        <p>{{ name }} - ${{ price }}</p>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    price: Number
})
</script>

<style scoped>
.product-item {
    padding: 10px;
    margin-bottom: 6px;
    border: 1px solid #ccc;
    border-radius: 6px;
}
</style>