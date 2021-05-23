<template>
  <div class="graph">
    <line-chart :chart-data="chartData.value" />
  </div>
  <button-element
    class="bg-blue-500 hover:bg-blue-700"
    :buttonText="'Set Data'"
    @action="setData"
  ></button-element>
  <div>{{ chartData }}</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useGlobalStore } from '@/store/index';
import LineChart from '@/components/graph/line.vue';
import ButtonElement from '../elements/button.vue';

export default defineComponent({
  name: 'graphWidget',
  components: { LineChart, ButtonElement },
  async setup() {
    const { graphStore } = useGlobalStore();
    await graphStore.setData();
    const chartData = computed(() => graphStore.graphData);

    return {
      chartData,
      setData: graphStore.setData,
    };
  },
});
</script>

<style lang="scss" scoped>
.graph {
  margin: auto;
  width: 50%;
}
</style>
