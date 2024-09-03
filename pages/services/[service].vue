<template>
    <main>
        <ServiceLine
        :service="service"
        :title="thisService?.title"
        :image="thisService?.image"
        :icon="thisService?.icon"
        :tech="thisService?.tech"
        :price="thisService?.price"
        >
            {{ thisService?.desc }}
        </ServiceLine>
    </main>
</template>

<script lang="ts" setup>
import { useAsyncData } from '#app'
import { useRoute } from '#app'

const apiServicePages = await useAsyncData(() => $fetch('/api/service-pages'))
const router = useRoute()

const getParams = (params: string | string[]): string => 
    Array.isArray(params) ? params.join(", ") : params
    
const service = getParams(router.params.service)
const thisService = apiServicePages.data.value?.find[service]

useDevice().resizeRedirect({ mobile: `/services.mobile/${service}` })

</script>

<style scoped>
main {
    display: flex;
    height: 93vh;
    align-items: center;
}
</style>