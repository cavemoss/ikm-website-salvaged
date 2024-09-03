<template>
    <main>

        <ProjHeaderMobile :media="project.thumbnail" :category="project.category" :date="project.date"
        :body="{ title: project.title, text: project.descFull }"
        >
            <CustomerCommentMobile 
            :pfp="comments?.find[project.commentKey].pfp" 
            :name="comments?.find[project.commentKey].name"
            :role="comments?.find[project.commentKey].role"
            >
                {{ comments?.find[project.commentKey].commentBody }}
            </CustomerCommentMobile>
        </ProjHeaderMobile>

        <ProjSlideMobile v-for="slide of content"
        :image="slide.mediaType === 'image'" :video="slide.mediaType === 'video'"
        :media-src="slide.mediaSource" :title="slide.title"
        >
            {{ slide.body }}
        </ProjSlideMobile>

    </main>
</template>

<script lang="ts" setup>
import { useAsyncData, useRoute } from '#app'
definePageMeta({ layout: 'default-mobile' })

const apiProjects = await useAsyncData(() => $fetch('/api/projects'))
const apiProjectPages = await useAsyncData(() => $fetch('/api/project-pages'))
const apiComments = await useAsyncData(() => $fetch('/api/comments'))
const router = useRoute()

const getParams = (params: string | string[]): string => 
    Array.isArray(params) ? params.join(", ") : params
    
const href = getParams(router.params.href)
const allProject = apiProjects.data.value?.allProjects ?? { }
useDevice().resizeRedirect({ desktop: `/projects/${href}` })

for (let [projectName, project] of Object.entries(allProject)) {
    if (project.href === href) { var thisProject = { ...project, title: projectName }; break }
}

const content = apiProjectPages.data.value?.find[href]
const project = thisProject
const comments = apiComments.data.value

</script>

<style lang="scss" scoped>
main {
    min-height: 93vh;
    gap: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 3px;
}
</style>