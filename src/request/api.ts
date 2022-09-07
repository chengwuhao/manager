/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 22:32:59
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 23:02:16
 * @FilePath: /mangement/src/request/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  request  from "./request";

interface adminLoginData {
    username: string
    password: string
}
interface adminLoginRes {
    code: number,
    data: {
        token: string,
        tokenHead: string
    },
    message: string
}

export const adminLogin = (data: adminLoginData):Promise<adminLoginRes> => request.post('/admin/login', data)