<template>
  <Modal
    @close="showOrderModal = false"
  >    
    <div slot="modal__header">
      以下の内容で注文しますか？
    </div>
    <div slot="modal__body">
      <nuxt-link
        to="/order/complete"
      >
        はい
      </nuxt-link>
      <button
        @click="$emit('close')"
      >
        いいえ
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
};
</script>
