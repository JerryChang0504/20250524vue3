    <template>
        <div>
            <h2>子組件</h2>
            <p>{{ msg }}</p>
            <!-- <button @click="sayHello">Say Hello</button> -->
        </div>
    </template>

<script setup>
import { ref, defineExpose } from 'vue'
const msg = ref('這是一個子組件!')

const sayHello = () => {
    alert('Hello from Child Component!')
}
// 使用 defineExpose 暴露 sayHello 方法
defineExpose({ sayHello, msg })
</script>

