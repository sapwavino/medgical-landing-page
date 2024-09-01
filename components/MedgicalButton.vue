<template>
  <button
    type="button"
    class="transition-all text-sm font-semibold hover:bg-opacity-90 focus:outline-[#0d4f81] outline-offset-2 focus:outline-2 py-3 px-6 rounded-2xl justify-center w-full inline-flex"
    :disabled="disabled"
    :class="{
      ' text-white bg-[#0d4f81] hover:bg-[#0d4f81] ring-1 ring-[#0d4f81] ring-inset cursor-pointer':
        type === 'primary' && !disabled,
      'text-gray-900 bg-slate-50 hover:bg-slate-50 cursor-pointer':
        type === 'secondary' && !disabled,
      'text-white bg-gray-300 cursor-not-allowed':
        disabled && type === 'primary',
      'text-gray-300 bg-gray-100 cursor-not-allowed':
        disabled && type === 'secondary',
    }"
    @click="close"
  >
    <div v-if="loading" class="flex justify-center items-center h-full">
      <IconLoader2 class="h-4 w-4 animate-spin" />
    </div>
    <slot v-else />
  </button>
</template>

<script setup>
import { IconLoader2 } from "@tabler/icons-vue";
const props = defineProps({
  type: String,
  disabled: Boolean,
  loading: Boolean,
});
</script>