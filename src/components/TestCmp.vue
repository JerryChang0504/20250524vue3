<template>
    <h2> Test components</h2>
    <p>{{ parm }}</p>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    obj: {
        type: Object,
        required: true
    }
})

const parm = props.obj


</script>

<style scoped></style>