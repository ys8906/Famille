<template>
  <div class="container menu">
    <div class="category-wrapper flex justify-center">
      <div
        v-for="category in this.$store.getters['MenuList/categories']"
        :key="category.id"
        class="m-2"
      >
        <button
          @click="selectedCategory = category.name"
          :class="{'selected':(selectedCategory == category.name)}"
          class="category-button"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
    <div class="menu-wrapper flex flex-wrap justify-around mt-4 mb-20">
      <div
        v-for="item in this.$store.getters['MenuList/categoryItems'](selectedCategory)"
        :key="item.name"
        class="flex"
      >
        <div class="mx-8 my-4 menu-wrapper items-center text-center">
          <img :src="item.src" :alt="item.name" class="menu-img h-32">
          <div>
            <div class="text-xl font-bold">{{ item.name }}</div>
            <div class="flex justify-center">
              <div class="mx-4 mb-2">¥ {{ item.price }}</div>
              <div class="mx-4 mb-2">{{ item.count }} 個</div>
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
      title: "Items | Café de Famille"
    }
  },
  data() {
    return {
      selectedCategory: "Drink"
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
