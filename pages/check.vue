<template>
  <div class="container">
    <div>
      <h1 class="title">
        Check
      </h1>
    </div>
    <div>
      <div v-if="this.$store.getters['MenuList/selectedItems'].length">
        <div
          v-for="item in this.$store.getters['MenuList/selectedItems']"
          :key="item.name"
        >
          <p>{{ item.name }}</p>
          <p>{{ item.count }} 個</p>
          <p>合計: ¥ {{ item.price * item.count }}</p>
          <button
            @click="addToCart(item.name)"
            class="button--green"
          >
            +
          </button>
          <button
            @click="removeFromCart(item.name)"
            :disabled="item.count < 1"
            class="button--green"
          >
            -
          </button>
        </div>
        <div>
          <nuxt-link
            to="/order"
          >
            注文する
          </nuxt-link>
        </div>
      </div>
      <div v-else>
        選択した商品がありません
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  head() {
    return {
      title: "Check"
    }
  },
  methods: {
    addToCart(name: string) {
      this.$store.dispatch("MenuList/addToCart", name)
    },
    removeFromCart(name: string) {
      this.$store.dispatch("MenuList/removeFromCart", name)
    },
  }
})
</script>
