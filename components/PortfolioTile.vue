<template>
    <div class="line">
        <div v-if="left" class="image">
            <img :src="`/media/${media}`">
            <div class="left"></div>
        </div>
        <div class="content" :class="{ right: right, left: left }">
            <div class="body">
                <div class="header">
                    <div class="title">
                        {{ body.title }}
                        <img v-if="category == `web-dev`" src="/public/icons/site.svg"> 
                        <img v-else-if="category == `mobile-dev`" src="/public/icons/mobile.svg">
                        <img v-else-if="category == `bot-dev`" src="/public/icons/bot.svg">
                        <img v-else-if="category == `soft-dev`" src="/public/icons/soft.svg">
                    </div>
                    <div class="date">{{ date }}</div>
                </div>
                <div class="text">{{ body.text }}</div>
                <div class="info-btn" @click="useDevice().navigatePush(`/projects/${href}`)">
                    <img src="/public/icons/info.svg"> Подробнее о проекте
                </div>
            </div>
            <slot> <!-- CustomerComment --> </slot>
        </div>
        <div v-if="right" class="image">
            <img :src="`/media/${media}`">
            <div class="right"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    right: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    media: { type: String },
    category: { type: String },
    href: { type: String },
    date: { type: String },
    body: { type: Object }
})

</script>

<style lang="scss" scoped>

$height: 560px;

.line {
    height: fit-content;
    display: flex;
    justify-content: space-between;
    height: $height;
}

.image {
    flex: 4;
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
    }

    .right {
        background: linear-gradient(to right, #0F172A 0%, #0F172A00 40%);
    }

    .left {
        background: linear-gradient(to left, #0F172A 0%, #0F172A00 40%);
    }
}

.content {
    flex: 3;
    padding: 50px 5%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .body {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
}

.right {
    background: linear-gradient(to right, #0B111F, #0F172A00);
}

.left {
    background: linear-gradient(to left, #0B111F, #0F172A00);
}

.header {
    display: flex;
    gap: 10px;
    min-height: 60px;
    margin-bottom: -10px;

    .title {
        margin-top: auto;
        font-family: "Jost", sans-serif;
        font-size: 38px;
        font-weight: 500;
        line-height: 46px;
        align-items: center;
        gap: 14px;
    }

    img {
        position: relative;
        bottom: -5px;
    }

    .date {
        align-self: baseline;
        margin-left: auto;
        font-size: 19px;
        color: #EDEDED67;
    }
}

.text {
    font-size: 18px;
    color: #D4E1FF75;
    max-inline-size: 500px;
}

.info-btn {
    $btn-extr: 2.5px;

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