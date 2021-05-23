import { ref } from 'vue';

export const graphStore = () => {
  const graphData = ref<number[]>([]);

  return {
    get graphData() {
      return graphData;
    },

    async setData() {
      console.log('setData');
      graphData.value = await new Promise<number[]>((resolve) => {
        return setTimeout(() => {
          const data = [];
          for (let i = 0; i < 5; i++) {
            data.push(Math.floor(Math.random() * 11));
          }
          resolve(data);
        }, 1000);
      });
    },
  };
};
