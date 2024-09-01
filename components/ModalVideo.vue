<template>
  <ModalBase ref="modal" size="2xl">
    <div class="p-5 flex flex-col gap-3 relative">
      <div>
        <video :poster="poster" autoplay controls>
          <source :src="videoUrl" type="video/mp4" />
        </video>
      </div>
      <div class="flex gap-2">
        <button
          @click="closeAction"
          class="text-black top-5 flex items-center gap-2 justify-center text-sm font-semibold w-full right-5 py-2 bg-slate-50 rounded-lg hover:bg-slate-100"
        >
          Fechar vídeo
        </button>
        <button
          @click="closeAction"
          class="text-white/80 top-5 flex items-center gap-2 justify-center text-sm font-semibold w-full right-5 py-2 bg-slate-800 rounded-lg hover:bg-slate-700"
        >
          Experimentar grátis
        </button>
      </div>
    </div>
  </ModalBase>
</template>
<script>
import ModalBase from "./ModalBase.vue";
import LeadForm from "./forms/Leads.vue";
import { IconUser, IconX } from "@tabler/icons-vue";
import videoUrl from "~/assets/demo-v3.mp4";
import PosterImage from "~/assets/demo-v3-poster.jpg";
export default {
  name: "VideoModal",
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
      videoUrl: videoUrl,
      poster: PosterImage,
      screenWidth: window.innerWidth - 50 + "px",
    };
  },
  computed: {
    modalOpen() {
      return this.$store.state.videoOpen;
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
        console.log("animation is running");
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
            console.log("opening modal");
            this.appModalAanimationRunning = true;
            this.appModalActive = true;
            document.body.classList.toggle("with-modal-open");
            app.classList.add("modal-open");
            setTimeout(() => {
              this.appModalAanimationRunning = false;
            }, 200);
          }, 50);
        } else {
          console.log("closing modal");
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
      this.$store.commit("changeVideoState", false);
    },
  },
  onBeforeUnmount() {
    window.removeEventListener("keydown", this.modalListener);
  },
};
</script>

<style>
.medgical-checkbox {
  @apply h-4 w-4 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500;
}
</style>
