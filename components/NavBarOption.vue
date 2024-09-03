<template>
    <div class="main">
        <div v-if="dropdown" class="header">
            {{ name }} <img src="/public/icons/arrow.svg">
        </div>
        <div v-else class="header" @click="useDevice().navigatePush($props.href)">
            {{ name }}
        </div>
        <div v-if="dropdown" class="dropdown">

            <div class="option" 
            v-for="option in dropdownOptions" 
            @click="useDevice().navigatePush(option.href)"
            >
                <div style="display: flex; flex-direction: column; align-items: center">
                    <img style="margin: auto 10px auto 0" :src="`/icons/${option.icon}`">
                </div>
                <div class="head">
                    {{ option.name }}
                </div>
                <div> 
                    <!-- filler -->
                </div>
                <div class="desc">
                    {{ option.desc }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
defineProps({
    dropdown: { type: Boolean, default: false },
    name: { type: String },
    href: { type: String },
    dropdownOptions: { type: Array }
})

</script>

<style lang="scss" scoped>

.main {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    height: 100%;
    min-width: fit-content;
    cursor: pointer;

    .header { 
        font-weight: 430;
        font-family: "Jost", sans-serif;
        margin: auto; 
        opacity: 0.6;

        img {
            transition: transform 200ms;
            width: 13px;
        }

        &:hover {
            opacity: 1;
        }
    }

    &:hover {

        .header img {
            transform: rotate(180deg);
        }
        
        .dropdown {
            visibility: visible;
            opacity: 1;
            top: 50px;
        }
    }
}

.dropdown {
    position: absolute;
    top: 56px;
    height: fit-content;
    background-color: #0F172A;
    border: 1.4px solid #38405F;
    border-radius: 10px;
    padding: 10px;
    visibility: hidden;
    flex-direction: column;
    transition: all 100ms;
    opacity: 0;

    .option {
        display: grid;
        grid-template-columns: 30px 1fr;
        width: 200px;
        padding: 10px;
        border-radius: 6px;

        .head {
            font-family: "Jost", sans-serif;
            font-weight: 430;
            gap: 10px;
        }

        .desc {
            color: #D4E1FF80;
            font-size: 14px;
            line-height: 18px;
        }
        
        &:hover {
            background-color: #D4E1FF10;
        }
    }
}

.main:has(.dropdown):hover .header {
    opacity: 1;
}

</style>