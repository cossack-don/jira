<template>
  <button :disabled="props.disabled" class="button" @click="emit('click')">
    <slot/>
  </button>

</template>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'click'): void
}>()

export interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

enum EnumSizes {
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg'
}
</script>
<style lang="scss" scoped>
.button {
  background: #006fee;
  color: #ffffff;
  padding: 8px 40px;
  border: none;
  border-radius: 8px;
}

.button:hover {
  cursor: pointer;
  background: #3957d5;
}

.button:disabled,
.button[disabled] {
  cursor: auto;
  background: #b4b3b3;
}
</style>

