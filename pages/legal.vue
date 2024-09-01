<template>
    <div class="h-screen flex flex-col items-center justify-center gap-8 overflow-y-auto">
        <a href="https://www.medgical.ai/"><img src="~/assets/logo-white.svg" alt="Medgical" class="logo w-32" /></a>
        <h1 class="text-2xl font-normal">{{ $t('legal.title') }}</h1>
        <div class="text-sm max-w-96 text-white/70 leading-5">
            <p class="mb-1"><b>{{ $t('legal.subtitle') }}</b></p>
            <p class="mb-2.5">medgical.ai is a software as a service (SaaS) provided by:</p>
            <p><b>MEDGICAL, LDA</b><br />
            Rua Póvoa da Marta, nº 217, Recardães, Águeda<br />
            3750-723 Águeda<br />
            Portugal</p>
            E: <a href="mailto:support@medgical.com" class="text-indigo-400">support@medgical.com</a><br />
            Represented by Managing Director: Bruno Eduardo de Miranda Castilho<br />
            Place of jurisdiction: Portugal<br />
            VAT identification number: PT517981130<br />
            <p class="mt-2.5">Medgical&trade; is a trademark registered in Portugal (process number 721457).</p>
            <p class="mt-2.5"><b>Note:</b> This information applies to all websites, domains, and subdomains operated by Medgical.</p>
        </div>
        <a  href="mailto:support@medgical.com" target="_blank" rel="noopener noreferrer"
        class="button-primary-icon w-inline-block relative duration-200 group overflow-hidden shrink-0">
        <div
            class="absolute transition-all duration-200 top-6 blur z-[-1] left-6 right-6 group-hover:top-3 group-hover:left-3 group-hover:right-3 bottom-3 group-hover:bottom-2 bg-gradient-to-t from-[#51a7ee] to-transparent rounded-full">
        </div>
        <span class="primary-button-text w-full">
            {{ $t('legal.contact') }}
        </span>
        </a>
        <a href="https://www.medgical.ai/" class="text-sm mt-20 font-medium items-center flex gap-2 text-white/50 hover:text-white/100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {{ $t('legal.backtohomepage') }}
        </a>
    </div>
</template>