import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42670dcd = () => interopDefault(import('../pages/members.vue' /* webpackChunkName: "pages/members" */))
const _5def1f5b = () => interopDefault(import('../pages/menu.vue' /* webpackChunkName: "pages/menu" */))
const _557d3d85 = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _e5183ff4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/members",
    component: _42670dcd,
    name: "members"
  }, {
    path: "/menu",
    component: _5def1f5b,
    name: "menu"
  }, {
    path: "/order",
    component: _557d3d85,
    name: "order"
  }, {
    path: "/",
    component: _e5183ff4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
