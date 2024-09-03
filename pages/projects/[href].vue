<template>
    <main>

        <ProjHeader :media="project.thumbnail" :category="project.category" :date="project.date"
        :body="{ title: project.title, text: project.descFull }"
        >
            <CustomerComment 
            :pfp="comments?.find[project.commentKey].pfp" 
            :name="comments?.find[project.commentKey].name"
            :role="comments?.find[project.commentKey].role"
            >
                {{ comments?.find[project.commentKey].commentBody }}
            </CustomerComment>
        </ProjHeader>

        <ProjSlide v-for="(slide, index) of content"
        :image="slide.mediaType === 'image'" :video="slide.mediaType === 'video'"
        :media-src="slide.mediaSource" :title="slide.title"
        :left="even(index)" :right="!even(index)"
        >
            {{ slide.body }}
        </ProjSlide>

    </main>
</template>

<script lang="ts" setup>
import { useAsyncData, useRoute } from '#app'

const apiProjects = await useAsyncData(() => $fetch('/api/projects'))
const apiProjectPages = await useAsyncData(() => $fetch('/api/project-pages'))
const apiComments = await useAsyncData(() => $fetch('/api/comments'))
const router = useRoute()

const getParams = (params: string | string[]): string => 
    Array.isArray(params) ? params.join(", ") : params

function even(index: number): boolean {
    if (index === 0) return true
    else if (index % 2 === 0) return true
    else return false
}
    
const href = getParams(router.params.href)
const allProject = apiProjects.data.value?.allProjects ?? { }

for (let [projectName, project] of Object.entries(allProject)) {
    if (project.href === href) { var thisProject = { ...project, title: projectName }; break }
}

const content = apiProjectPages.data.value?.find[href]
const project = thisProject
const comments = apiComments.data.value

useDevice().resizeRedirect({ mobile: `/projects.mobile/${href}` })

</script>

<style lang="scss" scoped>
main {
    min-height: 93vh;
    gap: 100px;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>