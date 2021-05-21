declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';
