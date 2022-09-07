/*
 * @Author: chengweiming 2977116097@qq.com
 * @Date: 2022-09-07 23:28:04
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-07 23:41:12
 * @FilePath: /mangement/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useStore = defineStore("main", {
    state: () => {
        return {
          // 所有这些属性都将自动推断其类型
          counter: 0,
          name: 'Eduardo',
          isAdmin: true,
        }
      },
})