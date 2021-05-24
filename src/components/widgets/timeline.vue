<template>
  <div>
    <template v-for="(item, index) in items" :key="`timeline-item-${index}`">
      <div class="timeline-item flex h-24">
        <div class="w-16 flex flex-col items-center justify-center">
          <div
            class="border-3 h-1/2 w-0"
            :class="{ 'border-blue-700': index, 'border-gray-900': !index }"
          ></div>
          <div
            class="border-3 h-1/2 w-0"
            :class="{
              'border-blue-700': index + 1 !== items.length,
              'border-gray-900': index + 1 === items.length,
            }"
          ></div>
          <div
            class="
              w-16
              h-16
              border-blue-700 border-5
              absolute
              bg-gray-900
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <span class="text-2xl">{{ item.icon }}</span>
          </div>
        </div>
        <div class="flex items-center px-4 text-xl">
          <div class="time pr-4">{{ formatDate(item.time, 'HH:mm') }}</div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div></template
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { formatDate } from '@/utils/day';

export default defineComponent({
  name: 'timeline',
  async setup() {
    const items = ref([
      {
        text: '起床',
        time: '2021-05-24T08:00+09:00',
        icon: '🔅',
      },
      {
        text: '朝食',
        time: '2021-05-24T08:15+09:00',
        icon: '🍞',
      },
      {
        text: '昼食',
        time: '2021-05-24T12:00+09:00',
        icon: '🍱',
      },
      {
        text: '夕食',
        time: '2021-05-24T18:00+09:00',
        icon: '🍖',
      },
      {
        text: '就寝',
        time: '2021-05-24T23:30+09:00',
        icon: '🛌',
      },
    ]);

    return {
      items,
      formatDate,
    };
  },
});
</script>
