<template>
    <div class="container">
        <div class="header">
            {{ title }} <span>{{ span }}</span>
        </div>
        <div class="text"> <slot> </slot> </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String },
    span: { type: String }
})
</script>

<style lang="scss" scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: linear-gradient(to bottom, #172035, #131928);
    border-radius: 16px;
    padding: 10px;
    box-sizing: border-box;
}

.header {
    font-family: "Jost", sans-serif;
    flex: 4;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    display: flex;
    align-items: end;

    span {
        display: flex;
        align-items: center;
        height: 20px;
        font-size: 20px;
        font-weight: 240;
    }
}

.text {
    flex: 5;
    color: #D4E1FF80;
}

</style>