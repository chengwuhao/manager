/*
 * @Author: chengweiming 2977116097@qq.com
 * @Date: 2022-09-08 00:08:30
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-08 00:25:43
 * @FilePath: /mangement/src/store/userinfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia"

export const useUserinfoStore = defineStore('userinfo', {
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
      return {
        // 所有这些属性都将自动推断其类型
        userinfo: {},
        token: '',
        number: 0
      }
    },
    getters: {},
    actions: {}
  })