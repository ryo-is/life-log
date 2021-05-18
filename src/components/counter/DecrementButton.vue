<template>
  <button-element
    class="bg-red-500 hover:bg-red-700"
    :buttonText="'Decrement'"
    @action="decrement"
  ></button-element>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/store/index';
import ButtonElement from '../elements/button.vue';

export default defineComponent({
  components: { ButtonElement },
  setup() {
    const { counter } = useGlobalStore();
    return {
      decrement: counter.decrement,
    };
  },
});
</script>
