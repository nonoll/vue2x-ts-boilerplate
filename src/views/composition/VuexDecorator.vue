<template>
  <default-layout>
    <h1>composition-vuex-decorator</h1>
    <navi />
    <div>
      <vuex-decorator />
    </div>
  </default-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { Navi, VuexDecorator } from '@/components/template/composition';

export default defineComponent({
  components: {
    DefaultLayout,
    Navi,
    VuexDecorator
  },
  setup() {
    return {};
  }
});
</script>
