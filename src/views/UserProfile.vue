<template>
    <div>
        <h3>個人檔案</h3>
        <p>目前檢視的是 ID 為：<strong>{{ id }}</strong> 的使用者</p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
    id: {
        type: String,
        required: true
    }
})
</script>
