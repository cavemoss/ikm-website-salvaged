<template>  
    <div class="tile" v-if="currentCategory === category || !currentCategory">
        <div class="info">
            <div class="title">
                {{ title }} 
                <img v-if="category == `web-dev`" src="/public/icons/site-mini.svg">
                <img v-else-if="category == `mobile-dev`" src="/public/icons/mobile-mini.svg">
                <img v-else-if="category == `bot-dev`" src="/public/icons/bot-mini.svg">
                <img v-else-if="category == `soft-dev`" src="/public/icons/soft-mini.svg">
            </div>
            <div class="slot"> <slot>
                <!-- project description -->
            </slot> </div>
            <div class="info-btn" @click="useDevice().navigatePush(`/projects/${href}`)">
                <img src="/public/icons/info.svg"> Подробнее
            </div>
        </div>
        <div class="picture">
            <img :src="`/media/${picture}`">
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
defineProps({
    picture: { type: String },
    category: { type: String },
    title: { type: String },
    href: { type: String }
})

const currentCategory = inject('currentCategory')

</script>

<style lang="scss" scoped>

.tile {
    font-size: 14px;
    display: flex;
    box-sizing: border-box;
    min-width: 500px;
    height: 100%;
    gap: 14px;
    background: linear-gradient(to bottom, #172035, #131928);
    border-radius: 14px;
    border: 1.4px solid #2C334C;
    transition: all 100ms;
    overflow: hidden;
}

.info {
    flex: 5;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 20px 25px;
    gap: 10px;

    .title {
        font-family: "Jost", sans-serif;
        font-weight: 500;
        line-height: 22px;
        font-size: 20px;
        align-items: center;
        margin-bottom: -4px;
        gap: 10px;
    }

    .slot {
        color: #D4E1FF80;
        margin-bottom: 4px;
        display: flex;
        flex-direction: column;
    }
}

.picture {
    flex: 5;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.info-btn {
    $btn-extr: 2.5px;

    margin-top: auto;
    width: fit-content;
    border-radius: 8px;
    padding: 10px 16px;
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: #EDEDED16;
    color: #EDEDED;
    border: 1.4px solid #EDEDED80;
    box-shadow: 0 $btn-extr 0 #EDEDED80;
    font-weight: 400;
    font-size: 14px;  
    cursor: pointer;

    &:hover {
        background-color: #EDEDED30;
    }

    &:active {
        position: relative;
        top: $btn-extr;
        box-shadow: none;
    }

    img {
        position: relative;
        top: 1px;
    }
}

</style>