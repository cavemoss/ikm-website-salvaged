<template>
    <main>
        <AboutLineMobile>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis consectetur, 
            recusandae ipsum vitae voluptatum nemo sapiente consequatur modi porro saepe doloremque 
        </AboutLineMobile>
    </main>
</template>

<script lang="ts" setup>
import { useDevice } from '~/composables/useDevice'
definePageMeta({ layout: 'default-mobile' })

useDevice().resizeRedirect({ desktop: '/about' })

</script>

<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 90vh;
    align-items: center;
}

</style>