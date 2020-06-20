import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8d18bb9e = () => interopDefault(import('../pages/check.vue' /* webpackChunkName: "pages/check" */))
const _e07a94fc = () => interopDefault(import('../pages/members.vue' /* webpackChunkName: "pages/members" */))
const _47bc7e1d = () => interopDefault(import('../pages/menus.vue' /* webpackChunkName: "pages/menus" */))
const _8eb7fa8c = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _a63fc5fe = () => interopDefault(import('../pages/order/complete.vue' /* webpackChunkName: "pages/order/complete" */))
const _718ff0fb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/check",
    component: _8d18bb9e,
    name: "check"
  }, {
    path: "/members",
    component: _e07a94fc,
    name: "members"
  }, {
    path: "/menus",
    component: _47bc7e1d,
    name: "menus"
  }, {
    path: "/order",
    component: _8eb7fa8c,
    name: "order"
  }, {
    path: "/order/complete",
    component: _a63fc5fe,
    name: "order-complete"
  }, {
    path: "/",
    component: _718ff0fb,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
