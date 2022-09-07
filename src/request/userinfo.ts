/*
 * @Author: chengweiming 2977116097@qq.com
 * @Date: 2022-09-07 22:56:46
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-07 23:56:42
 * @FilePath: /mangement/src/request/userinfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from './request'





type PromiseRes<T> = Promise<manageResult<T>>

interface manageResult<T = {}>  {
    code: number,
    data: T
}

// 登陆的ts
interface adminLoginData {
    username: string
    password: string
}

interface adminLoginRes  {
    token: string,
    tokenHead: string
}

// 获取用户信息的ts

interface adminLoginRes {
    code: number,
    data: {
        token: string,
        tokenHead: string
    },
    message: string
}

interface adminInfoRes {
    menus: []
}

export const adminLogin = (data: adminLoginData):PromiseRes<adminLoginRes> => request.post('/admin/login', data)

export const getUserinfoApi = ():PromiseRes<adminInfoRes> => request.get('/admin/info')
