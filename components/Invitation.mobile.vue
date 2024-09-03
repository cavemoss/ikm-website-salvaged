<template>
    <div class="line" @click="useDevice().navigatePush(link)">
        <img v-if="link" src="/public/icons/link.svg"> 
        <div id="slot-mobile"> <slot> </slot> </div>
    </div>
</template>

<script setup>
defineProps(['link'])

</script>

<style lang="scss">

#slot-mobile {
    font-size: 30px;
    line-height: 30px;
    font-family: "Jost", sans-serif;
    font-weight: 220;

    span {
        font-weight: 600;
    }
}

</style>

<style lang="scss" scoped>

.line {
    background: linear-gradient(to right, #000000, #00000000);
    margin: 0 -16px;
    padding: 10px 16px;
    width: 100%;
    display: flex;

    img {
        margin-right: 10px;
    }
}

</style>