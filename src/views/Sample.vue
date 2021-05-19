<template>
  <div class="home">
    <counter-display />
    <increment-button />
    <decrement-button />
    <modal class="mt-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CounterDisplay from '@/components/counter/CounterDisplay.vue';
import IncrementButton from '@/components/counter/IncrementButton.vue';
import DecrementButton from '@/components/counter/DecrementButton.vue';
import Modal from '@/components/modal/Modal.vue';

export default defineComponent({
  name: 'home',
  components: {
    CounterDisplay,
    IncrementButton,
    DecrementButton,
    Modal,
  },
});
</script>

<style lang="scss" scoped></style>
