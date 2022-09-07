<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-30 20:53:48
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-07 18:06:27
 * @FilePath: /mangement/src/views/login/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="账号" prop="userName">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, toRefs, reactive } from "vue";
// import { login } from '@/request/api'
import { adminLogin } from '../../request/api'
import Cookie from 'js-cookie'

const validatePass = (rule: unknown, value: number, callback: (msg?: string) => void) => {
  if (!!value) {
    callback();
  } else {
    callback('你的密码呢？')
  }
}
// 校验规则
const rules = reactive({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur', min: 3, max: 10, }],
  password: [{ required: true, validator: validatePass, trigger: 'blur' }]
})



// interface ruleForm {
//   userName: string;
//   password: string | Number;
// }

const state = reactive({
  ruleForm: {
    username: '',
    password: ''
  },
});

const { ruleForm } = toRefs(state); // 加torefs是为了响应式

// const rules =

type subType = () => void;

// 获取ref对象
let ruleFormRef = ref();

const submitForm: subType = () => {
  console.log('ruleForm.value.', ruleForm.value)
  ruleFormRef.value.validate().then(() => {
    adminLogin({
      "username": ruleForm.value.username,
      "password": ruleForm.value.password
    }).then(res => {
      if (res.code === 200) {
        console.log(res.data, 'res')
        console.log(Cookie, 'cookies')
        // 存储token

      }
    })
  }).catch(() => {
    console.log('catch')
  })
}; 
</script>

<style lang="less" scoped>

</style>
