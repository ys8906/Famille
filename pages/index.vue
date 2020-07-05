<template>
  <div class="container index">
    <div class="landing">
      <div class="landing__text">
        Café de Famille
      </div>
    </div>
    <div class="bg-wrapper">
      <img
        src="../assets/images/index/background.svg"
        alt="background"
        class="bg"
      >
    </div>
    <div class="menu-wrapper flex flex-col items-center">
      <h1 class="title mb-8 text-6xl">
        famille
      </h1>
      <nuxt-link
        to="/menu"
        class="menu-btn mb-8"
      >
        MENU
      </nuxt-link>
      <nuxt-link
        to="/order"
        class="menu-btn mb-8"
      >
        ORDER
      </nuxt-link>
      <nuxt-link
        to="/members"
        class="menu-btn"
      >
        MEMBERS
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      default: "top page"
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>
