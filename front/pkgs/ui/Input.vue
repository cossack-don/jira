<template>
  <div>
    <p style="margin-bottom: 4px">{{ props.textLabel }}</p>
    <input
        :class="{'error-input':props.isError}"
        :disabled="props.isDisabled"
        :placeholder="props.placeholder"
        :type="props.type"
        :value="props.modelValue"
        class="input"
        @blur="handlerBlurInput"
        @focus="handlerFocusInput"
        @input="handlerUpdateValueInput"
    >
    <p v-if="props.isError" :class="{'error-message':props.isError}" style="margin-bottom: 4px">{{
        props.textError
      }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string,
  type?: string
  textLabel?: string
  textError?: string
  isError?: boolean
  isDisabled?: boolean
  placeholder?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  isDisabled: false,
  placeholder: 'placeholder'
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const handlerUpdateValueInput = (event: Event) => {
  const {value} = event.target
  emit('update:modelValue', value)
}

const handlerFocusInput = (event: Event) => emit('focus', event)
const handlerBlurInput = (event: Event) => emit('blur', event)

</script>

<style lang="scss" scoped>
.input {
  width: 200px;
  padding: 8px 10px;
  border-radius: 4px;
  border: solid 2px #e4e4e7;
}

.error-message {
  color: #f31260;
}

.error-input {
  border: solid 2px #f31260;
}

.input:focus {
  border: solid 2px #006fee;
}
</style>