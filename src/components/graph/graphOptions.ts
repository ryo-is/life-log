import { ChartOptions } from 'chart.js';

export const lineGraphOption: ChartOptions<'line'> = {
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
};
