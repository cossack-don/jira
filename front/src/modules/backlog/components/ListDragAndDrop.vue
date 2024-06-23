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
      <Draggable v-for="column in scene.children" :key="column.id" style="background: red;margin-bottom:15px">
        <div :class="column.props.className">
          <div class="card-column-header">
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

export const lorem = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.`;

const columnNames = ['Backlog', 'Doing', 'Finished', 'fff', 'gg'];

const cardColors = [
  '#34495E',
  '#84B0DC',
  '#49627A',
  '#41B883',
  '#7096BB',
  '#97CAFC',
  '#6CC1C0',
  '#41B883',
  '#41B883',
  '#49627A',
];

const pickColor = () => {
  const rand = Math.floor(Math.random() * 10);
  return cardColors[rand];
};

export const generateItems = (count, creator) => {

  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};

// storeSprints.stateSprints
const storeSprints = useStoreSprints()
const children = [
  {
    id: `1`,
    type: 'container',
    name: 'Беклог',
    props: {
      orientation: 'vertical',
      className: 'card-container',
    },
    children: [
      {
        type: 'draggable',
        id: `1`,
        props: {
          className: 'card',
          style: {backgroundColor: 'gray'},
        },
        number: `Номер задачи 1`,
        data: 'описание задачи22',
      },
      {
        type: 'draggable',
        id: `1`,
        props: {
          className: 'card',
          style: {backgroundColor: 'gray'},
        },
        number: `Номер задачи 5`,
        data: 'описание задачи22',
      }
    ],
  },
  {
    id: `2`,
    type: 'container',
    name: 'Первый спринт',
    props: {
      orientation: 'vertical',
      className: 'card-container',
    },
    children: [{
      type: 'draggable',
      id: `1`,
      props: {
        className: 'card',
        style: {backgroundColor: 'gray'},
      },
      number: `Номер задачи 5`,
      data: 'описание задачи22',
    }],
  },
  {
    id: `3`,
    type: 'container',
    name: 'Второй Спринт',
    props: {
      orientation: 'vertical',
      className: 'card-container',
    },
    children: [{
      type: 'draggable',
      id: `1`,
      props: {
        className: 'card',
        style: {backgroundColor: 'gray'},
      },
      number: `Номер задачи 5`,
      data: 'описание задачи22',
    }],
  },
];

export const scene = {
  type: 'container',
  props: {
    orientation: 'horizontal',
  },
  children: storeSprints.stateSprints,

  // children: [
  //   {
  //     id: `column${0}`,
  //     type: 'container',
  //     name: columnNames[0],
  //     props: {
  //       orientation: 'vertical',
  //       className: 'card-container',
  //     },
  //     children: [{
  //       type: 'draggable',
  //       id: `1`,
  //       props: {
  //         className: 'card',
  //         style: {backgroundColor: 'gray'},
  //       },
  //       number: `Номер задачи 5`,
  //       data: 'описание задач111',
  //     }],
  //   },
  //   {
  //     id: `column${1}`,
  //     type: 'container',
  //     name: columnNames[1],
  //     props: {
  //       orientation: 'vertical',
  //       className: 'card-container',
  //     },
  //     children: [{
  //       type: 'draggable',
  //       id: `1`,
  //       props: {
  //         className: 'card',
  //         style: {backgroundColor: 'gray'},
  //       },
  //       number: `Номер задачи 5`,
  //       data: 'описание задачи22',
  //     }],
  //   },
  //   {
  //     id: `column${2}`,
  //     type: 'container',
  //     name: columnNames[2],
  //     props: {
  //       orientation: 'vertical',
  //       className: 'card-container',
  //     },
  //     children: [{
  //       type: 'draggable',
  //       id: `1`,
  //       props: {
  //         className: 'card',
  //         style: {backgroundColor: 'gray'},
  //       },
  //       number: `Номер задачи 5`,
  //       data: 'описание задачи22',
  //     }],
  //   }
  // ]
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