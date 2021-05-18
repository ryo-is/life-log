<template>
  <div class="w-2/3 m-auto todo">
    <div class="grid grid-flow-row grid-cols-3">
      <div
        class="
          flex-1
          h-56
          m-4
          bg-gray-700
          divide-y divide-gray-400
          rounded-md
          shadow
          todo-item
        "
      >
        <div class="flex items-center py-2 pl-4 pr-2 task-title">
          <div class="text-left flex-grow-3">
            <input
              v-model="state.newTaskTitle"
              type="text"
              class="
                w-5/6
                px-2
                py-1
                bg-gray-700
                border border-gray-400
                rounded-md
                focus:outline-none
              "
              placeholder="Title"
            />
          </div>
          <div
            class="
              py-1
              bg-blue-500
              rounded-md
              cursor-pointer
              flex-grow-1
              hover:bg-blue-700
            "
            @click="add"
          >
            add
          </div>
        </div>
        <div class="p-4 text-left task-content">
          <textarea
            style="resize: none"
            class="
              w-full
              p-2
              bg-gray-700
              border border-gray-400
              rounded-md
              focus:outline-none
            "
            rows="5"
            placeholder="Content"
            v-model="state.newTaskContent"
          />
        </div>
      </div>
      <div
        class="
          flex-1
          h-56
          m-4
          bg-gray-700
          divide-y divide-gray-400
          rounded-md
          shadow
          todo-item
        "
        v-for="(item, index) in tasks"
        :key="index"
      >
        <div class="flex items-center py-2 pl-4 pr-2 task-title">
          <div class="text-left flex-grow-3">{{ item.title }}</div>
          <div
            class="py-1 rounded-md cursor-pointer flex-grow-1"
            :class="{
              'bg-red-500 hover:bg-red-700': item.status === 'todo',
              'bg-yellow-500 hover:bg-yellow-700': item.status === 'doing',
              'bg-green-500 hover:bg-green-700': item.status === 'done',
            }"
          >
            {{ item.status }}
          </div>
        </div>
        <div class="p-4 text-left task-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import { useGlobalStore } from '@/store/index';

export default defineComponent({
  name: 'todo',
  setup() {
    const { tasksStore } = useGlobalStore();
    const tasks = computed(() => tasksStore.tasks);

    const state = reactive({
      newTaskTitle: '',
      newTaskContent: '',
    });

    const add = () => {
      tasksStore.addTasks({
        title: state.newTaskTitle,
        status: 'todo',
        content: state.newTaskContent,
      });
    };

    return {
      tasks,
      state,
      add,
    };
  },
});
</script>

<style lang="scss" scoped></style>
