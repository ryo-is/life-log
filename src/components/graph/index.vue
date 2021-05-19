<template>
  <div class="graph">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { Chart } from 'chart.js';

export default defineComponent({
  name: 'graph',
  setup() {
    console.log('setup');
    onMounted(() => {
      const canvas = document.getElementById('canvas');
      if (canvas) {
        const ctx = (canvas as HTMLCanvasElement).getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['a', 'b', 'c'],
              datasets: [
                {
                  label: 'data',
                  data: [3, 1, 5],
                  borderColor: '#ffffff',
                },
              ],
            },
          });
        }
      }
    });
  },
});
</script>
