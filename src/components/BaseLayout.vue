<template>
    <div class="container">
        <header>
            <slot name="header"></slot> <!-- 標題內容放這裡 -->
        </header>
        <main>
            <slot></slot> <!-- 主要內容放這裡 -->
        </main>
        <footer>
            <slot name="footer"></slot> <!-- 底部內容放這裡 -->
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'


</script>

<style scoped></style>