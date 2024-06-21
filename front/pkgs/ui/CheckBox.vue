<template>
  <div>
    {{ props.modelValue }}
    <input
        :checked="props.modelValue"
        :class="{'error-input':props.isError}"
        :disabled="props.isDisabled"
        class="checkbox"
        type="checkbox"
        @change="handlerUpdateValueInput"
    >
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: boolean,
  textError?: string
  isError?: boolean
  isDisabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  isDisabled: false,
})

const emit = defineEmits(['update:modelValue'])

const handlerUpdateValueInput = (e: Event) => emit('update:modelValue', e.target.checked)
</script>

<style lang="scss" scoped>
.checkbox {
  width: 200px;
  padding: 8px 10px;
  border-radius: 4px;
  border: solid 2px #e4e4e7;
}

.error-message {
  color: #f31260;
}

.error-checkbox {
  border: solid 2px #f31260;
}

.checkbox:focus {
  border: solid 2px #006fee;
}

</style>