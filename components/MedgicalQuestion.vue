<template>
    <div class="flex flex-col w-full group py-5 cursor-default px-5" :class="{
        'border-b border-white/10': showBottomBorder
    }">
        <span class="text-base relative pr-5 font-medium cursor-pointer transition-all text-white/80 group-hover:text-white"
            :class="{
                'text-white/90': isOpen,
            }" @click="isOpen = !isOpen">
            {{ question }}
        
            <IconPlus class="absolute transition-all right-0 h-5 w-5 top-1/2 transform -translate-y-1/2" :class="{
                'rotate-45': isOpen
            }" />
        </span>
        <div class=" transition-all ease-in-out overflow-hidden" :style="{
                height: isOpen ? `${this.$refs.paragraph.scrollHeight}px` : '0px'
            }">
            <p ref="paragraph" class="text-sm text-white/70 pb-2.5 pt-3">{{ answer }}</p>
        </div>
    </div>
</template>
<script>
import { IconPlus } from '@tabler/icons-vue'
export default {
    components: {
        IconPlus
    },
    props: {
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        showBottomBorder: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>