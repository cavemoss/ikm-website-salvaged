<template>
    <div v-if="display">
        <div class="media">
            <img :src="`/media/${media}`">
            <div></div>
        </div>
        <div class="content">
            <div class="date">{{ date }}</div>
            <div class="title">
                {{ body.title }}
                <img v-if="category == `web-dev`" src="/public/icons/site.svg" style="bottom: 2px"> 
                <img v-else-if="category == `mobile-dev`" src="/public/icons/mobile.svg" style="bottom: 4px">
                <img v-else-if="category == `bot-dev`" src="/public/icons/bot.svg" style="bottom: 4px">
                <img v-else-if="category == `soft-dev`" src="/public/icons/soft.svg" style="bottom: 2px">
            </div>
            <div class="desc">
                <span>{{ body.text }}</span>
                <u @click="useDevice().navigatePush(`/projects.mobile/${href}`)">Подробнее</u>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    media: { type: String },
    category: { type: String },
    href: { type: String },
    date: { type: String },
    body: { type: Object },
    display: { type: Boolean, default: true }
})

</script>

<style lang="scss" scoped>

.media {
    $height: 300px;
    height: $height;
    margin: 0 -16px;

    img {
        height: $height;
        position: absolute;
        width: 100%;
        object-fit: cover;
    }

    div {
        position: absolute;
        height: $height;
        width: 100%;
        background: linear-gradient(to top, #0F172A 0%, #0F172A00 40%);
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 4px;

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

        span {
            padding-right: 15px;
        }

        u {
            color: #EDEDED;
        }
    }

}

</style>