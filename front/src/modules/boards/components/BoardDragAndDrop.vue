<template>
  <div class="demo">

    <div
        v-for="(EL,INDEX) in arr"
        :key="INDEX"
        class="drop-zone"
        @drop="onDrop($event, INDEX )"
        @dragenter.prevent
        @dragover.prevent
    >
      <h3>{{ EL }}</h3>
      <div
          v-for="item in getList(INDEX)"
          :key="item.id"
          class="drag-el"
          draggable="true"
          @dragstart="startDrag($event, item)"
          @drop="onDropSort($event, item)"
          @dragover.prevent="onOver($event)"
          @dragleave.prevent="onLeave($event)"
          @dragenter.prevent
      >
        {{ item.title }}
      </div>
    </div>
    <!--    <div-->
    <!--        class="drop-zone"-->
    <!--        @drop="onDrop($event, 2)"-->
    <!--        @dragenter.prevent-->
    <!--        @dragover.prevent-->
    <!--    >-->
    <!--      <h3>Понедельник</h3>-->
    <!--      <div-->
    <!--          v-for="item in getList(2)"-->
    <!--          :key="item.id"-->
    <!--          class="drag-el"-->
    <!--          draggable="true"-->
    <!--          @dragstart="startDrag($event, item)"-->
    <!--          @drop="onDropSort($event, item)"-->
    <!--          @dragover.prevent="onOver($event)"-->
    <!--          @dragleave.prevent="onLeave($event)"-->
    <!--          @dragenter.prevent-->
    <!--      >-->
    <!--        {{ item.title }}-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div-->
    <!--        class="drop-zone"-->
    <!--        @drop="onDrop($event, 3)"-->
    <!--        @dragenter.prevent-->
    <!--        @dragover.prevent-->
    <!--    >-->
    <!--      <h3>Done</h3>-->
    <!--      <div-->
    <!--          v-for="item in getList(3)"-->
    <!--          :key="item.id"-->
    <!--          class="drag-el"-->
    <!--          draggable="true"-->
    <!--          @dragstart="startDrag($event, item)"-->
    <!--          @drop="onDropSort($event, item)"-->
    <!--          @dragover.prevent="onOver($event)"-->
    <!--          @dragleave.prevent="onLeave($event)"-->
    <!--          @dragenter.prevent-->
    <!--      >-->
    <!--        {{ item.title }}-->
    <!--      </div>-->
    <!--    </div>-->


  </div>
</template>

<script lang="ts" setup>

import {serviceTasks} from "../../../../pkgs/api";


const arr = ['Беклог',
  'Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
]
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  sort: {
    type: Boolean,
    default: false
  }
})

const getList = list => (props.items ? props.items.filter(item => item.list == list) : [])

const getItemById = event => {
  const itemId = event.dataTransfer.getData('itemId')
  const item = props.items.find(item => item.id == itemId)
  return {item, itemId}
}

const onOver = event => (props.sort ? event.target.classList.add('on-over') : '')
const onLeave = event => (props.sort ? event.target.classList.remove('on-over') : '')

const onDropSort = (event, droppedItem) => {
  if (!props.sort) return
  onLeave(event)
  const {item, itemId} = getItemById(event)
  const itemPosition = props.items.findIndex(item => item.id == itemId)
  const droppedItemPosition = props.items.findIndex(item => item.id == droppedItem.id)
  props.items.splice(itemPosition, 1)
  props.items.splice(droppedItemPosition, 0, item)
}

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', item.id)
}

const onDrop = async (event, list) => {
  //тут будем отправлять запрос на бекенд

  const {item} = getItemById(event)

  item.list = list


  // await serviceTasks.updateByIdTask(item.id, item.list)
}
</script>

<style lang="scss" scoped>
.demo {
  //max-width: 600px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  //background-color: var(--c-bg-card, #242424);
  //color: var(--c-text, #ffffffde);
  gap: 30px;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
    margin: 15px auto;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
}

.drop-zone {
  flex: 1 1 50%;
  padding: 15px;
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }
}

.drag-el {
  padding: 10px 15px;
  //background-color: var(--c-border, #363636);
  border: 1px solid var(--c-border, #363636);
  border-radius: 8px;
  cursor: grab;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.on-over {
  border-color: #33a06f;
}
</style>