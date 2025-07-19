<template>
    <UserList>
        <!-- ✅ 接收子元件傳來的 user 變數 -->
        <template #default="{ userinfo }">
            <strong>{{ userinfo.name }}</strong>（{{ userinfo.email }})
        </template>
    </UserList>
</template>

<script setup>
import UserList from '@/components/UserList.vue'
</script>
