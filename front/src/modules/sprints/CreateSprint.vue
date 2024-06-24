<script lang="ts" setup>
import {computed, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {Button, Select, Input, CheckBox} from '*/ui'
import {useStoreSprints} from "@/modules/sprints/useStoreSprints";
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";

const router = useRouter()

const storeSprints = useStoreSprints()
const handerCreateBoard = () => {
  console.log(dataForm)
  // const payload = {
  //   id: uid(LENGTH_UID),
  //   ...dataForm
  // }


  const g = {
    id: `21`,
    type: 'container',
    name: dataForm.nameSprint,
    props: {
      orientation: 'vertical',
      className: 'card-container',
    },
    children: dataForm.listTasks,
  }
  storeSprints.handlerAddNewSprintInState(g)
  router.push({name: 'sprints'})
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
  const checkElement = storeTasks.stateTasks.find((el) => el.id === id)
  checkElement.isChecked = isChecked

  console.log(checkElement, 3, dataForm)
  const listIdCheckedTasks = storeTasks.stateTasks.filter((el) => el.isChecked === true)

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
  nameSprint: '',
  dateCreate: new Date,
  listTasks: [],
})
const handlerUpdateField = (event: Event, field: string) => Object.assign(dataForm, {[`${field}`]: event})

// const storeSprints = useStoreSprints()
const storeTasks = useStoreTasks()
</script>

<template>
  <section>
    <!--    <pre>    {{ storeTasks.stateTasks }}</pre>-->
    <pre>{{ dataForm }}</pre>

    <div style="display: flex">
      <div style="width: 50%">

        <Input :model-value="dataForm.nameSprint" placeholder="Название доски"
               @update:model-value="handlerUpdateField($event,'nameSprint')"/>


        <Button @click="handerCreateBoard">Создать</Button>
      </div>
      <div style="width: 50%">

        <h3>Список задач</h3>
        <div v-for="item in storeTasks.stateTasks"
             style="background: #006fee; color:white; margin-bottom: 5px;padding: 15px">

          name - {{ item.nameTask }}
          <p>В какой день недели выполнять - {{ EnumDaysWeek[item.list] }}</p>
          <CheckBox :model-value="item.isChecked" @update:model-value="handlerUpdateCheckBox($event,item.id)"/>
        </div>
      </div>
    </div>
  </section>
</template>