<template>
  <h3>Беклог</h3>

  <Button style="margin:10px" @click="handlerMoveToCreateBoard">Создать Спринт</Button>

  <ListDragAndDrop/>

</template>
<script lang="ts" setup>
import ListDragAndDrop from '@/modules/sprints/ListDragAndDrop.vue'
import {Button} from '*/ui'
import {useRouter} from "vue-router";


const router = useRouter()
const f = () => router.push({name: 'create-task'})


const handlerMoveToCreateBoard = () => {
  router.push({name: 'create-sprint'})
}
</script>


