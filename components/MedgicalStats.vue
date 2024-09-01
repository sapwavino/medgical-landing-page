<template>
    <div class="container mb-40">
        <div
            class="md:flex grid grid-cols-2 gap-10 justify-center mb-14 text-center">
            <div>
                <div
                    class="flex items-center justify-center mb-2 gap-4 text-3xl font-medium">
                    <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
                    </svg>
                    2h
                </div>
                <div class="text-sm text-center text-white/70 leading-4 w-40  mx-auto">
                    {{ $t('stats.timeusedindocumentation') }}
                </div>
            </div>
            <div>
                <div
                    class="flex items-center mb-2 gap-4 justify-center text-3xl font-medium">
                    9.7/10
                </div>
                <div class="text-sm text-center text-white/70 leading-4  w-40  mx-auto">
                    {{ $t('stats.patientsatisfaction') }}
                </div>
            </div>
            <div>
                <div
                    class="flex items-center mb-2 gap-4 justify-center text-3xl font-medium">
                    9.4/10
                </div>
                <div class="text-sm text-center text-white/70 leading-4  w-40  mx-auto">
                    {{ $t('stats.lesserrors') }}
                </div>
            </div>
            <div>
                <div
                    class="text-center mb-2 text-3xl font-medium justify-center">
                    < 1min </div>
                        <div class="text-sm text-center text-white/70 leading-4 w-52 mx-auto">
                            {{ $t('stats.timetodocumentation') }}
                        </div>
                </div>
            </div>
            <div
                class=" text-sm text-white/40 text-center max-w-xl mx-auto px-7 md:px-0">
                {{ $t('stats.footnote') }}
            </div>
        </div>
</template>