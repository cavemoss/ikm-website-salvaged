<template>
    <div class="line">

        <div class="image">
            <img :src="`/media/${image}`">
            <div></div>
        </div>

        <div class="content">

            <div class="main">
                <img :src="`/icons/${icon}`">
                <div class="title">{{ title }} <span>От {{ price.toLocaleString('de-DE') }} ₽</span> </div>
                <div class="text"> <slot></slot> </div>

                <div class="buttons">
                    <div class="launch-btn" @click="openOverlay($event, { service: $props.service })">
                        <img src="/public/icons/launch.svg"> Начать проект
                    </div>
                    <div class="info-btn" @click="useDevice().navigatePush(`/proj-catalog?category=${service}`)">
                        <img src="/public/icons/info.svg"> Примеры проектов
                    </div>
                </div>
            </div>

            <div class="tech">
                <div class="header">Технологии</div>
                <div class="container">
                    <TechIcon v-for="icon in tech" left :icon="icon.icon" :name="icon.name" />
                </div>
            </div>

        </div>
        
    </div>
</template>

<script setup>
import { inject } from 'vue'
defineProps({
    icon: { type: String },
    image: { type: String },
    title: { type: String },
    service: { type: String },
    tech: { type: Array }, 
    price: { type: Number }
})

const openOverlay = inject('openOverlay')

</script>

<style lang="scss" scoped>

.line {
    $height: 500px;
    height: $height;
    display: flex;
    position: sticky;
    top: 7vh;

    .image {
        height: 100%;
        flex: 0.43;
        display: flex;
        flex-direction: column;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        div {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            margin-top: -$height;
            background: linear-gradient(to left, #0F172A 0%, #0F172A00 40%);
        }
    }

    .content {
        flex: 0.57;
        background: linear-gradient(to left, #0B111F, #0F172A00);
        padding: 50px 30px;
        display: flex;  
        gap: 20px;

        .main {
            display: flex;
            margin-right: 20px;
            flex: 0.75;
            flex-direction: column;
            align-items: baseline;
            gap: 10px;
        }

        .tech {
            flex: 0.25;
            display: flex;
            flex-direction: column;
            gap: 20px;
            border-left: 1.4px solid #D4E1FF80;
            box-sizing: border-box;
            padding-left: 20px;

            .header {
                font-family: "Jost", sans-serif;
                font-size: 24px;
                font-weight: 400;
                color: #D4E1FF75;
            }
            
            .container {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
            }
        }
    }
}

.title {
    font-family: "Jost", sans-serif;
    font-size: 40px;
    line-height: 30px;
    margin: 10px 0;
    font-weight: 500;

    span {
        font-size: 27px;
        font-weight: 200;
        white-space: nowrap;
        background-color: #D4E1FF10;
        color: #00FFD5;
    }
}

.text {
    overflow: auto;
    max-height: 100%;
    font-size: 16px;
    color: #D4E1FF75;
}

.buttons {
    display: flex;
    gap: 16px;
    margin-top: auto;

    $btn-extr: 2.5px;

    .launch-btn {
        background-color: #00B698;
        color: #172035;
        font-weight: 600;
        font-size: 14px;
        min-width: fit-content;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 4px 14px;
        box-shadow: 0 $btn-extr 0 #00B69880;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            margin-top: $btn-extr;
            margin-bottom: -$btn-extr;
            opacity: 1;
            box-shadow: none;
        }

        img {
            margin-left: -5px;
        }
    }

    .info-btn {
        min-width: fit-content;
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
}

</style>