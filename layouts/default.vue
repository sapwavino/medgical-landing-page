<template>
  <slot />
  <ClientOnly>
    <ModalJoin />
  </ClientOnly>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
const isDarkMode = ref(false);
const store = useStore();
console.log(store);
const checkDarkMode = () => {
  isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  store.commit("changeTheme", isDarkMode.value ? "dark" : "light");
}

onMounted(() => {
  checkDarkMode();

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", checkDarkMode);
});

onBeforeUnmount(() => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.removeEventListener("change", checkDarkMode);
});
</script>
