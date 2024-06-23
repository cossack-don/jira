<template>

  <Typography as="h3">Таски</Typography>

  <Button @click="f">Создать задачу</Button>

  <div style="display: flex; flex-wrap: wrap">


    <Card v-for="item in storeTasks.stateTasks" :key="item.id"
          :to="{name:'edit-task',params:{id:item.id}}"
          asLink
          style="margin-right: 15px;margin-top:15px">
      <template #header>Название задачи: {{ item.nameTask }}, ID - {{ item.id }}</template>
      <template #body>
        <div>
          <Typography as="p">Статус: {{ item.status ? item.status : 'пусто' }}</Typography>
          <Typography as="p">Тип задачи: {{ item.typeTask ? item.typeTask : 'пусто' }}</Typography>
          <Typography as="p">SP: {{ item.storyPoint }}</Typography>
          <Typography as="p">Version: {{ item.version ? item.version : 'пусто' }}</Typography>
          <Typography as="p">Описание: {{ item.descriotion ? item.descriotion : 'пусто' }}</Typography>
          <Typography as="p">Приоритет: {{ item.priority ? item.priority : 'пусто' }}</Typography>
          <Typography as="p">Дата создания: {{ item.dateCreate ? item.dateCreate : 'пусто' }}</Typography>
          <Typography as="p">Номер в списке drag-n-drop: {{ item.list ? item.list : 'пусто' }}</Typography>

          <Typography as="p">Tags: {{ item.tags ? item.tags : 'пусто' }}</Typography>
        </div>
      </template>

    </Card>

  </div>
</template>
<script lang="ts" setup>
import {Card, Typography} from '*/ui'

import Button from '../../../../pkgs/ui/Button.vue'


import {useRoute, useRouter} from "vue-router";
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";


// const listTasks = computed(() => storeBacklog.stateBacklogTasks.id === id ? storeListTasks.stateListTasks.list : [])
const storeTasks = useStoreTasks()
const route = useRoute()

const router = useRouter()
const f = () => router.push({name: 'create-task'})

// const isShowModal = ref(false)
const changeStateModal = (e) => {
  console.log(e, 3)

}


</script>


