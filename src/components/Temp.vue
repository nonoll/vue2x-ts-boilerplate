<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '@components/Temp.vue'
    }
  },
  setup(props, context: SetupContext) {
    console.log(props, context);
    return {};
  }
});
</script>
