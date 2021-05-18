<template>
  <button
    class="px-4 py-2 mx-2 font-bold text-white rounded focus:outline-none"
    @click="action"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: 'button',
    },
  },
  setup(_, context) {
    const action = () => {
      context.emit('action');
    };

    return { action };
  },
});
</script>
