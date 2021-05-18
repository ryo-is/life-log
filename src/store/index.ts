import { inject, InjectionKey } from 'vue';
import { counterStore } from './counter';
import { tasksStore } from './tasks';

export default function globalStore() {
  return {
    counter: counterStore(),
    tasksStore: tasksStore(),
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
