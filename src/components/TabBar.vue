<template>
    <button v-for="tab in tabs" :key="tab.value" @click="selected = tab.value">{{ tab.lable }}</button>
    <SlotPanel :active="selected">
        <template #[selected]>
            <p>{{ selected }}</p>
        </template>
    </SlotPanel>
</template>

<script setup>
import { ref } from 'vue'
import SlotPanel from './SlotPanel.vue';

const selected = ref('profile')
const tabs = [
    { lable: '個人資料', value: 'profile' },
    { lable: '設定', value: 'settings' },
    { lable: '聯絡資訊', value: 'contact' },
]
</script>

<style scoped></style>