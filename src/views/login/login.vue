<!--
 * @Author: chengweiming 2977116097@qq.com
 * @Date: 2022-08-30 20:53:48
 * @LastEditors: chengweiming 2977116097@qq.com
 * @LastEditTime: 2022-09-08 00:32:01
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
import { ref, Ref, toRefs, reactive, onMounted } from "vue";
// import { login } from '@/request/api'
import type { FormRules } from 'element-plus'
import { getUserinfoApi, adminLogin } from '../../request/userinfo'
import Cookie from 'js-cookie'
import { useRouter } from "vue-router";
import { useUserinfoStore } from '../../store/userinfo'


  const userinfoSotre = useUserinfoStore()

  const { userinfo, token } = reactive(userinfoSotre)

  console.log(userinfo, token)


const validatePass = (rule: unknown, value: string, callback: (msg?: string) => void) => {
  if (!!value && (value.length > 8 || value.length < 4)) {
    callback("密码个数不正确");
  } else if(!!value) {
    callback('请输入密码')
  }
}
// 校验规则
const rules = reactive<FormRules>({
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
// 获取项目路由对象
let router = useRouter()

const submitForm: subType = () => {
  console.log('ruleForm.value.', ruleForm.value)
  ruleFormRef.value.validate().then(() => {
    adminLogin({
      "username": ruleForm.value.username,
      "password": ruleForm.value.password
    }).then(res => {
      if (res.code === 200) {
        // 存储token
        Cookie.set('token', res.data.tokenHead + res.data.token, { expires: 7 })

        getUserinfoApi().then(res => {
          // 跳转home页面
          if (res.code == 200) {
            console.log(JSON.stringify(res.data), 'res.data.menus')
            // 存到pinia里面
            Cookie.set('userinfo', JSON.stringify(res.data), { expires: 7 })

            // router.push('./home')
          }

        })
      }
    })
  }).catch(() => {
    console.log('catch')
  })
}; 
</script>

<style lang="less" scoped>

</style>
