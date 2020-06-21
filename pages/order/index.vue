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
          :class="{ 'invalid': validations.name }"
          type="text"
          id="name"
        >
      </div>
      <div>
        <label for="email">
          メールアドレス
        </label>
        <input
          v-model="email"
          :class="{ 'invalid': validations.email }"
          type="text"
          id="email"
        >
      </div>
      <div>
        <label for="order-date">
          ご希望の受け取り日時
        </label>
        <select
          v-model="orderDate.month"
          :class="{ 'invalid': validations.orderDate.month }"
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
        <select
          v-model="orderDate.hour"
          :class="{ 'invalid': validations.orderDate.hour }"
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
        :
        <select
          v-model="orderDate.minute"
          :class="{ 'invalid': validations.orderDate.minute }"
          name="order-date-date"
          id="order-date-date"
        >
          <option value="0">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
        </select>
      </div>
      <div>
        <label for="payment-method">
          お支払い方法
        </label>
        <select
          v-model="paymentMethod"
          :class="{ 'invalid': validations.paymentMethod }"
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
        <div>
          <label for="card-number-first">
            カード番号
            <input
              v-model="cardNumber.first"
              :class="{ 'invalid': validations.cardNumber.first }"
              type="number"
              id="card-number-first"
              max-length="4"
            >
            -
            <input
              v-model="cardNumber.second"
              :class="{ 'invalid': validations.cardNumber.second }"
              type="number"
              max-length="4"
            >
            -
            <input
              v-model="cardNumber.third"
              :class="{ 'invalid': validations.cardNumber.third }"
              type="number"
              max-length="4"
            >
            -
            <input
              v-model="cardNumber.fourth"
              :class="{ 'invalid': validations.cardNumber.fourth }"
              type="number"
              max-length="4"
            >
          </label>
        </div>
        <div>
          <label for="card-expiry-month">
            有効期限
            <select
              v-model="cardExpiry.month"
              :class="{ 'invalid': validations.cardExpiry.month }"
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
          </label>
        </div>
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
      @click="confirmForms"
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
  methods: {
    confirmForms(e: Event) {
      let error = 0
      if (!this.name)                 { this.validations.name = true, error += 1 };
      if (!this.email)                { this.validations.email = true, error += 1 };
      if (!this.orderDate)            { this.validations.orderDate = true, error += 1 };
      if (this.paymentMethod == "online") {
        if (!this.cardNumber.first)   { this.validations.cardNumber.first = true, error += 1 };
        if (!this.cardNumber.second)  { this.validations.cardNumber.second = true, error += 1 };
        if (!this.cardNumber.third)   { this.validations.cardNumber.third = true, error += 1 };
        if (!this.cardNumber.fourth)  { this.validations.cardNumber.fourth = true, error += 1 };
        if (!this.cardExpiry.month)   { this.validations.cardExpiry.month = true, error += 1 };
        if (!this.cardExpiry.year)    { this.validations.cardExpiry.year = true, error += 1 };
      };
      if (error > 0) {
        e.preventDefault();
        window.alert("error");
      } else {
        this.showOrderModal = true;
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
      };
    }
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
