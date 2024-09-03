<template>
    <section>
        <div class="header">
            <div class="title">Каталог наших проектов</div>
            <div class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Asperiores earum sit optio corrupti? 
            </div>
        </div>
        <div class="content">
            <CategoriesSideBar :content="[
                { icon: 'site-mini.svg', name: 'Сайты', id: 'web-dev' },
                { icon: 'mobile-mini.svg', name: 'Мобильные приложения', id: 'mobile-dev' },
                { icon: 'bot-mini.svg', name: 'Боты', id: 'bot-dev' },
                { icon: 'soft-mini.svg', name: 'Програмное обеспечение', id: 'soft-dev' }
            ]"/>
            <div class="table">

                <ProjCatalog v-for="(project, projectName) in data?.allProjects"
                :picture="project.thumbnail" 
                :category="project.category"
                :href="project.href"
                :title="String(projectName)"
                >
                    {{ project.descShort }}
                </ProjCatalog>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { useRoute, useAsyncData } from '#app'
useDevice().resizeRedirect({ mobile: '/proj-catalog.mobile' })

const router = useRoute()
const currentCategory = ref(router.query.category)

const { data } = await useAsyncData(() => $fetch('/api/projects'))

provide('currentCategory', currentCategory)

</script>

<style lang="scss" scoped>

section {
    display: flex;
    flex-direction: column;
    min-height: 93vh;
    gap: 50px;
    padding: 120px 9%;
    box-sizing: border-box;
}

.header {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title {
        font-family: "Jost", sans-serif;
        font-size: 60px;
        line-height: 40px;
        font-weight: 400;
    }

    .text {
        max-inline-size: 500px;
        font-size: 20px;
        color: #D4E1FF75;
    }
}

.content {
    display: flex;
    height: 100%;
}

.table {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 30px;
}

</style>

<style lang="scss" scoped>
@media (max-width: 1000px) {
    .content {
        flex-direction: column;
        gap: 50px;
    }
}
</style>
