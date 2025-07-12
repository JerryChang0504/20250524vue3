<template>
    <div class="timer-box">
        ⏱️ 計時中：{{ seconds }} 秒
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const seconds = ref(0)
let timer = null

onMounted(() => {
    console.log('🟢 Timer 啟動')
    timer = setInterval(() => {
        seconds.value++
    }, 1000)
})

onUnmounted(() => {
    console.log('🔴 Timer 停止')
    clearInterval(timer)
})


</script>

<style scoped>
.timer-box {
    margin-top: 16px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: #f0f9ff;
    border: 2px dashed #42b983;
    border-radius: 8px;
}
</style>