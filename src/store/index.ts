import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import listingsModule, { ListingsState } from './modules/listings';

export interface State {
  listings: ListingsState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const useStore = (): Store<State> => {
  return baseUseStore(key)
}

export default createStore<State>({
  modules: {
    listings: listingsModule
  },
});