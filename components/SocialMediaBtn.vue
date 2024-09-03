<template>
    <div class="button" @click.prevent="replaceLocation(href)">
        <img :src="`/icons/${icon}`"> {{ href }}
    </div>
</template>

<script setup>
defineProps({
    icon: { type: String },
    href: { type: String }
})

const replaceLocation = (href) => window.location.replace(href)

</script>

<style lang="scss" scoped>

.button {
    $height: 42px;
    background-color: #0F172A;
    border: 1.4px solid #38405F;
    border-radius: calc($height / 2);
    height: $height;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 5px;
    padding-right: 16px;
    opacity: 0.8;
    cursor: pointer;

    img {
        height: 100%;
    }

    &:hover {
        opacity: 1;
    }
}

</style>