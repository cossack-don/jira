<template>
  <div>2
    <pre> <p>Название Спринта - {{ currentSprint.name }}</p></pre>

    <div v-for="task in currentSprint.children">
      <p> ID - {{ task.id }}</p>
      <p> Название задачи - {{ task.nameTask }}</p>
      <p> Описание - {{ task.description }}</p>
      <p> Приоритет - {{ task.priority }}</p>
      <p> SP - {{ task.storyPoint }}</p>
      <p> Дата создания - {{ task.dateCreate }}</p>
      <p> Статус - {{ task.status }}</p>
      <p> Тип задачи - {{ task.typeTask }}</p>
      <pre>      ID - {{ task }}</pre>


    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStoreSprints} from "@/modules/sprints/useStoreSprints";
import {computed} from "vue";
import {useRoute} from "vue-router";

const storeSprints = useStoreSprints()
const route = useRoute()
const currentSprint = computed(() => {

  return storeSprints.stateSprints.filter((el) => el.id === route.params.id)[0]
})


</script>