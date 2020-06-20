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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
