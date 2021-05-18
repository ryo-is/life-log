import { reactive } from 'vue';

type Task = {
  title: string;
  status: 'done' | 'doing' | 'todo';
  content: string;
};

type State = {
  tasks: Task[];
};

export const tasksStore = () => {
  const state: State = reactive({
    tasks: [
      { title: 'todo_1', status: 'todo', content: 'hogehoge' },
      { title: 'todo_2', status: 'doing', content: 'hogehoge' },
      { title: 'todo_3', status: 'done', content: 'hogehoge' },
      { title: 'todo_4', status: 'done', content: 'hogehoge' },
    ],
  });

  return {
    get tasks() {
      return state.tasks;
    },

    addTasks(task: Task) {
      state.tasks.push(task);
    },
  };
};
