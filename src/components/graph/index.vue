<template>
  <div class="graph">
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Chart } from 'chart.js';
import { Classic10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';
import { lineGraphOption } from '@/components/graph/graphOptions';

export default defineComponent({
  name: 'graph',
  async setup() {
    console.log('setup');

    const getData = () => {
      return new Promise<number[]>((resolve) => {
        return setTimeout(() => {
          resolve([3, 1, 5, 2, 4]);
        }, 1000);
      });
    };

    onMounted(async () => {
      const canvas = document.getElementById('canvas');
      if (canvas) {
        const ctx = (canvas as HTMLCanvasElement).getContext('2d');
        if (ctx) {
          const data = await getData();
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['a', 'b', 'c', 'd', 'e'],
              datasets: [
                {
                  label: 'data',
                  data,
                  borderColor: Classic10[0],
                  backgroundColor: Classic10[0],
                  pointBackgroundColor: Classic10[0],
                  pointRadius: 5,
                  pointHoverRadius: 7,
                  fill: false,
                  tension: 0.1,
                },
              ],
            },
            options: lineGraphOption,
          });
        }
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.graph {
  margin: auto;
  width: 50%;
}
</style>
