<template>
  <div>
    <h1>@/components/template/class-base/Mixin.vue</h1>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { MyMixin } from '@/mixins';

@Component({
  mixins: [MyMixin]
})
export default class Mixin extends Mixins(MyMixin) {
  mounted() {
    console.log('Mixin', this.mixinMessage);
    this.mixinOutput('Mixin');
  }
}
</script>

<style lang="scss" scoped></style>
