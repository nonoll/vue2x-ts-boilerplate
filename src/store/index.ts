import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const isDeveloment = process.env.NODE_ENV !== 'production';

// @see https://vuex.vuejs.org/guide/strict.html#development-vs-production
const strict = isDeveloment;

// @see https://vuex.vuejs.org/guide/plugins.html#built-in-logger-plugin
const plugins = isDeveloment ? [createLogger()] : [];

export default new Vuex.Store({
  strict,
  plugins,
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
