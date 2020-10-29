<template>
  <default-layout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div>
      <p>sass prependData test</p>
      <div class="box">@include square(100px, $radius: 4px);</div>
    </div>
  </default-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    DefaultLayout,
    HelloWorld
  }
})
export default class Home extends Vue {
  mounted() {
    console.log('mounted', this, this.$store);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).$store = this.$store;
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
  border: 1px solid red;
  box-sizing: border-box;
  @include square(100px, $radius: 4px);
}
</style>
