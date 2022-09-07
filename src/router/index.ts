/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 20:41:38
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 21:07:37
 * @FilePath: /mangement/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
// import vueRouter from 'vue-router'
// import Vue from 'vue
// Vue.use(vueRouter) 调用参数的intall方法 或者直接调用参数 Vue.prototype.$router/$route

// const router = new vueRouter((})

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        // component: () => import('@/views/login/login')
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router