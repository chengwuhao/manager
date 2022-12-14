/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 20:11:17
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-07 23:38:01
 * @FilePath: /mangement/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"

createApp(App).use(router).use(createPinia()).mount('#app')
