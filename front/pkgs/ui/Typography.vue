<template>
  <component :is="props.as">
    <slot/>
  </component>
</template>

<script lang="ts" setup>

import {computed} from "vue";

const f = computed(() => {


})

export interface Props {
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'p',
})
</script>