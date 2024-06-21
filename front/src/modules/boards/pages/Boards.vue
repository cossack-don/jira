<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useStoreBoards} from '@/modules/boards/store/useStoreBoards'
import {RouterLink, useRouter,} from 'vue-router'
import Card from '../../../../pkgs/ui/Card.vue'
import {serviceBoards} from "../../../../pkgs/api";


const storeBoards = useStoreBoards()


onMounted(async () => {

  // const {data} = await serviceBoards.getList()
  // await storeBoards.setStateBoards(data)


})

import Input from '../../../../pkgs/ui/Input.vue'
import TextArea from '../../../../pkgs/ui/TextArea.vue'
import Select from '../../../../pkgs/ui/Select.vue'

const vText = ref('')
const updateArea = (e) => {
  vText.value = e
}

const v = ref('')
const updateInput = (e) => {
  v.value = e
}

const focusInput = (e) => console.log(e, 'focus')
const blurInput = (e) => console.log(e, 'blur')

const selected = ref({text: 'One', value: 'A'},)

const items = ref([
  {text: 'One', value: 'A'},
  {text: 'Two', value: 'B'},
  {text: 'Three', value: 'C'}
])

const updateSelect = (e) => selected.value = e

import Button from '../../../../pkgs/ui/Button.vue'

const {push} = useRouter()
const handlerMoveToCreateBoard = () => {
  push({name: 'create-board'})
}
</script>

<template>

  <div>

    <Button style="margin:10px" @click="handlerMoveToCreateBoard">Создать Board</Button>

    <div style="display: flex; flex-wrap: wrap">
      <Card v-for="item in storeBoards.stateBoards" :key='item.id' :stylesCard="['global-mr-15','global-mb-15']"
            :to="{name:'board', params:{id:item.id}}" asLink>
        <template #header>
          {{ item.nameBoard }}
        </template>

        <template #body>
          uid - {{ item.id }}
        </template>

        <template #footer>
          footer
        </template>
      </Card>
    </div>
  </div>
</template>