<script lang="ts" setup>
import {useStoreBoards} from '@/modules/boards/store/useStoreBoards'
import {useRoute} from 'vue-router'
import BoardDragAndDrop from '@/modules/boards/components/BoardDragAndDrop.vue'
import {computed, onMounted, onUpdated, ref} from "vue";
import {useStoreListTasks} from "@/modules/boards/store/useStoreListTasks";
import {serviceTasks} from "../../../../pkgs/api";
import {} from '@/modules/boards/store/'

const storeBoards = useStoreBoards()

const id = useRoute().params?.id

const storeListTasks = useStoreListTasks()

const handlerGetInfoCurrentBoard = async (id: string) => {
  console.log(id, 3)


  // const {data} = await serviceTasks.getById(id)
  //
  // await storeListTasks.handlerUpdateStateListTasks(data)
}
onMounted(async () => {
  await handlerGetInfoCurrentBoard(id)
})

// onUpdated(async () => {
//   await handlerGetInfoCurrentBoard(id)
// })

const listTasks = computed(() => {
  console.log(storeListTasks.stateListTasks)

  if (storeListTasks.stateListTasks.list === undefined) return []
  if (storeListTasks.stateListTasks.id === id) return storeListTasks.stateListTasks.list
  return []

})


</script>

<template>

  <div>
    <div class="badge">
      ID Board - {{ id }}
    </div>
    <BoardDragAndDrop :items="listTasks"/>

  </div>
</template>

<style>
.badge {
  width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  background: mediumvioletred;
  color: white;
}
</style>