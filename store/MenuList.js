// 原作準拠にしたい
export const state = () => ({
  categories: [
    {
      name: "Drink",
      id: 1
    },
    {
      name: "Cake",
      id: 2
    },
    {
      name: "Parfait",
      id: 3
    },
    {
      name: "Dish",
      id: 4
    },
  ],
  items: [
    {
      category: "Drink",
      name: "アイスコーヒー",
      price: 320,
      src: require("@/assets/images/menu/iced-coffee.png"),
      count: 0
    },
    {
      category: "Drink",
      name: "ブレンドコーヒー",
      price: 320,
      src: require("@/assets/images/menu/blend-coffee.png"),
      count: 0
    },
    {
      category: "Drink",
      name: "カフェオレ",
      price: 320,
      src: require("@/assets/images/menu/cafe-au-lait.png"),
      count: 0
    },
    {
      category: "Drink",
      name: "カプチーノ",
      price: 320,
      src: require("@/assets/images/menu/cappuccino.png"),
      count: 0
    },
    {
      category: "Drink",
      name: "紅茶",
      price: 320,
      src: require("@/assets/images/menu/tea.png"),
      count: 0
    },
    {
      category: "Cake",
      name: "ショートケーキ",
      price: 400,
      src: require("@/assets/images/menu/shortcake.png"),
      count: 0
    },
    {
      category: "Cake",
      name: "チーズケーキ",
      price: 300,
      src: require("@/assets/images/menu/cheese-cake.png"),
      count: 0
    },
    {
      category: "Cake",
      name: "ザッハトルテ",
      price: 350,
      src: require("@/assets/images/menu/sachertorte.png"),
      count: 0
    },
    {
      category: "Cake",
      name: "ホットケーキ",
      price: 300,
      src: require("@/assets/images/menu/pancake.png"),
      count: 0
    },
    {
      category: "Cake",
      name: "シフォンケーキ",
      price: 320,
      src: require("@/assets/images/menu/chiffon-cake.png"),
      count: 0
    },
    {
      category: "Parfait",
      name: "チョコレートパフェ",
      price: 320,
      src: require("@/assets/images/menu/chocolate-parfait.png"),
      count: 0
    },
    {
      category: "Parfait",
      name: "フルーツパフェ",
      price: 320,
      src: require("@/assets/images/menu/fruit-parfait.png"),
      count: 0
    },
    {
      category: "Parfait",
      name: "抹茶パフェ",
      price: 320,
      src: require("@/assets/images/menu/maccha-parfait.png"),
      count: 0
    },
    {
      category: "Dish",
      name: "オムライス",
      price: 300,
      src: require("@/assets/images/menu/omurice.png"),
      count: 0
    },
    {
      category: "Dish",
      name: "フレンチトースト",
      price: 300,
      src: require("@/assets/images/menu/french-toast.png"),
      count: 0
    },
    {
      category: "Dish",
      name: "スクランブルエッグ",
      price: 300,
      src: require("@/assets/images/menu/scramble-egg.png"),
      count: 0
    },
    {
      category: "Dish",
      name: "カルボナーラ",
      price: 300,
      src: require("@/assets/images/menu/carbonara.png"),
      count: 0
    },
  ]
})

export const getters = {
  selectedItems(state) {
    return state.items.filter(item => item.count > 0)
  },
  categoryItems: (state) => (category) => {
    return state.items.filter(item => item.category == category)
  },
  categories(state) {
    return state.categories
  }
}

export const mutations = {
  increment(state, name) {
    const item = state.items.find(el => el.name == name);
    item.count++;
  },
  decrement(state, name) {
    const item = state.items.find(el => el.name == name);
    item.count--;
  },
  initialize(state) {
    state.items.forEach(item => {
      item.count = 0;
    });
  }
}

export const actions = {
  addToCart({commit}, name) {
    commit("increment", name);
  },
  removeFromCart({commit}, name) {
    commit("decrement", name);
  },
  initializeCart({commit}) {
    commit("initialize")
  }
}