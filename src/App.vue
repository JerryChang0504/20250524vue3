<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import HelloSetup from './components/HelloSetup.vue'
// import RefCount from './components/RefCount.vue'
// import ReactiveDemo from './components/ReactiveDemo.vue';
import ChangColor from './components/ChangColor.vue';
import ComputedDemo from './components/ComputedDemo.vue'
import ComputedAndMethod from './components/ComputedAndMethod.vue'
import ResigForm from './components/ResigForm.vue'
import ShppingCar from './components/ShppingCar.vue'
import TermsAgreement from './components/TermsAgreement.vue';
import VbindStyle from './components/VbindStyle.vue';
import VbindClass from './components/VbindClass.vue';
import VifDemo from './components/VifDemo.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import VifVshowDiff from './components/VifVshowDiff.vue'
import ItemObjectVfor from './components/ItemObjectVfor.vue'
import ArrayChangeDetection from './components/ArrayChangeDetection.vue'
import ProductList from './components/ProductList.vue'
import VonClick from './components/VonClick.vue'
import VonPrevent from './components/VonPrevent.vue'
import VonInput from './components/VonInput.vue'
import VmodelSample from './components/VmodelSample.vue'
import ProductManager from './components/ProductManager.vue'
import OnMounted from './components/OnMounted.vue'
import OnUnmounted from './components/OnUnmounted.vue'
import onUpdated from './components/onUpdated.vue'
import RefComponent from './components/RefComponent.vue'
import ParentComponent from './components/ParentComponent.vue'
import toDoList from './components/toDoList.vue'
import TabComponent from './components/TabComponent.vue'
import RegisterRunDown from './components/Register/RegisterRunDown.vue'
import WatchRef from './components/WatchRef.vue'
import WatchDeep from './components/WatchDeep.vue'
import WatchEffectComp from './components/WatchEffectComp.vue'

import { ref } from 'vue'

const userDate = { name: 'Mary', age: 18 }
const show = ref(false)

const btns = [{ text: '取消', color: 'secondary', onClick: () => onCancel() }, { text: '確認刪除', color: 'danger', onClick: () => onDelete() },]

function open() {
  show.value = true
}

function onCancel() {
  console.log('使用者取消了')
}
function onDelete() {
  console.log('刪除成功')
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloSetup :msg="'setup'" /> -->
      <!-- <HelloWorld :msg="'You did it !'" :greetingMessage="'你好'" :userForm="userDate" /> -->
    </div>
  </header>

  <main>

    <button @click="open">開啟AlertBox</button>
    <AlertBox v-model:visible="show" :title="'刪除確認'" :message="'確定要刪除這筆資料嗎？'" :buttons="btns" :size="'large'"
      :autoClose="true" :duration="1000" />


    <WatchEffectComp />
    <!-- <WatchRef /> -->
    <!-- <WatchDeep /> -->
    <!-- <RegisterRunDown /> -->
    <!-- <TabComponent /> -->
    <!-- <toDoList /> -->
    <!-- <ParentComponent /> -->
    <!-- <RefComponent /> -->
    <!-- <onUpdated /> -->
    <!-- <OnUnmounted /> -->
    <!-- <OnMounted /> -->
    <!-- <ProductManager /> -->
    <!-- <VmodelSample /> -->
    <!-- <VonInput /> -->
    <!-- <VonPrevent /> -->
    <!-- <VonClick /> -->
    <!-- <ArrayChangeDetection /> -->
    <!-- <ProductList /> -->
    <!-- <ItemObjectVfor /> -->
    <!-- <VifVshowDiff /> -->
    <!-- <ConditionalRendering /> -->
    <!-- <VifDemo /> -->
    <!-- <VbindClass /> -->
    <!-- <TermsAgreement /> -->
    <!-- <VbindClass /> -->
    <!-- <VbindStyle /> -->
    <!-- <ResigForm /> -->
    <!-- <ComputedAndMethod /> -->
    <!-- <ComputedDemo /> -->
    <!-- <ShppingCar /> -->
    <!-- <ReactiveDemo /> -->
    <!-- <ChangColor /> -->
    <!-- <RefCount /> -->
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
