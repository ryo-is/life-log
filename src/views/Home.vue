<template>
  <div class="home flex flex-wrap pt-2">
    <div class="calendar w-1/2 px-6">
      <suspense>
        <template #default>
          <calendar-widget />
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
import TimelineWidget from '@/components/widgets/timeline.vue';
import CalendarWidget from '@/components/widgets/calendar.vue';

export default defineComponent({
  name: 'home',
  components: { TimelineWidget, CalendarWidget },
});
</script>

<style lang="scss" scoped></style>
