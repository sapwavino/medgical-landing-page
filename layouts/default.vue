<template>
    <slot />
    <ClientOnly>
        <ModalJoin />
    </ClientOnly>
</template>