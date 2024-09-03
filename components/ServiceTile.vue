<template>
    <div class="tile" @click="useDevice().navigatePush(`/services/${$props.service}`)">

        <div id="slot-desktop"> <slot></slot> </div>

        <div class="launch-btn" @click="openOverlay($event, { shorthand: true, service: $props.service })">
            <img src="/public/icons/launch.svg"> Начать проект
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
defineProps([ 'service' ])
const openOverlay = inject('openOverlay')

</script>

<style lang="scss">

#slot-desktop {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    img {
        margin-bottom: 16px;
    }

    h2 {
        font-family: "Jost", sans-serif;
        font-weight: 500;
        font-size: 20px;
        margin: 0;
    }

    div {
        color: #D4E1FF80;
        max-inline-size: 230px;
    }
}

</style>

<style lang="scss" scoped>

.price {
    font-family: "Jost", sans-serif;
    position: absolute;
    align-self: flex-end;
    font-size: 26px;
    font-weight: 200;
    background-color: #A3FFF010;
    color: #00FFD5;
}

.tile {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px 25px;
    width: 300px;
    height: 240px;
    gap: 14px;
    background: linear-gradient(to bottom, #172035, #131928);
    border-radius: 16px;
    border: 1.4px solid #2C334C;
    transition: all 100ms;
    position: relative;
    top: 0;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 0 9px #00B69867;
        border-color: #00B698;
        background: linear-gradient(to bottom, #182646, #1C253B);
    }
}

.launch-btn {
    $btn-extr: 2.5px;

    margin-top: auto;
    width: fit-content;
    border-radius: 8px;
    padding: 4px 14px;
    display: flex;
    align-items: center;
    background-color: #00B698;
    box-shadow: 0 $btn-extr 0 #00B69880;
    color: #172035;
    font-weight: 600;
    font-size: 14px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        position: relative;
        top: $btn-extr;
        opacity: 1;
        box-shadow: none;
    }

    img {
        margin-left: -5px;
    }
}

</style>