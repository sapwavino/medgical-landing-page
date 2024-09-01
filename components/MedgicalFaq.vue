<template>
    <div class="container flex gap-10">
        <div class="flex flex-col items-start gap-5 max-w-4xl mx-auto px-5">
            <h2 class="text-3xl font-semibold text-white/90">
                {{ $t('faq.title') }}
            </h2>
            <div class="flex flex-col gap-0 card items-stretch nopadding">
                <MedgicalQuestion :question="$t('faq.q1')" :answer="$t('faq.a1')" />
                <MedgicalQuestion :question="$t('faq.q2')" :answer="$t('faq.a2')" />
                <MedgicalQuestion :question="$t('faq.q3')" :answer="$t('faq.a3')" />
                <MedgicalQuestion :question="$t('faq.q4')" :answer="$t('faq.a4')" />
                <MedgicalQuestion :question="$t('faq.q5')" :answer="$t('faq.a5')" />
                <MedgicalQuestion :question="$t('faq.q6')" :answer="$t('faq.a6')" />
                <MedgicalQuestion :question="$t('faq.q7')" :answer="$t('faq.a7')" />
                <MedgicalQuestion :question="$t('faq.q8')" :answer="$t('faq.a8')" />
                <MedgicalQuestion :question="$t('faq.q9')" :answer="$t('faq.a9')" />
                <MedgicalQuestion :question="$t('faq.q10')" :answer="$t('faq.a10')" />
                <MedgicalQuestion :question="$t('faq.q11')" :answer="$t('faq.a11')" />
            </div>
        </div>
    </div>
</template>