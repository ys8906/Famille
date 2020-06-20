// import MenuModel from "models/MenuModel"

// interface MenuModel {
//   name: string;
//   price: number;
//   count: number;
// }

// interface MenuListModel {
//   menus: Array<{
//     name: string;
//     price: number;
//     count: number;
//   }>
// }

// 後ほど原作準拠にする
export const state = () => ({
  menus: [
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
    return state.menus.filter(menu => menu.count > 0)
  }
}

export const mutations = {
  increment(state, name) {
    const menu = state.menus.find(el => el.name == name);
    menu.count++;
  },
  decrement(state, name) {
    const menu = state.menus.find(el => el.name == name);
    menu.count--;
  },
}

export const actions = {
  addToCart({commit}, name) {
    commit("increment", name);
  },
  removeFromCart({commit}, name) {
    commit("decrement", name);
  },
}