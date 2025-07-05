<template>
    <p>text is: {{ text }}</p>
    <input :value="text" @input="(event) => (text = event.target.value)" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <p></p>
    <hr>
    <div>
        <h3>選擇你的興趣：</h3>
        <!-- <label><input type="checkbox" value="閱讀" v-model="interests" /> 閱讀</label>
        <label><input type="checkbox" value="運動" v-model="interests" /> 運動</label>
        <label><input type="checkbox" value="旅行" v-model="interests" /> 旅行</label> -->

        <label v-for="interest in interestList" :key="interest.id">
            <input type="checkbox" :value="interest.code" v-model="interests" /> {{ interest.name }}
        </label>
        <p>你選擇的興趣：{{ interests.join(', ') }}</p>
    </div>
    <hr>
    <div>
        <h3>選擇性別：</h3>
        <label><input type="radio" value="男" v-model="gender" /> 男</label>
        <label><input type="radio" value="女" v-model="gender" /> 女</label>

        <p>你選擇的性別：{{ gender }}</p>
    </div>

    <hr>
    <div>
        <h3>選擇國家：</h3>
        <select class="selectClass" v-model="country">
            <option disabled value="">請選擇</option>
            <option value="tw">台灣</option>
            <option value="jp">日本</option>
            <option value="us">美國</option>
        </select>

        <p>你選擇的國家代碼：{{ country }}</p>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const message = ref('')
const text = ref('')

const interests = ref([])
const interestList = ref([
    { id: 1, name: '閱讀', code: 'Reading' },
    { id: 2, name: '運動', code: 'Sports' },
    { id: 3, name: '旅行', code: 'Travel' },
])

const gender = ref('')
const genderList = ref([
    { value: 'male', label: '男' },
    { value: 'female', label: '女' },
])

const country = ref('')
const countryOptions = ref([
    { numeric: 158, code: 'tw', name: '台灣' },
    { numeric: 392, code: 'jp', name: '日本' },
    { numeric: 840, code: 'us', name: '美國' },
    { numeric: 410, code: 'kr', name: '韓國' },
    { numeric: 156, code: 'cn', name: '中國' },
    { numeric: 826, code: 'gb', name: '英國' },
    { numeric: 250, code: 'fr', name: '法國' },
    { numeric: 276, code: 'de', name: '德國' },
])
</script>

<style scoped>
.selectClass {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: #333;
    width: 200px;
}
</style>