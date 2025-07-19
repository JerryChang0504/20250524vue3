<template>
    <h2> Test components</h2>
    <p>{{ parm }}</p>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    obj: {
        type: Object,
        required: true,
        default() {
            return { message: 'hello' }
        }
    },
    nbr: {
        type: Number
    },
    msg: {
        type: String,
        validator(value, props) {
            return ['success', 'warning', 'danger'].includes(value)
        }
    }
})

const parm = props
console.log("🚀 ~ parm:", parm)


</script>

<style scoped></style>