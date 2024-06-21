<template>
  <div :style="{background:pickedColor}" class="badge">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";

export interface Props {
  color?: string
}

const pickedColor = computed(() => {

  if (props.color === 'gray') return 'var(--gray)'
  return
})
const props = withDefaults(defineProps<Props>(), {
  color: 'var(--gray)',

})
</script>
<style scoped>
.badge {
  padding: 5px 10px;
  width: max-content;
  color: #FFFFFF;
  border-radius: 8px;
  background: #17c964;
}
</style>