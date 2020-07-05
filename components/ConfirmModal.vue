<template>
  <Modal
    @close="$emit('close')"
  >    
    <div slot="modal__header" class="text-lg font-bold">
      この内容で注文しますか？
    </div>
    <div slot="modal__body">
      <nuxt-link
        to="/order/complete"
        class="confirm-btn mx-2"
      >
        はい
      </nuxt-link>
      <button
        @click="$emit('close')"
        class="confirm-btn mx-2"
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

<style lang="scss" scoped>
@import "@/assets/scss/ConfirmModal.scss";
</style>