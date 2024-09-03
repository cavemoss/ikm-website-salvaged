<template>

</template>

<script setup lang="ts">
definePageMeta({ layout: 'empty' })
useDevice().resizeRedirect({ desktop: '/main', mobile: '/main.mobile' })

</script>