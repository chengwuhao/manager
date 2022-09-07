/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-02 22:22:24
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-07 17:37:07
 * @FilePath: /mangement/src/request/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://120.24.64.5:8088/mall-admin',
    timeout: 15000
})

instance.interceptors.request.use(config => {
    // if(config.method === 'post' || config.method === 'POST') {
    //     const formdata = new FormData()
    //     for (const k in config.data) {
    //         formdata.append(k, config.data[k])
    //     }
    // }
    console.log(config, "config")
    return config
}, err => {
    return Promise.reject(err)
} )

instance.interceptors.response.use(result => {

    if(result.data.code && result.data.code === 500) {
        console.log('跨域了')
    }

    if(result.data.code === 401) {
        console.log('你没登陆')
    }
    console.log(result)
    return result.data
}, err => {
    console.log(err, 'err')
    return Promise.reject(err)
})

export default instance