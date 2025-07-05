<template>
    <div class="product-item">
        <!-- <p>{{ name || item.name }} - ${{ price ||  }}</p> -->
        <p v-if="name && price">{{ name }} - ${{ price }}</p>
        <p v-else>{{ item.name }} - ${{ item.price }}</p>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    price: Number,
    item: Object
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