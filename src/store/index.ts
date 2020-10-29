// import { Mutation, VuexModule, Module } from 'vuex-module-decorators';
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import * as modules from '@/store/modules';
import { IRootState } from './types';

Vue.use(Vuex);

const isDeveloment = process.env.NODE_ENV !== 'production';

// @see https://vuex.vuejs.org/guide/strict.html#development-vs-production
const strict = isDeveloment;

// @see https://vuex.vuejs.org/guide/plugins.html#built-in-logger-plugin
const plugins = isDeveloment ? [createLogger()] : [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const store = new Vuex.Store<IRootState>({
  strict,
  plugins,
  state: {
    isLogin: false
  },
  getters: {
    getLoginStatus: state => {
      return state.isLogin;
    }
  },
  mutations: {
    setLoginStatus: (state, value: boolean) => {
      state.isLogin = value;
    }
  },
  actions: {},
  modules: {
    ...modules
  }
});

export default store;

// export default new Vuex.Store({
//   strict,
//   plugins,
//   state: {
//     isLogin: false
//   },
//   getters: {
//     getLoginStatus: state => {
//       return state.isLogin;
//     }
//   },
//   mutations: {
//     setLoginStatus: (state, value: boolean) => {
//       state.isLogin = value;
//     }
//   },
//   actions: {},
//   modules: {
//     ...modules
//   }
// });
