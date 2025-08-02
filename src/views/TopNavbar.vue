<template>
    <nav class="top-navbar">
        <router-link to="/">首頁</router-link>
        <router-link to="/about">關於</router-link>
        <router-link to="/users/list">使用者清單</router-link>
        <router-link :to="{ name: 'UserProfile', params: { id: 'u123' } }">個人檔案（u123）</router-link>
        <router-link to="/users/eduardo/posts/1">動態路由1</router-link>
        <router-link to="/users/eduardo/posts/20">動態路由20</router-link>
    </nav>
</template>

<style scoped>
.top-navbar {
    background-color: #333;
    color: white;
    padding: 12px;
    display: flex;
    gap: 20px;
}

.router-link-active {
    color: #ffd04b;
}
</style>
