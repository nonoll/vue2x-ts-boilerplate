import axios from 'axios';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { IPostEntity } from '@/models/decorators/types';

@Module({ name: 'Decorators', namespaced: true })
export class Decorators extends VuexModule {
  count = 0;
  posts: IPostEntity[] = [];

  get countValue(): number {
    return this.count;
  }

  get totalComments(): number {
    return this.posts
      .filter(post => post.comments && post.comments.length)
      .reduce((sum, post) => sum + post.comments.length, 0);
  }

  @Mutation
  increment(value: number) {
    this.count += value;
  }

  @Mutation
  decrement(value: number) {
    this.count -= value;
  }

  @Mutation
  updatePosts(posts: IPostEntity[]) {
    this.posts = posts;
  }

  @Action({ commit: 'increment' })
  incr() {
    return 5;
  }

  @Action({ commit: 'decrement' })
  decr() {
    return 5;
  }

  @Action({ commit: 'updatePosts' })
  async fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data: posts } = await axios.get<IPostEntity[]>(url);
    return posts;
  }

  // @MutationAction
  // async fetchPosts() {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const { data: posts } = await axios.get<IPostEntity[]>(url);
  //   return { posts };
  // }
}
