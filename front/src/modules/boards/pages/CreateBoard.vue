<script lang="ts" setup>
import {computed, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {uid} from 'uid';
import {useStoreBoards} from "@/modules/boards/store/useStoreBoards";
import {LENGTH_UID} from "@/modules/boards/store/mockBoards";
import {Button, Select, Input, CheckBox} from '*/ui'

const router = useRouter()
const storeBoards = useStoreBoards()

const handerCreateBoard = () => {
  console.log(dataForm)
  const payload = {
    id: uid(LENGTH_UID),
    ...dataForm
  }
  storeBoards.handlerAddBoardInInitialState(payload)
  router.push({name: 'boards'})
}


const listTasks = ref([
  {
    "id": 1,
    "title": "ffafa",
    "list": 1,
    priority: '',
    version: '',
    tags: [],
    typeTask: '',
    storyPoint: '',
    descriotion: '',
    status: '',

  },
  {
    "id": 2,
    "title": "ffafafafaafa",
    "list": 1,
  }, {
    "id": 3,
    "title": "ffafa",
    "list": 4,
  }
].map((el) => {
  return {id: el.id, title: el.title, list: el.list, isChecked: false}
}))


const handlerUpdateCheckBox = (isChecked: Event, id: number) => {
  const checkElement = listTasks.value.find((el) => el.id === id)
  checkElement.isChecked = isChecked

  const listIdCheckedTasks = listTasks.value.filter((el) => el.isChecked === true).map((el) => el.id)

  Object.assign(dataForm, {listTasks: listIdCheckedTasks})
}

enum EnumPositionTasksInBoard {
  Backlog = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

enum EnumDaysWeek {
  '1' = 'Понедельник',
  '2' = 'Вторник',
  '3' = 'Среда'
}


const dataForm = reactive({
  nameBoard: '',
  dateCreate: new Date,
  listTasks: [],
})
const handlerUpdateField = (event: Event, field: string) => Object.assign(dataForm, {[`${field}`]: event})
</script>

<template>
  <section>
    <pre>{{ dataForm }}</pre>

    <div style="display: flex">
      <div style="width: 50%">

        <Input :model-value="dataForm.nameBoard" placeholder="Название доски"
               @update:model-value="handlerUpdateField($event,'nameBoard')"/>


        <Button @click="handerCreateBoard">Создать</Button>
      </div>
      <div style="width: 50%">

        <h3>Список задач</h3>
        <div v-for="item in listTasks" style="background: #006fee; color:white; margin-bottom: 5px;padding: 15px">
          <p>title - {{ item.title }}</p>
          {{ item }}
          <p>В какой день недели выполнять - {{ EnumDaysWeek[item.list] }}</p>
          <CheckBox :model-value="item.isChecked" @update:model-value="handlerUpdateCheckBox($event,item.id)"/>
        </div>
      </div>
    </div>
  </section>
</template>