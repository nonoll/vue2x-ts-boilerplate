<template>
  <default-layout>
    <h1>class-mixin</h1>
    <navi />
    <div>
      <mixin />
    </div>
  </default-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { Navi, Mixin } from '@/components/template/class-base';

@Component({
  components: {
    DefaultLayout,
    Navi,
    Mixin
  }
})
export default class extends Vue {
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped></style>
