<template>
  <div class="container">
    <div>
      <h1 class="title">
        item
      </h1>
    </div>
    <div>
      <div
        v-for="item in this.$store.state.MenuList.items"
        :key="item.name"
      >
        <p>{{ item.name }}</p>
        <p>¥ {{ item.price }}</p>
        <p>{{ item.count }} 個</p>
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
      <div
        v-if="this.$store.getters['MenuList/selectedItems'].length"
      >
        <nuxt-link
          to="/order"
        >
          注文する
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  head() {
    return {
      title: "items"
    }
  },
  methods: {
    addToCart(name: string) {
      this.$store.dispatch("MenuList/addToCart", name)
    },
    removeFromCart(name: string) {
      this.$store.dispatch("MenuList/removeFromCart", name)
    }
  }
})
</script>
