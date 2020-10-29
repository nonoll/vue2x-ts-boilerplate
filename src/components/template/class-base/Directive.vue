<template>
  <div>
    <h1>@/components/template/class-base/Directive.vue</h1>
    <div v-highlight>directive v-highlight</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Directive extends Vue {
  mounted() {
    console.log('Directive');
  }
}
</script>

<style lang="scss" scoped></style>
