<script lang="ts" setup>
import {computed} from "vue";

export interface Props {
  asLink?: boolean
  stylesCard?: {}
}

const props = withDefaults(defineProps<Props>(), {
  asLink: false,
  stylesCard: {}
})

const listNodeElements = {
  routerLink: 'routerLink',
  div: 'div'
}

const typeNodeElement = computed(() => {
  if (props.asLink) return listNodeElements.routerLink
  return listNodeElements.div
})
</script>

<template>
  <component :is="typeNodeElement" :class="stylesCard" class="wrapper-card">
    <h4 class="header">
      <slot name="header"></slot>
    </h4>
    <div>
      <slot name="body"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </component>


</template>

<style lang="scss" scoped>
.wrapper-card {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border: 2px solid #d4d4d8;
  border-radius: 8px;
  padding: 10px 15px;

  &:hover {
    transition: 0.5s;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
}

.header {
  margin-bottom: 15px;
}

.footer {
  margin-top: 15px
}
</style>