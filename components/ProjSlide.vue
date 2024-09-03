<template>
    <div class="slide">
        <div class="media" v-if="left">
            <img v-if="image" :src="mediaSrc">
            <video controls loop v-if="video" :src="mediaSrc"></video>
        </div>
        <div class="text">
            <div class="title">{{ title }}</div>
            <div class="body"> <slot></slot> </div>
        </div>
        <div class="media" v-if="right">
            <img v-if="image" :src="mediaSrc">
            <video controls loop v-if="video" :src="mediaSrc"></video>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String },
    video: { type: Boolean, default: false },
    image: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    mediaSrc:  { type: String }
})
</script>

<style lang="scss" scoped>

.slide {
    display: flex;
    align-items: center;
    align-self: center;
    width: 1200px;
    gap: 60px;

    .text {
        flex: 1;
        display: flex;
        flex-direction: column;

        .title {
            font-family: "Jost", sans-serif;
            font-size: 45px;
            font-weight: 500;
        }

        .body {
            font-size: 20px;
            color: #D4E1FF75;
            line-height: 30px;
        }
    }

    .media {
        border-radius: 12px;
        flex: 1;
        max-height: 360px;
        border: 1.4px solid #2C334C;
        overflow: hidden;
        display: flex;

        img {
            width: 100%;
        }

        video {
            width: 100%;
        }
    }
}

</style>

<style lang="scss" scoped>
@media (max-width: 1300px) {
    .slide {
        flex-direction: column;
        width: 640px;
        gap: 20px;
    }
}
</style>