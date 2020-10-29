import axios from 'axios';
import { IRootState } from '@/store/types';
import { IPostEntity } from '@/models/decorators/types';
import { ActionTree, GetterTree, MutationTree } from 'vuex';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IState {
  count: number;
  posts: IPostEntity[];
}

export const namespaced = true;
export const state = (): IState => ({
  count: 0,
  posts: []
});

// type State = ReturnType<typeof state>;

export const getters: GetterTree<IState, unknown> = {
  countValue: state => () => {
    return state.count;
  },
  totalComments: state => () => {
    const { posts } = state;
    return posts
      .filter(post => post.comments && post.comments.length)
      .reduce((sum, post) => sum + post.comments.length, 0);
  }
};

export const mutations: MutationTree<IState> = {
  increment: (state, value: number) => {
    state.count += value;
  },
  decrement: (state, value: number) => {
    state.count -= value;
  },
  updatePosts: (state, posts: IPostEntity[]) => {
    state.posts = posts;
  }
};

export const actions: ActionTree<IState, IRootState> = {
  incr({ commit }) {
    return commit('increment', 5);
  },
  decr({ commit }) {
    return commit('decrement', 5);
  },
  async fetchPosts({ commit, rootState, rootGetters }) {
    console.log(rootState.isLogin, rootGetters);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data: posts } = await axios.get<IPostEntity[]>(url);
    commit('updatePosts', posts);
  }
};
