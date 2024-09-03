<template>

    <!-- <NuxtParticles id="tsparticles" url="/assets/particles.json" /> -->

    <OrderOverlay />

    <div id="view-port-desktop">

        <!-- Header -->
        <header>
            <img id="ikm-logo" src="/public/logo.png" style="cursor: pointer" @click="useDevice().navigatePush('/main')">
            <div id="nav-bar">
                <NavBarOption dropdown name="Услуги" :dropdown-options="[
                    { 
                        icon: 'site-mini.svg', 
                        name: 'Сайты', 
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        href: '/services/web-dev'
                    },
                    { 
                        icon: 'mobile-mini.svg', 
                        name: 'Мобильная разр.', 
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        href: '/services/mobile-dev'
                    },
                    { 
                        icon: 'bot-mini.svg', 
                        name: 'Боты', 
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        href: '/services/bot-dev'
                    },
                    { 
                        icon: 'soft-mini.svg', 
                        name: 'Разработка ПО', 
                        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        href: '/services/soft-dev'
                    }
                ]"/>
                <NavBarOption name="Каталог проектов" href="/proj-catalog" />
                <NavBarOption name="О нас" href="/about" />
            </div>
        </header>

        <!-- Page Content -->
        <NuxtPage>
            
        </NuxtPage>

        <!-- Footer -->
        <footer>
            <div class="column-flex" style="flex: 1">
                <img id="ikm-logo" style="margin: 0" src="/public/logo.png">
            </div>
            <div class="column-grid" style="flex: 2">

                <div class="entry">Юр. Адрес:</div>
                <div>125167, Россия, г. Москва, вн.тер.г. муниципальный округ Хорошевский, Ленинградский пр-кт, д. 45, к. 2, помещ. 1п</div>

                <div class="entry">Телефон:</div>
                <div>+7(995)-792-20-57</div>

            </div>
            <div class="column-grid" style="flex: 1">

                <div class="entry">ОГРН:</div>
                <div>1247700192233</div>

                <div class="entry">ИНН:</div>
                <div>9714041898</div>

                <div class="entry">КПП:</div>
                <div>771401001</div>

            </div>
            <div class="column-flex" style="flex: 0">
                <SocialMediaBtn icon="mail.svg" href="mailto:hello@ikmsoft.ru" />
                <SocialMediaBtn icon="telegram.svg" href="https://t.me/ikmsoft" />
            </div>

        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive, provide } from 'vue'

type OverlayOptions = {
    shorthand?: true,
    service: 'web-dev' | 'mobile-dev' | 'bot-dev' | 'soft-dev'
}

const overlay = reactive({
    opened: false,
    shorthand: false,
    service: ''
})

function openOverlay(event: Event, options: OverlayOptions)  {
    event.stopPropagation()
    overlay.opened = true
    overlay.service = options.service
    overlay.shorthand = options.shorthand ?? false
}

function cancelOverlay(event: Event) {
    event.stopPropagation()
    overlay.opened = false
}

provide('overlay', overlay)
provide('openOverlay', openOverlay)
provide('cancelOverlay', cancelOverlay)

</script>

<style>

#view-port-desktop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
}
#view-port-desktop::-webkit-scrollbar {
    opacity: 0;
    width: 0;
}
#tsparticles canvas {
    z-index: -10;
}
* {
    caret-color: transparent;
}
::selection {
    background: none;
}
body {
    /* 
    background-image: url(/public/assets/bg.png); 
    */
    background-color: #0F172A;
    color: #EDEDED;
    font-family: "Manrope", sans-serif;
    margin: 0;
}

</style>

<style lang="scss" scoped>

header {
    z-index: 20;
    background-color: #00041390;
    backdrop-filter: blur(8px);
    height: 7vh;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
footer {
    background-color: #00041390;
    backdrop-filter: blur(8px);
    height: fit-content;
    min-height: 10vh;
    font-size: 14px;
    display: flex;
    padding: 50px;
}
#ikm-logo {
    width: 100px;
    margin-left: 10%;
    position: absolute;
}
#nav-bar {
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 30%;
    gap: 30px;
    margin: auto;
}
.column-flex {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.column-grid {
    display: grid;
    grid-template-columns: 100px 1fr;
    column-gap: 10px;
    row-gap: 10px;
    color: #D4E1FF80;
    
    .entry {
        text-align: right;
        color: #EDEDED;
        font-weight: 500;

        & + div {
            max-inline-size: 400px;
        
            &::selection {
                background-color: #D4E1FF30;
            }
        }
    }
}

</style>

<style lang="scss" scoped>
@media (max-width: 1200px) {
    footer {
        flex-direction: column;
        gap: 30px;

        & > :first-child {
            display: none;
        }
    }
}
</style>