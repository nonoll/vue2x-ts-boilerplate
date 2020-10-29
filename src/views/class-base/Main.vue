<template>
  <default-layout>
    <h1>class-main</h1>
    <navi />
  </default-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { Navi } from '@/components/template/class-base';

@Component({
  components: {
    DefaultLayout,
    Navi
  }
})
export default class extends Vue {
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped></style>
