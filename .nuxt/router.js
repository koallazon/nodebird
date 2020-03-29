import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed06721a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _0ee0a23e = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _95fe57f8 = () => interopDefault(import('../pages/hashtag/_id/index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _39a34c98 = () => interopDefault(import('../pages/post/_id/index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _1a0374c2 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
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
    path: "/hashtag/:id?",
    component: _95fe57f8,
    name: "hashtag-id"
  }, {
    path: "/post/:id?",
    component: _39a34c98,
    name: "post-id"
  }, {
    path: "/user/:id?",
    component: _1a0374c2,
    name: "user-id"
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
