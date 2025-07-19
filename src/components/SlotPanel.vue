<template>
    <div class="panel">
        <slot :name="active" />
    </div>
</template>

<script setup>
defineProps({
    active: String,
})

</script>

<style scoped>
.panel {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>