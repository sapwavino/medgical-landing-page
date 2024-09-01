<template>
  <ModalBase ref="modal" size="md">
    <div class="px-7 pb-7 pt-6 flex flex-col gap-3 relative">
      <button @click="closeAction"
        class="absolute text-black top-5 right-5 p-1 rounded-lg hover:bg-slate-100">
        <IconX class="h-6 w-6 opacity-30" />
      </button>
      <LeadForm />
    </div>
  </ModalBase>
</template>
<script>
import ModalBase from "./ModalBase.vue";
import LeadForm from "./forms/Leads.vue";
import { IconUser, IconX } from "@tabler/icons-vue";

export default {
  components: {
    ModalBase,
    IconUser,
    IconX,
    LeadForm,
  },
  data() {
    return {
      appModalAanimationRunning: false,
      appModalActive: false,
    };
  },
  computed: {
    modalOpen() {
      return this.$store.state.modalOpen
    },
  },
  watch: {
    modalOpen(val) {
      this.animateAppModal(val);
      if (val) {
        this.open();
        window.addEventListener("keydown", this.modalListener);
      } else {
        this.close();
        window.removeEventListener("keydown", this.modalListener);
      }
    },
  },
  methods: {
    animateAppModal(open = true) {
      if (this.appModalAanimationRunning) {
        //animation is running
        console.log("animation is running")
        return;
      }
      const app = document.getElementById("__nuxt");
      if (!app.classList.contains("animating-modal")) {
        app.classList.add("animating-modal");
      }
      setTimeout(() => {
        //add class to body
        if (open) {
          if (this.appModalActive) {
            return;
          }
          //hide hide-on-modal
          const hideOnModal = document.querySelectorAll(".hide-on-modal");
          hideOnModal.forEach((element) => {
            element.classList.add("opacity-0");
          });
          setTimeout(() => {
            console.log("opening modal")
            this.appModalAanimationRunning = true;
            this.appModalActive = true;
            document.body.classList.toggle("with-modal-open");
            app.classList.add("modal-open");
            setTimeout(() => {
              this.appModalAanimationRunning = false;
            }, 200)
          }, 50)
        } else {
          console.log("closing modal")
          this.appModalAanimationRunning = true;
          this.appModalActive = false;
          app.classList.remove("modal-open");
          app.classList.add("modal-close");
          //delay to allow modal to close
          setTimeout(() => {
            document.body.classList.toggle("with-modal-open");
            app.classList.remove("animating-modal");
            app.classList.remove("modal-close");
            this.appModalAanimationRunning = false;
            const hideOnModal = document.querySelectorAll(".hide-on-modal");
            hideOnModal.forEach((element) => {
              element.classList.remove("opacity-0");
            });
          }, 500);
        }
      }, 0);
    },
    join() {
      console.log("Joining");
    },
    modalListener(e) {
      if (e.key === "Escape") {
        this.closeAction();
      }
    },
    open() {
      this.$refs.modal.open();
      setTimeout(() => {
        this.page = 0;
        this.emailError = "";
        this.$refs.nameRef.focus();
      }, 100);
      //close model with ESC ke
    },
    close() {
      this.$refs.modal.close();
    },
    closeAction() {
      this.$store.commit("changeModalState", false);
    },
  },
  onBeforeUnmount() {
    window.removeEventListener("keydown", this.modalListener);
  },
}

</script>

<style>
.medgical-checkbox {
  @apply h-4 w-4 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500;
}
</style>