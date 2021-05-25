<template>
  <div class="flex">
    <div class="flex items-center cursor-pointer px-3" @click="decrementDate">
      <svg
        class="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
    <div class="w-full">
      <div class="mb-3 flex px-4 justify-between">
        <div class="text-3xl font-bold">{{ calendarItems.nowMonth + 1 }}</div>
        <div class="text-xl font-bold flex items-end">
          <div>{{ calendarItems.monthItems[calendarItems.nowMonth] }}</div>
        </div>
      </div>
      <div class="calendar-wrap flex flex-wrap h-full content-start">
        <div
          v-for="(item, index) in calendarItems.dayItems"
          :key="item"
          class="calendar-item pb-2 font-semibold"
          :class="{ 'text-red-500': index === 0, 'text-blue-500': index === 6 }"
        >
          {{ item }}
        </div>
        <div
          class="
            calendar-item
            date-item
            border-gray-200 border-opacity-75 border
            relative
          "
          :class="{
            'opacity-0': calendarItems.nowMonth !== item.date.get('M'),
          }"
          v-for="item in calendarItems.dateItems"
          :key="item.date.format('MM-DD')"
        >
          <div class="absolute top-1 left-2 font-bold">
            {{ item.date.format('DD') }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center cursor-pointer px-3" @click="incrementDate">
      <svg
        class="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { genCalendarItems } from '@/scripts/day';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'calendar',
  setup() {
    const baseDate = ref(dayjs());
    const calendarItems = computed(() => genCalendarItems(baseDate.value));

    const incrementDate = () => {
      console.log(baseDate);
      baseDate.value = dayjs(baseDate.value).add(1, 'M');
    };
    const decrementDate = () => {
      baseDate.value = dayjs(baseDate.value).subtract(1, 'M');
    };

    return {
      baseDate,
      calendarItems,
      incrementDate,
      decrementDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.calendar-item {
  display: block;
  width: 14.285%;

  &.date-item {
    height: 64px;
  }
}
</style>
