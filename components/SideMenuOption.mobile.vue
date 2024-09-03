<template>
    <div class="main">
        <div class="option" @click="useDevice().navigatePush($props.href); toggleOverlay()">
            {{ name }}
        </div>
        <div class="dropdown" v-if="dropdown">
            <div class="option drop" v-for="option in dropdownOptions" @click="useDevice().navigatePush(option.href)">
                <div class="line">
                    <div></div>
                    <div></div>
                </div>
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
defineProps({
    dropdown: { type: Boolean, default: false },
    name: { type: String },
    href: { type: String },
    dropdownOptions: { type: Array }
})

const toggleOverlay = inject('toggleOverlay')

</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.option {
    height: 50px;
    font-weight: 300;
    font-size: 20px;
    font-family: "Jost", sans-serif;
    display: flex;
    align-items: center;
    opacity: 0.6;

    &:hover {
        opacity: 1;
    }
}

.dropdown {
    display: flex;
    flex-direction: column;
    padding-left: 2px;

    & > :last-child > :first-child > :last-child {
        border: none;
    }
}

.drop {
    display: flex;
    gap: 20px;

    .line {
        height: 100%;
        display: flex;
        flex-direction: column;

        div {
            flex: 1;
            width: 10px;
            border-left: 1px solid #EDEDED;
        }

        & > :first-child {
            border-bottom: 1px solid #EDEDED;
        }
    }

    
}


</style>