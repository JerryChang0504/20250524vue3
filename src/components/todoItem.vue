<template>
    <li>
        {{ text }}
        <button @click="remove">刪除</button>
    </li>
</template>

<script setup>
const props = defineProps(['text', 'index'])
const emit = defineEmits(['removeItem'])
const remove = () => {
    emit('removeItem', props.index)
}

</script>

<style scoped></style>