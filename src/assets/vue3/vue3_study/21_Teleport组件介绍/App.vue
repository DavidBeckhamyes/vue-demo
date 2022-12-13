<template>
  <h2>App</h2>
  <modal-button></modal-button>
</template>

<script lang="ts">
import ModalButton from './components/ModalButton.vue'
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {}
  },

  components: {
    ModalButton
  }
})
</script>