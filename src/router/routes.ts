import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/error/NotFound.vue';
import { IRouteConfig } from '@/router/types';

Vue.use(VueRouter);

export const routes: Array<IRouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/class-base',
    name: 'ClassPage',
    component: () => import(/* webpackChunkName: "class-page" */ '@/views/class-base/Main.vue')
  },
  {
    path: '/class-base/directive',
    name: 'ClassDirective',
    component: () =>
      import(/* webpackChunkName: "class-directive" */ '@/views/class-base/Directive.vue')
  },
  {
    path: '/class-base/mixin',
    name: 'Classmixin',
    component: () => import(/* webpackChunkName: "class-mixin" */ '@/views/class-base/Mixin.vue')
  },
  {
    path: '/composition',
    name: 'CompositionPage',
    component: () =>
      import(/* webpackChunkName: "composition-page" */ '@/views/composition/Main.vue')
  },
  {
    path: '/composition/vuex-class',
    name: 'CompositionVuexClass',
    component: () =>
      import(/* webpackChunkName: "composition-vuex-class" */ '@/views/composition/VuexClass.vue')
  },
  {
    path: '/composition/vuex-decorator',
    name: 'CompositionVuexDecorator',
    component: () =>
      import(
        /* webpackChunkName: "composition-vuex-decorator" */ '@/views/composition/VuexDecorator.vue'
      )
  },
  {
    path: '**',
    component: NotFound
  }
];
