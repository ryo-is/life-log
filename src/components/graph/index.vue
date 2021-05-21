<template>
  <div class="graph">
    <canvas id="canvas" class="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Chart } from 'chart.js';
import { Classic10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';

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
            options: {
              layout: {
                padding: 0,
              },
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    color: '#ffffff',
                    font: {
                      size: 14,
                    },
                  },
                },
                title: {
                  display: true,
                  color: '#ffffff',
                  font: {
                    weight: 'bold',
                    size: 24,
                  },
                  text: 'Graph Title',
                },
              },
              scales: {
                xAxis: {
                  display: true,
                  stacked: false,
                  ticks: {
                    color: 'rgba(255, 255, 255, .8)',
                    font: {
                      size: 16,
                    },
                  },
                  grid: {
                    color: 'rgba(255,255,255,.3)',
                    borderColor: 'rgba(255, 255, 255, .8)',
                  },
                },
                yAxis: {
                  display: true,
                  stacked: false,
                  min: 0,
                  ticks: {
                    stepSize: 1,
                    maxTicksLimit: 10,
                    color: 'rgba(255, 255, 255, .8)',
                    font: {
                      size: 16,
                    },
                  },
                  grid: {
                    color: 'rgba(255, 255, 255, .3)',
                    borderColor: 'rgba(255, 255, 255, .8)',
                  },
                },
              },
            },
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
