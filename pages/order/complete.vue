<template>
  <div class="container">
    <div>
      <h1 class="title">
        Complete
      </h1>
    </div>
    <div>
      注文が完了いたしました。
    </div>
    <div>
      <div
        v-for="item in this.$store.getters['MenuList/selectedItems']"
        :key="item.name"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.count }} 個</p>
        <p>合計: ¥ {{ item.price * item.count }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  head() {
    return {
      title: "Complete"
    }
  },
  mounted() {
    this.$store.dispatch("MenuList/initializeCart")
  },
})
</script>
