// 後ほど原作準拠にする
export const state = () => ({
  items: [
    {
      name: "チーズケーキ",
      price: 300,
      count: 0
    },
    {
      name: "チョコレートケーキ",
      price: 350,
      count: 0
    },
    {
      name: "ショートケーキ",
      price: 400,
      count: 0
    },
    {
      name: "紅茶",
      price: 300,
      count: 0
    },
    {
      name: "コーヒー",
      price: 320,
      count: 0
    },
  ]
})

export const getters = {
  selectedItems(state) {
    return state.items.filter(item => item.count > 0)
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