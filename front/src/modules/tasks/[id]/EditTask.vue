<template>
  <Typography as="h4">Редактирование задачи</Typography>
  <Button @click="router.push({name:'all-tasks'})">Назад</Button>

  <pre> {{ currentTask[0] }}</pre>

  <div>
    <Input
        :model-value="currentTask[0]?.nameTask"
        placeholder="Название задачи"
        text-label="Название задачи"
        @update:model-value="handlerUpdateField($event,'nameTask')"
    />
    <TextArea
        :model-value="currentTask[0]?.description"
        placeholder="Описание задачи"
        text-label="Описание задачи"
        @update:model-value="handlerUpdateField($event,'description')"
    />
    <Input
        :model-value="currentTask[0]?.storyPoint"
        placeholder="Story Point"
        text-label="Story Points"
        @update:model-value="handlerUpdateField($event,'storyPoint')"
    />

    <Select
        :items="listPrioritySelect"
        :model-value="pickedPriorityInSelect"
        text-label="Приоритет"
        @update:modelValue="handlerUpdatePrioritySelect"
    />

    <Select
        :items="typesTasksSelect"
        :model-value="selectedTypeTask"
        text-label="Тип задачи"
        @update:modelValue="handlerUpdateTypeTaskSelect"
    />

    <Input
        :model-value="currentTask[0]?.version"
        placeholder="Version"
        text-label="Версия"
        type="number"
        @update:model-value="handlerUpdateField($event,'version')"
    />

    <Button @click="handlerCreateTask">Сохранить</Button>

  </div>


</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {Typography, Button, Input, Select, TextArea} from '*/ui/'
import {useRoute, useRouter} from "vue-router";
import {useStoreTasks} from "@/modules/tasks/useStoreTasks";
import {computed, ref} from "vue";
import {typesTasksSelect} from "*/ui/typesTasksSelect";
import {listPrioritySelect} from '*/ui/listPrioritySelect'

const storeTasks = useStoreTasks()
const router = useRouter()
const route = useRoute()

const currentTask = computed(() => storeTasks?.stateTasks.filter((el) => el.id === route.params.id))


const pickedPriorityInSelect = ref({})
onMounted(() => pickedPriorityInSelect.value = getCurrentObjectSelect2[0])
const getCurrentObjectSelect2 = listPrioritySelect.filter((item) => item.value === currentTask.value[0]?.priority)
const handlerUpdatePrioritySelect = (e) => Object.assign(currentTask.value[0], {priority: e.value})


const selectedTypeTask = ref({})
onMounted(() => selectedTypeTask.value = getCurrentObjectSelect[0])
const getCurrentObjectSelect = typesTasksSelect.filter((item) => item.value === currentTask.value[0]?.typeTask)
const handlerUpdateTypeTaskSelect = (e) => Object.assign(currentTask.value[0], {typeTask: e.value})


const handlerUpdateField = (event: Event, field: string | number) => Object.assign(currentTask.value[0], {[`${field}`]: event})

const handlerCreateTask = () => router.push({name: 'all-tasks'})
</script>