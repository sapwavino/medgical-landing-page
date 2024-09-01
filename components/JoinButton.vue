<template>
    <button
        @click="openModal"
        class="button-primary-icon w-inline-block relative duration-200 group overflow-hidden shrink-0" :class="{
            'small': small
        }">
        <div
            class="absolute transition-all duration-200 top-6 blur z-[-1] left-6 right-6 group-hover:top-3 group-hover:left-3 group-hover:right-3 bottom-3 group-hover:bottom-2 bg-gradient-to-t from-[#51a7ee] to-transparent rounded-full">
        </div>
        <span v-if="cta == 'contact' || cta == 'hospital_clinics_license'" class="primary-button-text w-full">
            {{ $t('navbar.contactus') }}
        </span>
        <span v-else-if="cta == 'try' || cta == 'medical_license'" class="primary-button-text w-full">
            {{ $t('navbar.try') }}
        </span>
    </button>
</template>
<script>
export default {
    props: {
        small: {
            type: Boolean,
            default: false,
        },
        cta: {
            type: String,
            default: 'contact',
        }
    },
    methods: {
        openModal() {
            this.$store.commit('changeModalState', true)
            this.$store.commit('modalReason', this.cta)
            // Tracks the `login` event
            useTrackEvent('cta_click', {
                reason: this.cta
            })
        }
    }
}
</script>