<template>
  <default-layout>
    <h1>composition-main</h1>
    <navi />
  </default-layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { Navi } from '@/components/template/composition';

export default defineComponent({
  components: {
    DefaultLayout,
    Navi
  },
  setup() {
    return {};
  }
});
</script>
