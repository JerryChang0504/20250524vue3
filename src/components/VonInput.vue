<template>
    <input @keyup.enter="event" :placeholder="'請按鍵盤enter'">
    <br>
    <input @keyup.space="event" :placeholder="'請按鍵盤space'">
    <br>
    <input @keyup.delete="event" :placeholder="'請按鍵盤delete'">

</template>

<script setup>

function event(e) {
    alert(`你輸入的是：${e.key}`)
}
</script>

<style lang="scss" scoped></style>