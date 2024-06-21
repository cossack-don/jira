<template>
  <component :is="props.as">
    <slot/>
  </component>
</template>

<script lang="ts" setup>
interface Props {
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>