<template>
    <div class="divbox" :style="{ backgroundColor: box.color}">
        <p>次數:{{ count }}</p>
        <button @click="changeColor">變更顏色</button>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const count = ref(0)

const box = reactive({
    color:'blue'
})

const changeColor = () => {
    count.value++
   box.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

</script>
<style scoped>
.divbox {
  margin: 20px;
  padding: 20px;
  color: #fff;
}
</style>