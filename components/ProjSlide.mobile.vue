<template>
    <div class="slide">
        <div class="media">
            <img v-if="image" :src="mediaSrc">
            <video controls loop v-if="video" :src="mediaSrc"></video>
        </div>
        <div class="text">
            <div class="title">{{ title }}</div>
            <div class="body"> <slot></slot> </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String },
    video: { type: Boolean, default: false },
    image: { type: Boolean, default: false },
    mediaSrc:  { type: String }
})

</script>

<style lang="scss" scoped>

.slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;
}

.text {
    display: flex;
    flex-direction: column;

    .title {
        font-family: "Jost", sans-serif;
        font-size: 38px;
        font-weight: 500;
    }

    .body {
        font-size: 17px; 
        color: #D4E1FF75;
    }
}

.media {
    background-color: #000;
    margin: 0 -19px;
    max-height: 240px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    video {
        width: 100%;
        height: 100%;
        background-color: #000;
    }
}


</style>