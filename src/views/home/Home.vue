<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 21:04:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-03 18:27:00
 * @FilePath: /mangement/src/views/home/Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="wraper">
    <header class="header">
      <div>left</div>
      <div>middle</div>
      <div>footer</div>
    </header>
    <main class="main">
      <div v-for="item in 100">
        <div>{{ item }}</div>
        <div>老子不信我不成功</div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-item" v-for="item in footer">
        <div>{{ item.icon }}</div>
        <div>{{ item.text }}</div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

type Footer<T> = {
  icon: T,
  text: T
}

const footer = reactive<Footer<string>[]>([
  {
    icon: "1",
    text: "首页"
  },
  {
    icon: "2",
    text: "商品"
  },
  {
    icon: "3",
    text: "信息"
  },
  {
    icon: "4",
    text: "我的"
  }
])
</script>

<style lang="less" scoped>
.wraper {
  width: 100%;
  min-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-around;
    background-color: pink;
    padding: 5px;
  }

  .main {
    flex: 1;
    overflow: scroll;
  }

  .footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-top: 1px solid #ccc;
    background: green;
    .footer-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px;
      font-size: 22px;
      height: 80px;
    }
  }
}
</style>
