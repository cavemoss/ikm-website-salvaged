<template>
    <main>

        <!-- Intro -->
        <section id="intro-section">
            <div class="welcome">
                <div class="logo">
                    <img src="/public/logo.png">
                </div>
                <div class="heading">
                    ВОПЛОЩЕНИЕ <span>ВАШИХ ИДЕЙ</span>
                </div>
                <div class="text">
                    Мы занимаемся разработкой 
                    программного обеспечения 
                    под ключ
                </div>
            </div>
            <div class="table">
                <InvitationMobile>НАШИ <span>УСЛУГИ</span> </InvitationMobile>

                <ServiceTileMobile v-for="tile in serviceTiles" 
                :title="tile.h2" :icon="tile.imgSrc" 
                :href="`/services.mobile/${tile.service}`"
                >
                    {{ tile.div }}
                </ServiceTileMobile>
                
            </div>
        </section>

        <!-- Portfolio -->
        <section id="portfolio-section">
            <InvitationMobile link="/proj-catalog.mobile">НАШИ <span>ПРОЕКТЫ</span></InvitationMobile>
            <div class="table">

                <PortfolioTileMobile v-for="(project, projectName) in portfolioTiles"
                :href="project.href" :category="project.category" :media="project.thumbnail" 
                :date="project.date" :body="{ title: projectName, text: project.descFull }"
                />

            </div>
        </section>

        <!-- About Us -->
        <section id="about-section">
            <InvitationMobile link="/about.mobile">ПРО <span>КОМПАНИЮ</span></InvitationMobile>
            <InvitationMobile><span>ПРЕИМУЩЕСТВА</span> РАБОТЫ С НАМИ</InvitationMobile>
            <div class="chunk" v-for="chunk in aboutClauses"> 

                <AboutClause v-for="clause in chunk"
                :title="clause.title" :span="clause.span"
                >
                    {{ clause.text }}
                </AboutClause>
                
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
import { useAsyncData } from '#app'
useDevice().resizeRedirect({ desktop: '/main' })
definePageMeta({ layout: 'default-mobile' })

const apiMain = await useAsyncData(() => $fetch('/api/main'))
const apiProjects = await useAsyncData(() => $fetch('/api/projects'))

const serviceTiles = apiMain.data.value?.serviceTiles
const aboutClauses = apiMain.data.value?.aboutClauses
const portfolioTiles = apiProjects.data.value?.showedOffProjects

</script>

<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    gap: 80px;
}

#intro-section {
    display: flex;
    flex-direction: column;
    gap: 60px;

    .welcome {
        display: flex;
        flex-direction: column;
        font-family: "Jost", sans-serif;
        gap: 15px;
        cursor:default;

        .logo {
            display: flex;
            height: 60px;
            width: 60px;
            border-radius: 6px;
            background-color: #000;

            img {
                width: 100%;
                margin: auto;
            }
        }

        .heading {
            $size: 40px;
            font-size: $size;
            line-height: $size;
            font-weight: 750;
            white-space: nowrap;
            display: flex;
            flex-direction: column;

            span {
                color: #00B698;
                font-size: 43.4px;
                font-weight: 680;
            }
        }

        .text {
            $size: 22px;
            font-size: $size;
            line-height: $size;
            font-weight: 200;
            max-inline-size: 300px;
        }
    }

    .table {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

#portfolio-section {
    display: flex;
    flex-direction: column;

    .table {
        display: flex;
        flex-direction: column;
        gap: 80px;
    }
}

#about-section {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .chunk {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}

</style>
