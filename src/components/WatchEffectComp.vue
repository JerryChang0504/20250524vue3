    <template>
        <div>
            <input v-model="count" type="number" />
            <p>Count: {{ count }}</p>
            <p>Message: {{ message }}</p>
        </div>
        <!-- {{ guess }} -->
    </template>

<script setup>
import { ref, watchEffect } from 'vue'
// 假設猜數字範圍為 0-100
const guess = ref(Math.floor(Math.random() * 100))

const count = ref(0)
const message = ref('')
// 限制count輸入數字範圍, 0-100
watchEffect(() => {
    if (count.value < 0) {
        count.value = 0
    } else if (count.value > 100) {
        count.value = 100
    }
})

// 使用 watchEffect 自動更新 message
watchEffect(() => {
    if (count.value > guess.value) {
        message.value = 'Too high!'
    } else if (count.value < guess.value) {
        message.value = 'Too low!'
    } else {
        message.value = 'Correct!'
    }
})
</script>
