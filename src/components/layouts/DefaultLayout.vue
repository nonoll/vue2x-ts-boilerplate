<template>
  <div class="default-layout">
    <div>
      <p>default-layout!</p>
      <button @click="onBtnClick">test button</button>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    console.log('default-layout setup');

    const onBtnClick = () => console.log('onBtnClick');

    return {
      onBtnClick
    };
  }
});
</script>

<style lang="scss" scoped>
.default-layout {
  position: relative;
}
</style>
