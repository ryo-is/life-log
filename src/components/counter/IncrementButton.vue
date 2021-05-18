<template>
  <button-element
    class="bg-blue-500 hover:bg-blue-700"
    :buttonText="'Increment'"
    @action="increment"
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
      increment: counter.increment,
    };
  },
});
</script>
