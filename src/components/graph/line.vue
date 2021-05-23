<template>
  <canvas id="canvas" class="canvas"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import { Chart, ChartOptions } from 'chart.js';
import { Classic10 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';
import { lineGraphOption } from '@/components/graph/graphOptions';

type ChartData =
  | number[]
  | { x: number | string; y: number }[]
  | { [k: string]: number };

let lineChart: Chart<'line', ChartData, string> | null = null;

export default defineComponent({
  name: 'lineChart',
  props: {
    chartData: {
      type: Array as PropType<ChartData>,
      default: () => [],
    },
    chartOptions: {
      type: Object as PropType<ChartOptions<'line'>>,
      default: lineGraphOption,
    },
  },
  watch: {
    chartData(v: ChartData) {
      if (lineChart) {
        lineChart.data.datasets[0].data = v;
        lineChart.update();
      }
    },
  },
  setup(props) {
    onMounted(() => {
      const canvas = document.getElementById('canvas');
      if (canvas) {
        const ctx = (canvas as HTMLCanvasElement).getContext('2d');
        if (ctx) {
          lineChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['a', 'b', 'c', 'd', 'e'],
              datasets: [
                {
                  label: 'data',
                  data: props.chartData,
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
            options: props.chartOptions,
          });
        }
      }
    });
  },
});
</script>
