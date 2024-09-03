<template>
    <section>
        <AboutLine>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis consectetur, 
            recusandae ipsum vitae voluptatum nemo sapiente consequatur modi porro saepe doloremque 
        </AboutLine>
    </section>
</template>

<script lang="ts" setup>
import { useDevice } from '~/composables/useDevice'

useDevice().resizeRedirect({ mobile: '/about.mobile' })

</script>

<style lang="scss" scoped>

section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 93vh;
    align-items: center;
}

</style>