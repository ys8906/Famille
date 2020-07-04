<template>
  <Modal
    @close="$emit('close')"
  >
    <div slot="modal__header" />
    <div slot="modal__body">
      <img
        :src="src"
        :alt="name"
        class="portrait"
      >
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  props: {
    src: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.portrait {
  border-radius: 16px;
}
</style>
