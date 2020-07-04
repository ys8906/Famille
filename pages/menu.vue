<template>
  <div class="container menu">
    <div class="category-wrapper flex justify-center">
      <div
        v-for="category in this.$store.getters['MenuList/categories']"
        :key="category.id"
        class="m-4"
      >
        <button class="category-button">{{ category.name }}</button>
      </div>
    </div>
    <div class="menu-wrapper flex flex-wrap justify-around">
      <div
        v-for="item in this.$store.getters['MenuList/categoryItems']('cake')"
        :key="item.name"
        class="flex"
      >
        <div class="m-8 menu-wrapper items-center text-center">
          <img :src="item.src" :alt="item.name" class="menu-img h-40">
          <div>
            <div class="mb-2 text-xl font-bold">{{ item.name }}</div>
            <div class="flex justify-center">
              <div class="px-4 py-2">¥ {{ item.price }}</div>
              <div class="px-4 py-2">{{ item.count }} 個</div>
            </div>
            <div>
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
          </div>
        </div>
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

<style lang="scss" scoped>
@import "@/assets/scss/menu.scss";
</style>
