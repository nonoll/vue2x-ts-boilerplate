<template>
  <div>
    <h2>@components/template/composition/VuexClass.vue</h2>
    <p>count: {{ count }}</p>
    <p>countValue: {{ countValue() }}</p>
    <div>
      <button @click="onIncrementClick">increment</button>
      <button @click="onDecrementClick">decrement</button>
    </div>
    <ul class="post-list">
      <li class="post-item" v-for="(post, index) in posts" :key="index">
        <p>userId: {{ post.userId }}</p>
        <p>id: {{ post.id }}</p>
        <p>title: {{ post.title }}</p>
        <p>body: {{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { useState, useGetters, useActions } from '@u3u/vue-hooks';

export default defineComponent({
  name: 'composition-class',
  setup() {
    const state = {
      ...useState('ClassBase', {
        count: 'count',
        posts: 'posts'
      })
    };

    const getters = {
      ...useGetters('ClassBase', ['countValue', 'totalComments'])
    };

    const actions = {
      ...useActions('ClassBase', ['incr', 'decr', 'fetchPosts'])
    };

    const fetchPosts = async () => await actions.fetchPosts();
    const onIncrementClick = () => actions.incr();
    const onDecrementClick = () => actions.decr();

    onMounted(() => {
      const hasPosts = state.posts.value.length;
      if (!hasPosts) {
        fetchPosts();
      }
    });

    return {
      ...state,
      ...getters,
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
