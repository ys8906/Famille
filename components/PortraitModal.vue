<template>
  <Modal
    @close="showPortraitModal = false"
  >    
    <img :portraitSrc="portraitSrc" :alt="name">
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  props: {
    portraitSrc: {
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
