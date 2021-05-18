<template>
  <div class="modal-component">
    <button-element
      class="bg-green-500 hover:bg-green-700"
      :buttonText="'Modal Open'"
      @action="toggleModal(true)"
    ></button-element>
    <Teleport to="#teleport-modal">
      <div
        v-if="state.modal"
        class="
          absolute
          top-0
          left-0
          flex flex-col
          items-center
          justify-center
          w-full
          h-full
          modal
        "
      >
        <div
          class="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-gray-900 bg-opacity-75
            overlay
          "
          @click="toggleModal(false)"
        ></div>
        <div
          class="
            z-10
            flex flex-col
            items-center
            justify-center
            w-1/3
            h-64
            p-4
            bg-gray-400
            rounded-md
            content
          "
        >
          <button-element
            class="bg-red-500 hover:bg-red-700"
            :buttonText="'Modal Close'"
            @action="toggleModal(false)"
          ></button-element>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ButtonElement from '../elements/button.vue';

export default defineComponent({
  components: { ButtonElement },
  setup() {
    const state = reactive({
      modal: false,
    });
    const toggleModal = (value?: boolean) => {
      state.modal = value ? value : !state.modal;
    };

    return {
      state,
      toggleModal,
    };
  },
});
</script>
