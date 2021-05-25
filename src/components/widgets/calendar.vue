<template>
  <div class="mb-3 flex px-4 justify-between">
    <div class="text-3xl font-bold">{{ nowMonth + 1 }}</div>
    <div class="text-xl font-bold flex items-end">
      <div>{{ monthItems[nowMonth] }}</div>
    </div>
  </div>
  <div class="calendar-wrap flex flex-wrap h-full">
    <div
      v-for="(item, index) in dayItems"
      :key="item"
      class="calendar-item pb-2 font-semibold"
      :class="{ 'text-red-500': index === 0, 'text-blue-500': index === 6 }"
    >
      {{ item }}
    </div>
    <div
      class="
        calendar-item
        border-gray-200 border-opacity-75 border
        h-1/5
        relative
      "
      :class="{ 'opacity-0': nowMonth !== item.date.get('M') }"
      v-for="item in calendarItems"
      :key="item.date.format('MM-DD')"
    >
      <div class="absolute top-1 left-2 font-bold">
        {{ item.date.format('DD') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { genCalendarItems } from '@/scripts/day';

export default defineComponent({
  name: 'calendar',
  setup() {
    const { nowMonth, calendarItems, dayItems, monthItems } =
      genCalendarItems();

    return { nowMonth, calendarItems, dayItems, monthItems };
  },
});
</script>

<style lang="scss" scoped>
.calendar-item {
  width: 14.2%;
}
</style>
