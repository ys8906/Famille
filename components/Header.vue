<template>
  <header class="sticky z-10 flex justify-center">
    <nav class="header-pc flex justify-around mt-5 mb-8">
      <nuxt-link to="/" class="menu-btn mx-2">
        Top
      </nuxt-link>
      <nuxt-link to="/menu" class="menu-btn mx-2">
        Menu
      </nuxt-link>
      <nuxt-link to="/order" class="menu-btn mx-2">
        Order
      </nuxt-link>
      <nuxt-link to="/members" class="menu-btn mx-2">
        Members
      </nuxt-link>
    </nav>
    <nav class="header-sp px-5 py-2 mt-5 mb-8">
      <div class="flex justify-center">
        <div class="title text-3xl font-bold">{{ $nuxt.$route.name }}</div>
        <button
          @click="active = !active"
          class="drawer-btn"
        />
      </div>
      <transition name="sp-navigation">
        <div
          v-if="active"
          class="flex flex-col items-center mt-3"
        >
          <nuxt-link
            to="/"
            class="menu-btn mx-2 mt-2 mb-8"
          >
            Top
          </nuxt-link>
          <nuxt-link
            to="/menu"
            class="menu-btn mx-2 mt-2 mb-8"
          >
            Menu
          </nuxt-link>
          <nuxt-link
            to="/order"
            class="menu-btn mx-2 mt-2 mb-8"
          >
            Order
          </nuxt-link>
          <nuxt-link
            to="/members"
            class="menu-btn mx-2 mt-2 mb-8"
          >
            Members
          </nuxt-link>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    console.log(this.$route.name)
  },
})
</script>

<style lang="scss">
header {
  top: 1.25rem;
}
</style>