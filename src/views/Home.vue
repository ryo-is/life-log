<template>
  <div class="home flex">
    <div class="graph w-1/2 px-6">
      <suspense>
        <template #default>
          <graph-widget />
        </template>
      </suspense>
    </div>
    <div class="timeline w-1/2 px-6">
      <suspense>
        <template #default>
          <timeline-widget />
        </template>
      </suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphWidget from '@/components/widgets/graph.vue';
import TimelineWidget from '@/components/widgets/timeline.vue';

export default defineComponent({
  name: 'home',
  components: { GraphWidget, TimelineWidget },
});
</script>

<style lang="scss" scoped></style>
