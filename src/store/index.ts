import { inject, InjectionKey } from 'vue';
import { counterStore } from './counter';
import { tasksStore } from './tasks';
import { graphStore } from './graph';

export default function globalStore() {
  return {
    counter: counterStore(),
    tasksStore: tasksStore(),
    graphStore: graphStore(),
  };
}

export type GlobalStore = ReturnType<typeof globalStore>;

export const GlobalStoreKey: InjectionKey<GlobalStore> = Symbol('GlobalStore');

export function useGlobalStore() {
  const store = inject(GlobalStoreKey);
  if (!store) {
    throw new Error(`${GlobalStoreKey} is not provided`);
  }
  return store;
}
