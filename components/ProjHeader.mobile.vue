<template>
    <div class="body">
        <div class="date">{{ date }}</div>
        <div class="title">
            {{ body.title }}
            <img v-if="category == `web-dev`" src="/public/icons/site.svg" style="bottom: 2px"> 
            <img v-else-if="category == `mobile-dev`" src="/public/icons/mobile.svg" style="bottom: 4px">
            <img v-else-if="category == `bot-dev`" src="/public/icons/bot.svg" style="bottom: 4px">
            <img v-else-if="category == `soft-dev`" src="/public/icons/soft.svg" style="bottom: 2px">
        </div>
        <div class="desc">{{ body.text }}</div>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    media: { type: String },
    category: { type: String },
    href: { type: String },
    date: { type: String },
    body: { type: Object }
})

</script>

<style lang="scss" scoped>

.body {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.date {
    font-size: 18px;
    color: #EDEDED67;
}

.title {
    font-family: "Jost", sans-serif;
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 14px;

    img {
        position: relative;
    }
}

.desc {
    font-weight: 400;
    font-size: 16px; 
    color: #D4E1FF75;
    margin-bottom: 16px;
}

</style>