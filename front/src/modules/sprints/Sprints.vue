<template>

  <h3>Беклог</h3>

  <Button style="margin:10px" @click="handlerMoveToCreateBoard">Создать Спринт</Button>


  <button
      class="btn"
      type="button"
      @click="changeStateModal"
  >
    Open Modal!
  </button>

  <!--  <Modal-->

  <!--      @changeStateModal="changeStateModal"-->
  <!--  />-->
  <!--  {{ storeBoards.stateBoards }}-->
  <!--  <pre>{{ storeBacklog.stateBacklogTasks }}</pre>-->

  <!--  <div v-for="item in storeBacklog.stateBacklogTasks">-->
  <!--    <h4>{{ item.nameSprint }}</h4>-->

  <!--    <div v-for="el in item.list">-->
  <!--      {{ el.title }}-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  {{ storeSprints.stateSprints }}-->
  <ListDragAndDrop


  />
  <!--  <ListDragAndDrop-->
  <!--      :items="storeBacklog.stateBacklogTasks[0].list"/>-->
</template>
<script lang="ts" setup>

const fc = ref([
  {
    "id": 0,
    "title": "Item A",
    "list": 2
  },
  {
    "id": 2,
    "title": "Item C",
    "list": 3
  },
  // {
  //   "id": 3,
  //   "title": "Item D",
  //   "list": 2
  // },
  // {
  //   "id": 1,
  //   "title": "Item B",
  //   "list": 2
  // }
])
import {useStoreSprints} from "@/modules/sprints/useStoreSprints";

const storeSprints = useStoreSprints()
import ListDragAndDrop from '@/modules/backlog/components/ListDragAndDrop.vue'
import {Button} from '*/ui'
import {ref} from "vue";
// import Modal from '../../../../pkgs/ui/Modal.vue'
import {useStoreBacklog} from "@/modules/backlog/store/useStoreBacklog";
import {useRouter} from "vue-router";
import {useStoreBoards} from "@/modules/boards/store/useStoreBoards";


// const listTasks = computed(() => storeBacklog.stateBacklogTasks.id === id ? storeListTasks.stateListTasks.list : [])

const storeBacklog = useStoreBacklog()
const router = useRouter()
const f = () => router.push({name: 'create-task'})
const storeBoards = useStoreBoards()
// const isShowModal = ref(false)
const changeStateModal = (e) => {
  console.log(e, 3)

}

const handlerMoveToCreateBoard = () => {
  router.push({name: 'create-sprint'})
}
</script>


