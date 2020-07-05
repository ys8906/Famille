<template>
  <div class="complete-wrapper">
    <div class="greeting mb-4 mr-4 absolute bottom-0 right-0 z-10 text-xl">
      お疲れ様でした！またお越し下さい。<br>(しばらくしたらトップに戻ります。)
    </div>
    <div class="caption__bar mr-16 p-12 absolute right-0">
    </div>
    <div class="caption__text mr-16 pt-16 pr-6 absolute right-0 text-3xl">
      Order completed
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  head() {
    return {
      title: "Order Complete | Café de Famille"
    }
  },
  data() {
    return {
      showOrderFormModal: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/')
    }, 10000)
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/complete.scss";
</style>