<template>
    <div class="container">
        <div class="title">{{ title }}</div>
        <span>{{ span }}</span> <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String },
    span: { type: String },
})
</script>

<style lang="scss" scoped>

.container {
    font-size: 17px;
    font-weight: 220;
    max-width: 500px;
    background: linear-gradient(to bottom, #172035, #131928);
    border-radius: 10px;
    padding: 16px;
    border: 1.4px solid #2C334C;
    color: #D4E1FF83;
    cursor: default;

    span {
        color: #EDEDED;
    }

    &:hover {
        background: linear-gradient(to bottom, #182646, #1c253b);
    }
}

.title {
    color: #EDEDED;
    font-family: "Jost", sans-serif;
    font-size: 26px;
    font-weight: 500;
}

</style>