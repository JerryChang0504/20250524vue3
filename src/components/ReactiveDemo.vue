    <script setup>
    import { reactive } from 'vue'
    const ar = reactive([
        { key: 1, value: 'a' },
        { key: 2, value: 'B' }
    ])

    /** reactive響應物件,Vue 會自動偵測其變化，
     *  並且使DOM即時做render
     */
    function add() {
        ar.push({ key: 3, value: 'c' })
    }

    /** 非reactive響應物件，DOM無法即時進行重新render
     *  下方採用JS一般的變量宣告
     */
    let noReactiveArray = [
        { key: 1, value: 'a' },
        { key: 2, value: 'B' }
    ]

    function addnoreactiveArray() {
        noReactiveArray.push({ key: 3, value: 'c' })
        console.log('實際上陣列有新增', noReactiveArray)
    }
</script>
    <template>
        <button @click="add">Array add</button>
        <table>
            <tr v-for="(item, index) in ar" :key="index">
                <td>{{ item.key }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>
        <!-- <pre>{{ ar }}</pre> -->
        <hr />
        <button @click="addnoreactiveArray">no_reactive_Array add</button>
        <table>
            <tr v-for="(item, index) in noReactiveArray" :key="index">
                <td>{{ item.key }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>
        <!-- <pre>{{ noReactiveArray }}</pre> -->
    </template>
<style scoped>
table,
th,
td {
    border: 1px solid;
    text-align: center;
    width: 20lvw;
}
</style>

