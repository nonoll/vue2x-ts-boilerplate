<template>
  <default-layout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <!-- <hello-world msg="Welcome to Your Vue.js + TypeScript App" /> -->
      <temp />
    </div>
  </default-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Temp from '@/components/Temp.vue';

@Component({
  components: {
    DefaultLayout,
    HelloWorld,
    Temp
  }
})
export default class Home extends Vue {
  mounted() {
    console.log('mounted', this);
  }
}
</script>
