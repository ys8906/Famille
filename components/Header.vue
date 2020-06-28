<template>
  <nav class="flex justify-around mb-8">
    <nuxt-link
      to="/"
      class="menu-btn mx-2"
    >
      Top
    </nuxt-link>
    <nuxt-link
      to="/menus"
      class="menu-btn mx-2"
    >
      Menus
    </nuxt-link>
    <nuxt-link
      to="/check"
      class="menu-btn mx-2"
    >
      Check
    </nuxt-link>
    <nuxt-link
      to="/members"
      class="menu-btn mx-2"
    >
      Members
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({

})
</script>