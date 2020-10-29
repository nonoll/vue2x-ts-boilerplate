<template>
  <div class="composition">
    <h2>@components/template/composition/VuexDecorator.vue</h2>
    <p>count: {{ decorator.count }}</p>
    <p>countValue: {{ decorator.countValue }}</p>
    <div>
      <button @click="onIncrementClick">increment</button>
      <button @click="onDecrementClick">decrement</button>
    </div>
    <ul class="post-list">
      <li class="post-item" v-for="(post, index) in decorator.posts" :key="index">
        <p>userId: {{ post.userId }}</p>
        <p>id: {{ post.id }}</p>
        <p>title: {{ post.title }}</p>
        <p>body: {{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';
import { getModule } from 'vuex-module-decorators';
import { Decorators } from '@/store/modules';

export default defineComponent({
  name: 'composition-decorator',
  setup(_, { root }) {
    const storeModule = getModule(Decorators, root.$store);

    const decorator = computed(() => {
      const { count, countValue, posts } = storeModule;
      return { count, countValue, posts };
    });

    const fetchPosts = async () => await storeModule.fetchPosts();
    const onIncrementClick = () => storeModule.incr();
    const onDecrementClick = () => storeModule.decr();

    onMounted(() => {
      if (!storeModule.posts.length) {
        fetchPosts();
      }
    });

    return {
      decorator,
      onIncrementClick,
      onDecrementClick
    };
  }
});
</script>

<style lang="scss" scoped>
.post-item {
  font-size: 10px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #ededed;
  border-radius: 10px;
  text-align: left;
}
</style>
