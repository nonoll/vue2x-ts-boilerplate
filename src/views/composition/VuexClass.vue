<template>
  <default-layout>
    <h1>composition-vuex-class</h1>
    <navi />
    <div>
      <vuex-class />
    </div>
  </default-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { Navi, VuexClass } from '@/components/template/composition';

export default defineComponent({
  components: {
    DefaultLayout,
    Navi,
    VuexClass
  },
  setup() {
    return {};
  }
});
</script>
