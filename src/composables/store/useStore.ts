import { provide, inject } from '@vue/composition-api';
import { Commit, Dispatch } from 'vuex';

const StoreKey = Symbol('StoreKey');

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IStore {
  commit: Commit;
  dispatch: Dispatch;
  getters: unknown;
}

// key: string | InjectionKey<unknown>,
export const provideStore = (store: IStore): void => {
  provide(StoreKey, store);
};

export const useStore = (): IStore => {
  const store = inject(StoreKey) as IStore;

  if (!store) {
    console.log('no store provided');
  }
  return store;
};
