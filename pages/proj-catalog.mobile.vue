<template>
    <main>
        <div class="header">
            <InvitationMobile><span>КАТАЛОГ</span> НАШИХ ПРОЕКТОВ</InvitationMobile>
            <CategoriesSideBarMobile :content="[
                { icon: 'site-mini.svg', name: 'Сайты', id: 'web-dev' },
                { icon: 'mobile-mini.svg', name: 'Мобильные приложения', id: 'mobile-dev' },
                { icon: 'bot-mini.svg', name: 'Боты', id: 'bot-dev' },
                { icon: 'soft-mini.svg', name: 'Програмное обеспечение', id: 'soft-dev' }
            ]"/>
        </div>
        <div class="table">

            <PortfolioTileMobile v-for="(project, projectName) in data?.allProjects"
            :href="project.href" :category="project.category" :media="project.thumbnail" 
            :date="project.date" :body="{ title: projectName, text: project.descFull }"
            :display="project.category === currentCategory || !currentCategory"
            />

        </div>
    </main>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import { ref, provide } from 'vue'
definePageMeta({ layout: 'default-mobile' })
useDevice().resizeRedirect({ desktop: '/proj-catalog' })

const currentCategory = ref(null)
provide('currentCategory', currentCategory)


const { data } = await useAsyncData(() => $fetch('/api/projects'))

</script>

<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.header {

    .text {
        font-weight: 360;
    }
}

.table {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

</style>