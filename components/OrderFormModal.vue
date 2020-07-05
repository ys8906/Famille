<template>
  <Modal
    @close="$emit('close')"
  >
    <div slot="modal__header" class="mt-3 text-xl font-bold">
      ご注文情報
    </div>
    <div slot="modal__body" class="flex flex-col mx-8">
      <div class="mb-6 text-left">
        <label class="font-bold" for="name">
          お名前
        </label>
        <br>
        <input
          v-model="name"
          :class="{ 'invalid': validations.name }"
          class="mt-2"
          type="text"
          id="name"
        >
      </div>
      <div class="mb-6 text-left">
        <label class="font-bold" for="email">
          メールアドレス
        </label>
        <br>
        <input
          v-model="email"
          :class="{ 'invalid': validations.email }"
          class="mt-2"
          type="text"
          id="email"
        >
      </div>
      <div class="mb-6 text-left">
        <label class="font-bold" for="order-date">
          ご希望の受け取り日時
        </label>
        <br>
        <select
          v-model="orderDate.month"
          :class="{ 'invalid': validations.orderDate.month }"
          class="mt-2"
          name="order-date-month"
          id="order-date-month"
        >
          <option
            v-for="n in 12"
            :value="n"
            :key="n"
          >
            {{ n }}
          </option>
        </select>
        月
        <select
          v-model="orderDate.date"
          :class="{ 'invalid': validations.orderDate.date }"
          class="mt-2"
          name="order-date-date"
          id="order-date-date"
        >
          <option
            v-for="n in today.maxDate"
            :value="n"
            :key="n"
          >
            {{ n }}
          </option>
        </select>
        日
        <br class="hidden sp">
        <select
          v-model="orderDate.hour"
          :class="{ 'invalid': validations.orderDate.hour }"
          class="mt-2"
          name="order-date-date"
          id="order-date-date"
        >
          <option
            v-for="n in 11"
            :value="n + 9"
            :key="n"
          >
            {{ n + 9 }}
          </option>
        </select>
        ：
        <select
          v-model="orderDate.minute"
          :class="{ 'invalid': validations.orderDate.minute }"
          class="mt-2"
          name="order-date-date"
          id="order-date-date"
        >
          <option value="0">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
      </div>
      <div class="mb-6 text-left">
        <label class="font-bold" for="payment-method">
          お支払い方法
        </label>
        <br>
        <select
          v-model="paymentMethod"
          :class="{ 'invalid': validations.paymentMethod }"
          class="mt-2"
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
        <div class="mb-6 text-left">
          <label class="font-bold" for="card-number-first">
            カード番号
          </label>
          <br>
          <input
            v-model="cardNumber.first"
            :class="{ 'invalid': validations.cardNumber.first }"
            class="mt-2 input-small"
            type="number"
            id="card-number-first"
            max-length="4"
          >
          -
          <input
            v-model="cardNumber.second"
            :class="{ 'invalid': validations.cardNumber.second }"
            class="mt-2 input-small"
            type="number"
            max-length="4"
          >
          -
          <br class="hidden sp">
          <input
            v-model="cardNumber.third"
            :class="{ 'invalid': validations.cardNumber.third }"
            class="mt-2 input-small"
            type="number"
            max-length="4"
          >
          -
          <input
            v-model="cardNumber.fourth"
            :class="{ 'invalid': validations.cardNumber.fourth }"
            class="mt-2 input-small"
            type="number"
            max-length="4"
          >
        </div>
        <div class="mb-6 text-left">
          <label class="font-bold" for="card-expiry-month">
            有効期限
          </label>
          <br>
          <select
            v-model="cardExpiry.month"
            :class="{ 'invalid': validations.cardExpiry.month }"
            class="mt-2"
            name="card-expiry-month"
            id="card-expiry-month"
          >
            <option
              v-for="n in 12"
              :value="n"
              :key="n"
            >
              {{ n }}
            </option>
          </select>
          /
          <select
            v-model="cardExpiry.year"
            :class="{ 'invalid': validations.cardExpiry.year }"
            class="mt-2"
            name="card-expiry-year"
            id="card-expiry-year"
          >
            <option
              v-for="n in 10"
              :value="n + today.year"
              :key="n"
            >
              {{ n + today.year }}
            </option>
          </select>
        </div>
      </div>
      <button
        @click="showOrderModal = true"
        class="order-btn button--green font-bold"
      >
        注文する
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      today: {
        year: parseInt((new Date).getFullYear().toString().substr(-2)),
        month: ((new Date).getMonth() + 1),
        maxDate: 31
      },
      name: "",
      email: "",
      orderDate: {
        month: ((new Date).getMonth() + 1),
        date: (new Date).getDate(),
        hour: null,
        minute: null,
      },
      paymentMethod: "online",
      cardNumber: {
        first: null,
        second: null,
        third: null,
        fourth: null,
      },
      cardExpiry: {
        month: null,
        year: null,
      },
      showOrderModal: false,
      validations: {
        name: false,
        email: false,
        orderDate: false,
        paymentMethod: false,
        cardNumber: {
          first: false,
          second: false,
          third: false,
          fourth: false,
        },
        cardExpiry: {
          month: false,
          year: false,
        },
      },
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/OrderFormModal.scss";
</style>