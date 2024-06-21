<template>

  <h3>Беклог</h3>

  <Button @click="f">Создать задачу</Button>


  <button
      class="btn"
      type="button"
      @click="changeStateModal"
  >
    Open Modal!
  </button>

  <Modal

      @changeStateModal="changeStateModal"
  />

  <ListDragAndDrop
      :items="storeBacklog.stateBacklogTasks[0].list"/>

</template>
<script lang="ts" setup>
import ListDragAndDrop from '@/modules/backlog/components/ListDragAndDrop.vue'
import Button from '../../../../pkgs/ui/Button.vue'
import {ref} from "vue";
import Modal from '../../../../pkgs/ui/Modal.vue'
import {useStoreBacklog} from "@/modules/backlog/store/useStoreBacklog";
import {useRouter} from "vue-router";


// const listTasks = computed(() => storeBacklog.stateBacklogTasks.id === id ? storeListTasks.stateListTasks.list : [])

const storeBacklog = useStoreBacklog()
const router = useRouter()
const f = () => router.push({name: 'create-task'})

// const isShowModal = ref(false)
const changeStateModal = (e) => {
  console.log(e, 3)

}


</script>


