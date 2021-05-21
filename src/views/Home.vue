<template>
  <div class="home">
    <suspense>
      <template #default>
        <main-graph></main-graph>
      </template>
    </suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainGraph from '@/components/graph/index.vue';

export default defineComponent({
  name: 'home',
  components: { MainGraph },
});
</script>

<style lang="scss" scoped></style>
