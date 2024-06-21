<template>
  <Typography as="h4">Редактирование задачи</Typography>
  <Button @click="router.push({name:'all-tasks'})">Назад</Button>

  <pre> {{ cardInfoById[0] }}</pre>
</template>

<script lang="ts" setup>
import {Typography, Button} from '*/ui/'
import {useRoute, useRouter} from "vue-router";
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";
import {computed} from "vue";

const router = useRouter()
const route = useRoute()
const storeTasks = useStoreTasks()

const cardInfoById = computed(() => storeTasks.stateTasks.filter((el) => el.id === Number(route.params.id)))

</script>