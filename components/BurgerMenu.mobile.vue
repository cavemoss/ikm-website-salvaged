<template>
    <div class="overlay" :style="{ 
        visibility: overlay.opened? 'visible' : 'hidden', 
        pointerEvents:  overlay.opened? 'all' : 'none'
    }">
        <div class="box" @click="toggleOverlay">
            <img :src="overlay.opened? '/icons/close.svg' : '/icons/burger.svg'">
        </div> 
        <div class="menu">
            <SideMenuOptionMobile name="Главная" href="/main.mobile" />
            <SideMenuOptionMobile dropdown name="Услуги" :dropdown-options="[
                { name: 'Сайты', href: '/services.mobile/web-dev' },
                { name: 'Мобильная разр.', href: '/services.mobile/mobile-dev' },
                { name: 'Боты', href: '/services.mobile/bot-dev' },
                { name: 'Разработка ПО', href: '/services.mobile/soft-dev' }
            ]"/>
            <SideMenuOptionMobile name="Каталог проектов" href="/proj-catalog.mobile" />
            <SideMenuOptionMobile name="О нас" href="/about.mobile" />
        </div>
    </div>
</template>

<script setup>
import { reactive, provide } from 'vue'

const overlay = reactive({ opened: false })
const toggleOverlay = () => overlay.opened = !overlay.opened

provide('toggleOverlay', toggleOverlay)

</script>

<style lang="scss" scoped>

.box {
    width: 36px;
    height: 36px;
    background-color: #D9D9D937;
    border: 1.4px solid #D9D9D9;
    border-radius: 8px;
    position: relative;
    top: 10px;
    right: 10px;
    display: flex;
    visibility: visible;
    pointer-events: all;
    z-index: 20;

    img {
        margin: auto;
    }
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: end;
    visibility: hidden;
    flex-direction: column;
    z-index: 30;
    pointer-events: none;
    background-color: #000000AA;

    .menu {
        position: absolute;
        background-color: #0F172A;
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 40px;
        padding-right: 0;
        box-sizing: border-box;
    }
}

</style>