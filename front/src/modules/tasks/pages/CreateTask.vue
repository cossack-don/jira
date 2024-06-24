<script lang="ts" setup>
import {computed, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import Button from '../../../../pkgs/ui/Button.vue'
import Select from '../../../../pkgs/ui/Select.vue'
import Input from '../../../../pkgs/ui/Input.vue'
import CheckBox from '../../../../pkgs/ui/CheckBox.vue'
import TextArea from '../../../../pkgs/ui/TextArea.vue'
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";
import {statusesSelect} from "*/ui/statusesSelect";
import {typesTasksSelect} from "*/ui/typesTasksSelect";
import {useStoreSprints} from "@/modules/sprints/useStoreSprints";

const valueInput = ref('')
const router = useRouter()


//
const nameBoard = ref('')
const handlerUpdateNameBoard = (v) => Object.assign(dataForm, {nameBoard: v})


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

  const listCheckedTasks = listTasks.value.filter((el) => el.isChecked === true)
  Object.assign(dataForm, {listTasks: listCheckedTasks})
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

const selected = ref({text: 'Высокий', value: 'top'})

const dataForm = reactive({
  nameTask: '',
  descriotion: '',
  dateCreate: new Date,
  storyPoint: '',
  priority: '',


  status: '',
  version: '',
  tags: [],
  typeTask: '',

  id: 1,
  "title": "Item A",
  "list": 7


})
const handlerUpdateField = (event: Event, field: string) => Object.assign(dataForm, {[`${field}`]: event})


const typesTask = ref(typesTasksSelect)

const selectedTypeTask = ref({text: 'Задача', value: 'task'},)
const handlerUpdateTypeTaskSelect = (e) => {
  selected.value = e
  Object.assign(dataForm, {typeTask: selected.value.value})
}

const statusesTask = ref(statusesSelect)

const updateSelect = (e) => {
  selected.value = e
  Object.assign(dataForm, {priority: selected.value.value})
}

const storeTasks = useStoreTasks()
const handlerCreateTask = () => {


  storeTasks.setStateTasks(dataForm)
  router.push({name: 'all-tasks'})
}

const storeSprints = useStoreSprints()

</script>

<template>
  <section style="display: flex;justify-content: center; align-items: center; height: 100vh">

    <!--    <pre>{{ dataForm }}</pre>-->
    2
    <div class="wrapper-form">
      <Input
          :model-value="dataForm.nameBoard"
          placeholder="Название задачи"
          text-label="Название задачи"
          @update:model-value="handlerUpdateField($event,'nameTask')"
      />
      <TextArea
          :model-value="dataForm.comment"
          placeholder="Описание задачи"
          text-label="Описание задачи"
          @update:model-value="handlerUpdateField($event,'descriotion')"
      />
      <Input
          :model-value="dataForm.storyPoint"
          placeholder="Story Point"
          text-label="Story Points"
          @update:model-value="handlerUpdateField($event,'storyPoint')"
      />

      <Select
          :items="statusesTask"
          :model-value="selected"
          text-label="Статус"
          @update:modelValue="updateSelect"
      />

      <Select
          :items="typesTask"
          :model-value="selectedTypeTask"
          text-label="Тип задачи"
          @update:modelValue="handlerUpdateTypeTaskSelect"
      />

      <Input
          :model-value="dataForm.storyPoint"
          placeholder="Version"
          text-label="Версия"
          type="number"
          @update:model-value="handlerUpdateField($event,'version')"
      />

      <Button @click="handlerCreateTask">Создать</Button>

    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper-form {
  width: 400px;
  background: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
}
</style>