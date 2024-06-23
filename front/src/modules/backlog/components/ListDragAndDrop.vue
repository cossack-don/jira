<template>
  <div>
    <Container
        :drop-placeholder="upperDropPlaceholderOptions"
        drag-handle-selector=".column-drag-handle"
        orientation="horizontal"
        style="display: flex; flex-direction: column"
        @drop="onColumnDrop($event)"
        @drag-start="dragStart"
    >
      <pre>  {{ scene.children.id }}</pre>
      <Draggable v-for="column in scene.children" :key="column.id" style="background: red;margin-bottom:15px">
        <div :class="column.props.className">
          <div class="card-column-header" @click="handlerEditSprint(column.id)">
            <span class="column-drag-handle">&#x2630;</span>
            {{ column.name }}
          </div>
          <Container
              :drop-placeholder="dropPlaceholderOptions"

              :get-child-payload="getCardPayload(column.id)"
              drag-class="card-ghost"
              drop-class="card-ghost-drop"
              group-name="col"

              @drop="(e) => onCardDrop(column.id, e)"
              @drag-start="(e) => log('drag start', e)"
              @drag-end="(e) => log('drag end', e)"
          >
            <Draggable v-for="card in column.children" :key="card.id" style="margin-bottom: 15px">
              <div :class="card.props.className" :style="card.props.style">
                <h3>Task # {{ card.number }}</h3>
                <p class="card-text">{{ card.data }}</p>
              </div>
            </Draggable>
          </Container>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script>
import {Container, Draggable} from "vue-dndrop";
import {useStoreSprints} from "@/modules/sprints/useStoreSprints";
import {useRouter} from "vue-router";

const storeSprints = useStoreSprints()

export const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal',
  },
  children: storeSprints.stateSprints,
};


function applyDrag(arr, dragResult) {
  const {removedIndex, addedIndex, payload} = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

export default {
  name: "Cards",

  components: {Container, Draggable},

  data() {
    return {
      scene,
      upperDropPlaceholderOptions: {
        className: "cards-drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
    };
  },

  methods: {
    handlerEditSprint(id) {
      console.log(id)
      this.$router.push({name: 'edit-sprint', params: {id}})
      // this.router.push({name: 'edit-sprint', params: {id: id}})
    },
    onColumnDrop(dropResult) {
      const scene = Object.assign({}, this.scene);
      scene.children = applyDrag(scene.children, dropResult);
      this.scene = scene;
    },

    onCardDrop(columnId, dropResult) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene);
        const column = scene.children.filter((p) => p.id === columnId)[0];
        const columnIndex = scene.children.indexOf(column);

        const newColumn = Object.assign({}, column);
        newColumn.children = applyDrag(newColumn.children, dropResult);
        scene.children.splice(columnIndex, 1, newColumn);

        this.scene = scene;
      }
    },

    getCardPayload(columnId) {
      return (index) => {
        return this.scene.children.filter((p) => p.id === columnId)[0].children[
            index
            ];
      };
    },

    dragStart() {
      console.log("drag started");
    },

    log(...params) {
      console.log(...params);
    },
  },
};
</script>