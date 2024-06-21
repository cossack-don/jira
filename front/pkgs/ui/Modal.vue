<script lang="ts" setup>
import {ref} from "vue";


export interface Props {
  // isShow?: boolean

}

const props = withDefaults(defineProps<Props>(), {
  // isShow: false,

})

const isShow = ref<boolean>(false)
const handlerChangeStateModal = (value: boolean) => {

  isShow.value = !isShow.value

}
const emit = defineEmits<{
  changeStateModal: () => any

}>()
</script>
<template>
  <Teleport to="body">
    <div v-show="isShow">


      <transition name="modal-fade">
        <div class="modal-backdrop">
          {{ isShow }}
          <div aria-describedby="modalDescription"
               aria-labelledby="modalTitle"
               class="modal"
               role="dialog"
          >
            <header
                id="modalTitle"
                class="modal-header"
            >
              <slot name="header">
                This is the default tile!

                <button
                    aria-label="Close modal"
                    class="btn-close"
                    type="button"
                    @click="handlerChangeStateModal"
                >
                  x
                </button>
              </slot>
            </header>
            <section
                id="modalDescription"
                class="modal-body"
            >
              <slot name="body">
                I'm the default body!
              </slot>
            </section>
            <footer class="modal-footer">
              <slot name="footer">
                I'm the default footer!

                <button
                    aria-label="Close modal"
                    class="btn-green"
                    type="button"
                    @click="close"
                >
                  Close me!
                </button>
              </slot>
            </footer>
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>