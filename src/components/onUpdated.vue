<template>
    <div class="chat-container">
        <h2>💬 模擬聊天室</h2>

        <div class="chat-box" ref="chatBox">
            <div v-for="(msg, index) in messages" :key="index" :class="['msg', msg.from === 'user' ? 'user' : 'bot']">
                <p class="text">{{ msg.text }}</p>
                <small class="timestamp">{{ msg.time }}</small>
            </div>
        </div>

        <form @submit.prevent="sendMessage" class="input-area">
            <input v-model="inputText" placeholder="輸入訊息..." />
            <button type="submit">送出</button>
        </form>
    </div>
</template>

<script setup>

import { ref, onUpdated } from 'vue'
const getNow = () => new Date().toLocaleTimeString()

const messages = ref([{ text: '您好！請問有什麼可以幫忙的嗎？', from: 'bot', time: getNow() }])
const inputText = ref('')
const chatBox = ref(null)


const sendMessage = () => {
    if (!inputText.value) return
    messages.value.push({
        text: inputText.value.trim(),
        form: 'user',
        time: getNow()
    })

    inputText.value = ''

    setTimeout(() => {
        messages.value.push({
            text: '測試回應',
            form: 'bot',
            time: getNow()
        })
    }, 1000)
}

onUpdated(() => {
    const el = chatBox.value
    if (el) {
        el.scrollTop = el.scrollHeight
    }
})


</script>

<style scoped>
.chat-container {
    max-width: 500px;
    margin: 40px auto;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 12px;
    background: #fff;
}

h2 {
    text-align: center;
    margin-bottom: 16px;
}

.chat-box {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ddd;
    padding: 12px;
    background: #f9f9f9;
    border-radius: 8px;
}

.msg {
    margin-bottom: 12px;
    padding: 8px;
    border-radius: 6px;
    max-width: 75%;
    position: relative;
}

.msg.user {
    background-color: #74f313;
    align-self: flex-end;
    margin-left: auto;
}

.msg.bot {
    background-color: #e3e3e3;
    align-self: flex-start;
    margin-right: auto;
}

.text {
    margin: 0;
}

.timestamp {
    font-size: 0.75rem;
    color: #666;
    display: block;
    margin-top: 4px;
    text-align: right;
}

.input-area {
    display: flex;
    gap: 8px;
    margin-top: 16px;
}

input {
    flex: 1;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

button {
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #369a6e;
}
</style>