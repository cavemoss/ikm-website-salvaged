<template>
    <div class="tile" @click="$router.push(href)">
        <div class="header">
            <img :src="icon"> {{ title }}
        </div>
        <div class="desc"> <slot></slot> </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String },
    icon: { type: String },
    href: { type: String }
})

</script>

<style lang="scss" scoped>

.tile {
    background: linear-gradient(to bottom, #172035, #131928);
    border-radius: 16px;
    border: 1.4px solid #2C334C;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    transition: all 100ms;
    gap: 10px;

    &:hover {
        background: linear-gradient(to bottom, #182646, #1c253b);
        transform: scale(0.98);
    }
}

.header {
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 22px;
    display: flex;
    align-items: flex-end;
    gap: 10px;
}

.desc {
    color: #D4E1FF80;
}

</style>