<template>
    <main>

        <!-- Intro -->
        <section id="intro-section">
            <div class="welcome">
                <div class="heading">ВОПЛОЩЕНИЕ<br><span>ВАШИХ ИДЕЙ</span></div>
                <div class="text">Мы занимаемся разработкой программного обеспечения под ключ</div>
            </div>
            <div class="table">

                <ServiceTile v-for="tile in serviceTiles" :service="tile.service">
                    <img :src="tile.imgSrc">
                    <h2>{{ tile.h2 }}</h2>
                    <div>{{ tile.div }}</div>
                </ServiceTile>
                
            </div>
        </section>

        <!-- Portfolio -->
        <section id="portfolio-section">

            <PortfolioTile v-for="(project, projectName, index) in portfolioTiles"
            :href="project.href" :category="project.category" :media="project.thumbnail" 
            :date="project.date" :body="{ title: projectName, text: project.descFull }"
            :right="even(index)" :left="!even(index)" 
            >
                <CustomerComment 
                :pfp="comments?.find[project.commentKey].pfp" 
                :name="comments?.find[project.commentKey].name"
                :role="comments?.find[project.commentKey].role"
                >
                    {{ comments?.find[project.commentKey].commentBody }}
                </CustomerComment>
            </PortfolioTile>

        </section>

        <!-- About Us -->
        <section id="about-section">
            <div class="heading">
                ПРЕИМУЩЕСТВА <span>РАБОТЫ С НАМИ</span>
            </div>
            <div class="clauses">
                <div class="chunk" v-for="chunk in aboutClauses">
                    
                    <AboutClause v-for="clause in chunk"
                    :title="clause.title" :span="clause.span"
                    >
                        {{ clause.text }}
                    </AboutClause>

                </div>
            </div>
        </section>

    </main>
</template>

<script lang="ts" setup>
import { useAsyncData } from '#app'
useDevice().resizeRedirect({ mobile: '/main.mobile' })

const apiMain = await useAsyncData(() => $fetch('/api/main'))
const apiProjects = await useAsyncData(() => $fetch('/api/projects'))
const apiComments = await useAsyncData(() => $fetch('/api/comments'))

const serviceTiles = apiMain.data.value?.serviceTiles
const aboutClauses = apiMain.data.value?.aboutClauses
const portfolioTiles = apiProjects.data.value?.showedOffProjects
const comments = apiComments.data.value

function even(index: number): boolean {
    if (index === 0) return true
    else if (index % 2 === 0) return true
    else return false
}

</script>

<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    gap: 180px;
    padding: 180px 0;
}

#intro-section {
    height: fit-content;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .welcome {
        display: flex;
        flex-direction: column;
        font-family: "Jost", sans-serif;
        gap: 26px;
        cursor:default;

        .heading {
            $size: 70px;
            font-size: $size;
            line-height: $size;
            text-align: center;
            font-weight: 750;

            span {
                color: #00B698;
                font-size: 76.4px;
                font-weight: 670;
            }
        }

        .text {
            $size: 28px;
            max-inline-size: 500px;
            font-size: $size;
            line-height: $size;
            font-weight: 200;
            padding-left: 6px;
        }
    }

    .table {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
}

#portfolio-section {
    display: flex;
    flex-direction: column;
    gap: 180px;
}

#about-section {
    display: flex;
    flex-direction: column;
    padding: 0 12%;
    gap: 30px;

    .heading {
        
        font-size: 44px;
        font-family: "Jost", sans-serif;
        font-weight: 600;

        span {
            font-weight: 220
        }
    }

    .clauses {
        display: grid;
        grid-template-columns: 1fr;
        flex-basis: content;
        gap: 30px;

        .chunk {
            display: flex;
            gap: 30px;
            height: fit-content;
        }
    }
}

</style>

<style lang="scss" scoped>
@media (max-width: 1270px) {
    main {
        padding-top: 120px;
        gap: 100px;
    }
    #intro-section {
        flex-direction: column;
        gap: 60px;
    }
}
</style>
