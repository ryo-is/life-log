<template>
  <div class="home">
    <suspense>
      <template #default>
        <graph-widget />
      </template>
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GraphWidget from '@/components/widgets/graph.vue';

export default defineComponent({
  name: 'home',
  components: { GraphWidget },
});
</script>

<style lang="scss" scoped></style>
