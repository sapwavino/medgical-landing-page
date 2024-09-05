import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      modalOpen: false,
      videoOpen: false,
      cta: 'contact',
      theme: 'light'
    };
  },
  mutations: {
    changeModalState(state, payload) {
      state.modalOpen = payload;
    },
    changeVideoState(state, payload) {
      state.videoOpen = payload;
    },
    modalReason(state, payload) {
      state.cta = payload;
    },
    changeTheme(state, payload) {
      state.theme = payload;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
