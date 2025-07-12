    <template>
        <div>
            <h1>父組件</h1>
            <ChildComponent ref="child" />
            <button @click="callChildMethod">呼叫子組件方法</button>
        </div>
    </template>

<script setup name="ParentComponent">
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const child = ref()

// 呼叫子組件方法
const callChildMethod = () => {
    // 使用 ref 的方式呼叫子組件方法
    if (child.value) {
        child.value.sayHello()
        console.log("🚀 ~ child.value.msg:", child.value.msg)
    }
}
</script>

<style>
/* 添加一些樣式 */
button {
    margin-top: 10px;
}
</style>

