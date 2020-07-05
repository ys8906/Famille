<template>
  <Modal
    @close="$emit('close')"
  >    
    <div slot="modal__header" class="text-lg font-bold">
      この内容で注文しますか？
    </div>
    <div slot="modal__body">
      <div v-if="loading">
        <div class="loader">Loading...</div>
      </div>
      <div v-else>
        <button
          @click="confirm"
          class="confirm-btn mx-2"
        >
          はい
        </button>
        <button
          @click="$emit('close')"
          class="confirm-btn mx-2"
        >
          いいえ
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    confirm() {
      this.loading = true
      setTimeout(() => {
        this.initializeCart(),
        this.loading = false
        this.$router.push("/order/complete")
      }, 5000)
    },
    initializeCart() {
      this.$store.dispatch("MenuList/initializeCart")
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ConfirmModal.scss";
</style>