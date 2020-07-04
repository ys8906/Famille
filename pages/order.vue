<template>
  <div class="container">
    <div>
      <div v-if="this.$store.getters['MenuList/selectedItems'].length">
        <table class="mt-8" align="center">
          <thead>
            <tr>
              <th class="border-bottom w-40 px-4 py-2 text-left">Menu</th>
              <th class="border-bottom w-32 px-4 py-2">Number</th>
              <th class="border-bottom w-32 px-4 py-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in this.$store.getters['MenuList/selectedItems']"
              :key="item.name"
              class=" whitespace-no-wrap"
            >
              <td class="px-4 py-2">{{ item.name }}</td>
              <td class="px-4 py-2 text-center">{{ item.count }}</td>
              <td class="px-4 py-2 text-right">¥ {{ item.price * item.count }}</td>
            </tr>
            <tr>
              <td></td>
              <td class="px-4 py-2 text-right font-bold">Total</td>
              <td class="px-4 py-2 text-right">
                ¥ {{ this.$store.getters['MenuList/totalPrice'] }}
              </td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2" class="px-4 py-2 text-right text-xl">
                <button
                  @click="showOrderFormModal = true"
                  class="order-btn button--green mb-2 whitespace-no-wrap"
                >
                  注文情報を入力する
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="mt-8 text-center text-2xl">
        選択した商品がありません
      </div>
    </div>
    <OrderFormModal
      v-if="showOrderFormModal"
      @close="showOrderFormModal = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import OrderFormModal from "@/components/OrderFormModal.vue"

export default Vue.extend({
  components: {
    OrderFormModal,
  },
  head() {
    return {
      title: "Order | Café de Famille"
    }
  },
  data() {
    return {
      showOrderFormModal: false,
    }
  },
  methods: {
    addToCart(name: string) {
      this.$store.dispatch("MenuList/addToCart", name)
    },
    removeFromCart(name: string) {
      this.$store.dispatch("MenuList/removeFromCart", name)
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/order.scss";
</style>