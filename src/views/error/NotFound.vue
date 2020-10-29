<template>
  <div class="page-notfound">
    <p>페이지를 찾을 수 없습니다.</p>
    <button @click="onHomeClick">home</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'page-notfound',
  setup(_, { root }) {
    const onHomeClick = () => {
      root.$router.replace('/');
    };

    return {
      onHomeClick
    };
  }
});
</script>

<style lang="scss" scoped></style>
