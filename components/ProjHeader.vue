<template>
    <div class="line">
        <div class="content">
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
                <div class="text">{{ body?.text }}</div>
            </div>
            <div class="comment"> <slot></slot> </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    category: { type: String },
    date: { type: String },
    body: { type: Object }
})

</script>

<style lang="scss" scoped>

.line {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to right, #0B111F, #0F172A);
    padding: 30px 0;
}

.content {
    display: flex;
    height: fit-content;
    width: 1200px;
    gap: 60px;
    backdrop-filter: blur(6px);
    align-items: center;
}

.body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 20px;
}

.comment {
    flex: 1;
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

</style>

<style lang="scss" scoped>
@media (max-width: 1300px) {
    .content {
        width: 640px;
        flex-direction: column;
        align-items: baseline;
        gap: 30px;
    }
}
</style>