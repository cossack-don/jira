<script lang="ts" setup>
import {Input, Button} from '*/ui/'
import {ref} from "vue";
import {useRouter} from "vue-router";

const {push} = useRouter()
const login = ref('')
const handlerUpdateLogin = (v) => login.value = v

const password = ref('')
const handlerUpdatePassword = (v) => password.value = v

const handlerFormData = () => {
  console.log({
    login: login.value,
    password: password.value
  })
  push({name: 'boards'})
}
</script>

<template>
  <div class="wrapper-form">
    <Input :modelValue="login" placeholder="Логин" textLabel="Логин" @update:modelValue="handlerUpdateLogin"/>
    <Input :modelValue="password" placeholder="Пароль" textLabel="Пароль" @update:modelValue="handlerUpdatePassword"/>
    <Button class="button" @click="handlerFormData">Вход</Button>
  </div>
</template>

<style scoped>
.wrapper-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.button {
  margin-top: 20px;
}
</style>