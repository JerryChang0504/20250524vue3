<template>
    <div class="product-item">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <div class="actions">

        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object
})

</script>

<style scoped>
.product-item {
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.actions button {
    margin-left: 8px;
}
</style>