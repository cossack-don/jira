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
          style="display: flex; justify-content: space-between"
          @dragstart="startDrag($event, item)"
          @drop="onDropSort($event, item)"
          @dragover.prevent="onOver($event)"
          @dragleave.prevent="onLeave($event)"
          @dragenter.prevent
      >


        Название: {{ item.nameTask }}
        Приоритет: {{ item.priority }}
        Дата создания: {{ item.dateCreate }}

        <Badge> SP: {{ item.storyPoint }}</Badge>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Badge from '../../../../pkgs/ui/Badge.vue'

const formatDate = (date: string | Date) => {
  const formatter = new Intl.DateTimeFormat('ru-RU', {dateStyle: 'short'});
  const formattedDate = formatter.format(date);

  return formattedDate
}
const arr = ['1-й спринт',
  '2-й спринт', "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Беклог"
]
const {items, sort} = defineProps({
  items: {
    type: Array,
    required: true
  },
  sort: {
    type: Boolean,
    default: false
  }
})

const getList = list => (items ? items.filter(item => item.list == list) : [])

const getItemById = event => {
  const itemId = event.dataTransfer.getData('itemId')
  const item = items.find(item => item.id == itemId)
  return {item, itemId}
}

const onOver = event => (sort ? event.target.classList.add('on-over') : '')
const onLeave = event => (sort ? event.target.classList.remove('on-over') : '')

const onDropSort = (event, droppedItem) => {
  if (!sort) return
  onLeave(event)
  const {item, itemId} = getItemById(event)
  const itemPosition = items.findIndex(item => item.id == itemId)
  const droppedItemPosition = items.findIndex(item => item.id == droppedItem.id)
  items.splice(itemPosition, 1)
  items.splice(droppedItemPosition, 0, item)
}

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', item.id)
}

const onDrop = (event, list) => {
  //тут будем отправлять запрос на бекенд

  const {item} = getItemById(event)
  item.list = list
}
</script>

<style lang="scss" scoped>
.demo {
  //max-width: 600px;
  padding: 30px;
  //display: flex;
  //justify-content: space-between;
  margin: 30px auto;
  //background-color: var(--c-bg-card, #242424);
  //color: var(--c-text, #ffffffde);
  gap: 30px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  margin-bottom: 15px;
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
  margin-bottom: 15px;

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