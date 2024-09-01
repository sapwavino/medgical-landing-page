<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-40">
      <TransitionChild
        as="template"
        enter="duration-500 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-500 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm backdrop-grayscale" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-500 ease-out"
            enter-from="opacity-0 scale-125"
            enter-to="opacity-100 scale-100"
            leave="duration-400 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-110"
          >
            <DialogPanel
              class="w-full transform ring-1 ring-black/70 ring-inset overflow-hidden rounded-3xl bg-white text-left align-middle shadow-lg shadow-black/10 transition-all"
              :class="{
                'max-w-md': size === 'md',
                'max-w-sm': size === 'sm',
                'max-w-xl': size === 'xl',
                'max-w-2xl': size === '2xl',
              }"
            >
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    size: {
      type: String,
      default: "md",
    },
  },
  methods: {
    close() {
      this.$emit("close");
      this.isOpen = false;
    },
    open() {
      this.$emit("open");
      this.isOpen = true;
    },
  },
}
</script>