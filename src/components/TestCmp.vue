<template>
    <h2> Test components</h2>
    <p>{{ parm }}</p>

    <button @click="click">點我測試</button>
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
            return props.validvalue.includes(value)
        }
    },
    validvalue: {
        type: Array,
        default: ['success', 'warning', 'danger'],
    },
    click: {
        type: Function,
        default: () => () => {
            console.log('Default function')
        }
    }

})

const parm = props


</script>

<style scoped></style>