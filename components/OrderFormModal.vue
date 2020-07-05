<template>
  <Modal
    @close="$emit('close')"
  >
    <div slot="modal__header" class="mt-3 text-xl font-bold">
      ご注文情報
    </div>
    <div slot="modal__body" class="flex flex-col mx-8">
      <div class="mb-5 text-left">
        <label class="font-bold" for="name">
          お名前
          <span v-if="validations.name" class="alert ml-2">
            <br class="hidden sp">
            お名前を入力してください
          </span>
        </label>
        <br>
        <input
          v-model="name"
          :class="{ 'invalid': validations.name }"
          class="mt-2"
          autocomplete="off"
          type="text"
          id="name"
        >
      </div>
      <div class="mb-5 text-left">
        <label class="font-bold" for="email">
          メールアドレス
          <span v-if="validations.email" class="alert ml-2">
            <br class="hidden sp">
            メールアドレスを入力してください
          </span>
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
      <div class="mb-5 text-left">
        <label class="font-bold" for="order-date">
          ご希望の受け取り日時
          <span v-if="validations.orderDate" class="alert ml-2">
            <br class="hidden sp">
            ご希望の受け取り日時を入力してください
          </span>
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
      <div class="mb-5 text-left">
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
        <div class="mb-5 text-left">
          <label class="font-bold" for="card-number-first">
            カード番号
            <span v-if="validations.cardNumber" class="alert ml-2">
              <br class="hidden sp">
              カード番号を入力してください
            </span>
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
        <div class="mb-8 text-left">
          <label class="font-bold" for="card-expiry-month">
            カードの有効期限
            <span v-if="validations.cardExpiry" class="alert ml-2">
              <br class="hidden sp">
              カードの有効期限を入力してください
            </span>
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
        @click="validateForms"
        class="order-btn button--green font-bold"
      >
        注文する
      </button>
      <div class="confirm">
        <ConfirmModal
          v-if="showConfirmModal"
          @close="showConfirmModal = false"
        />
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue';
import ConfirmModal from '@/components/ConfirmModal';

export default {
  components: {
    Modal,
    ConfirmModal,
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
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
      cardExpiry: {
        month: null,
        year: null,
      },
      validations: {
        name: false,
        email: false,
        orderDate: false,
        paymentMethod: false,
        cardNumber: false,
        cardExpiry: false
      },
      showConfirmModal: false,
    }
  },
  methods: {
    resetValidations() {
      this.validations.name               = false
      this.validations.email              = false
      this.validations.orderDate          = false
      this.validations.cardNumber         = false
      this.validations.cardExpiry         = false
    },
    validateForms(e) {
      let error = 0
      this.resetValidations()
      if (!this.name)                 { this.validations.name       = true, error += 1 };
      if (!this.email)                { this.validations.email      = true, error += 1 };
      if (!this.orderDate.hour)       { this.validations.orderDate  = true, error += 1 };
      if (!this.orderDate.minute)     { this.validations.orderDate  = true, error += 1 };
      if (this.paymentMethod == "online") {
        if (!this.cardNumber.first)   { this.validations.cardNumber = true, error += 1 };
        if (!this.cardNumber.second)  { this.validations.cardNumber = true, error += 1 };
        if (!this.cardNumber.third)   { this.validations.cardNumber = true, error += 1 };
        if (!this.cardNumber.fourth)  { this.validations.cardNumber = true, error += 1 };
        if (!this.cardExpiry.month)   { this.validations.cardExpiry = true, error += 1 };
        if (!this.cardExpiry.year)    { this.validations.cardExpiry = true, error += 1 };
      };
      if (error > 0) {
        e.preventDefault();
      } else {
        this.resetValidations();
        this.showConfirmModal = true;
      }
    }
  },
  watch: {
    "today.month"() {
      if ([2].includes(this.today.month)) {
        this.today.maxDate = 28
      } else if ([4, 6, 9, 11].includes(this.today.month)) {
        this.today.maxDate = 30
      } else {
        this.today.maxDate = 31
      }
    },
    "cardNumber.first"() {
      this.cardNumber.first = this.cardNumber.first.slice(0, 4)
    },
    "cardNumber.second"() {
      this.cardNumber.second = this.cardNumber.second.slice(0, 4)
    },
    "cardNumber.third"() {
      this.cardNumber.third = this.cardNumber.third.slice(0, 4)
    },
    "cardNumber.fourth"() {
      this.cardNumber.fourth = this.cardNumber.fourth.slice(0, 4)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/OrderFormModal.scss";
</style>