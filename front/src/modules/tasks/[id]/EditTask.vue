<template>
  <Typography as="h4">Редактирование задачи</Typography>
  <Button @click="router.push({name:'all-tasks'})">Назад</Button>

  <pre> {{ cardInfoById[0] }}</pre>

  <div>
    <Input
        :model-value="cardInfoById[0]?.nameTask"
        placeholder="Название задачи"
        text-label="Название задачи"
        @update:model-value="handlerUpdateField($event,'nameTask')"
    />
    <TextArea
        :model-value="cardInfoById[0]?.comment"
        placeholder="Описание задачи"
        text-label="Описание задачи"
        @update:model-value="handlerUpdateField($event,'descriotion')"
    />
    <Input
        :model-value="cardInfoById[0].storyPoint"
        placeholder="Story Point"
        text-label="Story Points"
        @update:model-value="handlerUpdateField($event,'storyPoint')"
    />

    <!--    <Select-->
    <!--        :items="statusesTask"-->
    <!--        :model-value="cardInfoById[0].priority.text"-->
    <!--        text-label="Статус"-->
    <!--        @update:modelValue="updateSelect"-->
    <!--    />-->


    <!--    {{ activeSelectTypesTask }}-->
    <Select
        :items="typesTask"
        :model-value="selectedTypeTask"
        text-label="Тип задачи"
        @update:modelValue="handlerUpdateTypeTaskSelect"
    />

    <Input
        :model-value="cardInfoById[0].storyPoint"
        placeholder="Version"
        text-label="Версия"
        type="number"
        @update:model-value="handlerUpdateField($event,'version')"
    />

    <Button @click="handlerCreateTask">Создать</Button>

  </div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {Typography, Button, Input, Select, TextArea} from '*/ui/'
import {useRoute, useRouter} from "vue-router";
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";
import {computed, reactive, ref} from "vue";
import {statusesSelect} from "*/ui/statusesSelect";
import {typesTasksSelect} from "*/ui/typesTasksSelect";

const storeTasks = useStoreTasks()
const router = useRouter()
const route = useRoute()

const currentTask = computed(() => {
  return storeTasks.stateTasks.filter((el) => el.id === Number(route.params.id))
})
const selected = ref({text: 'Высокий', value: 'top'})
const typesTask = ref(typesTasksSelect)

const selectedTypeTask = ref({})

const getCurrentTaskById = storeTasks?.stateTasks?.filter((el) => el.id === Number(route.params.id))
const getCurrentObjectSelect = typesTasksSelect.filter((item) => item.value === getCurrentTaskById[0].typeTask)

onMounted(() => {
  selectedTypeTask.value = getCurrentObjectSelect[0]
})

const handlerUpdateTypeTaskSelect = (e) => {
  selectedTypeTask.value = e
  Object.assign(currentTask.value[0], {typeTask: selectedTypeTask.value.value})
}

const updateSelect = (e) => {
  selected.value = e
  console.log(e, 3)
  Object.assign(currentTask[0], {priority: selected.value.value})
}
const statusesTask = ref(statusesSelect)


const cardInfoById = computed(() => storeTasks.stateTasks.filter((el) => el.id === Number(route.params.id)))

const handlerUpdateField = (event: Event, field: string) => Object.assign(currentTask[0], {[`${field}`]: event})

const handlerCreateTask = () => router.push({name: 'all-tasks'})
</script>