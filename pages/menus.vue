<template>
  <div class="container">
    <div>
      <h1 class="title">
        Menus
      </h1>
    </div>
    <div>
      <div
        v-for="menu in this.$store.state.MenuList.menus"
        :key="menu.name"
      >
        <p>{{ menu.name }}</p>
        <p>¥ {{ menu.price }}</p>
        <p>{{ menu.count }} 個</p>
        <button
          @click="addToCart(menu.name)"
          class="button--green"
        >
          +
        </button>
        <button
          @click="removeFromCart(menu.name)"
          :disabled="menu.count < 1"
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
      title: "Menus"
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
