import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed06721a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _0ee0a23e = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _7e8063c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/profile",
    component: _ed06721a,
    name: "profile"
  }, {
    path: "/signup",
    component: _0ee0a23e,
    name: "signup"
  }, {
    path: "/",
    component: _7e8063c8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
