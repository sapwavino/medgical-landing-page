<template>
    <div class="w-full">
        <input ref="input"
            class="px-4 py-2.5 border text-black/60 focus-outline-medgical border-gray-200 shadow-sm rounded-xl w-full"
            :type="type" :placeholder="placeholder" :value="modelValue"
            :disabled="disabled"
            @input="$emit('update:modelValue', $event.target.value)"
            :error="error" />
        <div v-if="error.length > 0" class="text-accent mt-3 text-xs">{{ error }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        error: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
};
</script>