
<template>
  <div class="container">
    <header class="header">
      tiy
    </header>
    <main class="main">
      <div class="left"></div>
      <div class="right"></div>
    </main>
    <footer class="footer">
      右侧
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
.container {
  position: relative;
  width: 100%;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: antiquewhite;
  }

  .main {
    position: absolute;
    left: 0;
    top: 70px;
    width: 100%;
    display: flex;
    height: calc(100vh - 70px);


    .left {
      width: 100px;
    }


    .right {
      flex: 1;
      height: 100%;
    }
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
