<template>
    <div class="line">
        <div class="title">ООО "ИКМ Софт"</div>
        <div class="text"> <slot></slot> </div>  
    </div>
</template>

<style lang="scss" scoped>

.line {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.title {
    font-family: "Jost", sans-serif;
    font-size: 30px;
    line-height: 30px;
    font-weight: 600;
}

.text {
    font-size: 17px;
    color: #D4E1FF75;
}

</style>