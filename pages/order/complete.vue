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
  methods: {

  },
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
