<template>
  <div>
    <p style="margin-bottom: 4px">{{ props.textLabel }}</p>
    <select
        :disabled="props.isDisabled"
        :value="props.modelValue.value"
        class="select"
        @change="handlerUpdateValueInput">
      <option
          v-for="item in props.items"
          :value="item.value"
      >
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: {} | string,
  items: [],
  type?: string
  textLabel?: string
  textError?: string
  isError?: boolean
  isDisabled?: boolean
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  isDisabled: false,
  placeholder: 'placeholder',
  items: []
})

const emit = defineEmits(['update:modelValue'])

const handlerUpdateValueInput = (event: Event) => {
  const {value} = event.target
  const result = props.items.filter((el) => el.value === value)
  emit('update:modelValue', result[0])
}

</script>

<style lang="scss" scoped>
.select {
  width: 200px;
  padding: 8px 10px;
  border-radius: 4px;
  border: solid 2px #e4e4e7;
}

.select:focus {
  border: solid 2px #006fee;
}
</style>