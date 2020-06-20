<template>
  <div class="container">
    <div>
      <h1 class="title">
        Order
      </h1>
    </div>
    <div>
      <div>お客様情報</div>
      <div>
        <label for="name">
          お名前
        </label>
        <input
          v-model="name"
          type="text"
          id="name"
        >
      </div>
      <div>
        <label for="address">
          ご住所
        </label>
        <input
          v-model="address"
          type="text"
          id="address"
        >
      </div>
      <div>
        <label for="payment-method">
          お支払い方法
        </label>
        <select
          v-model="paymentMethod"
          name="payment-method"
          id="payment-method"
        >
          <option value="online">
            オンラインで支払う
          </option>
          <option value="at-store">
            店頭で支払う
          </option>
        </select>
      </div>
      <div v-if="paymentMethod == 'online'">
        <label for="payment-method">
          カード番号
        </label>
        <input
          v-model="cardNumber"
          type="number"
          id="cardNumber"
        >
      </div>
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
    <button
      @click="showOrderModal = true"
      :disabled="!name || !address"
      class="button--green"
    >
      注文する
    </button>
    <OrderModal
      v-if="showOrderModal"
      @close="showOrderModal = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import OrderModal from "../../components/OrderModal.vue"

export default Vue.extend({
  components: {
    OrderModal,
  },
  head() {
    return {
      title: "Order"
    }
  },
  data() {
    return {
      name: "",
      address: "",
      paymentMethod: "online",
      cardNumber: "",
      showOrderModal: false,
      inputValidation: false
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
