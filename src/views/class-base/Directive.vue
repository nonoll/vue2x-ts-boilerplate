<template>
  <default-layout>
    <h1>class-directive</h1>
    <navi />
    <div>
      <directive />
    </div>
  </default-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { Navi, Directive } from '@/components/template/class-base';

@Component({
  components: {
    DefaultLayout,
    Navi,
    Directive
  }
})
export default class extends Vue {
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped></style>
