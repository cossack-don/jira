<template>
  <div>
    <p style="margin-bottom: 4px">{{ props.textLabel }}</p>
    <textarea
        :class="{'textarea-error':props.isError}"
        :cols="props.cols"
        :disabled="props.isDisabled"
        :maxlength="props.maxLength"
        :placeholder="props.placeholder"
        :rows="props.rows"
        :type="props.type"
        :value="props.modelValue"
        class="textarea"
        @blur="handlerBlurInput"
        @focus="handlerFocusInput"
        @input="handlerUpdateValueInput"
    />
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
  rows?: string
  cols?: string
  maxLength?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  isDisabled: false,
  placeholder: 'placeholder',
  cols: '2',
  rows: '2',
  maxLength: '100'
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
.textarea {
  width: 200px;
  padding: 8px 10px;
  border-radius: 4px;
  border: solid 2px #e4e4e7;
  resize: none;
}

.error-message {
  color: #f31260;
}

.textarea-error {
  border: solid 2px #f31260;
}

.textarea:focus {
  border: solid 2px #006fee;
}


</style>