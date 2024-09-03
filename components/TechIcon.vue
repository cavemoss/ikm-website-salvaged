<template>
    <div class="tech-icon" :class="{ 'left-slide' : left, 'right-slide' : right }">
        <img :src="`/icons/${icon}`">
        <span>{{ name }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps({
    icon: { type: String },
    name: { type: String },
    right:  { type: Boolean, default: false },
    left:  { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>

.tech-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    margin: 0;
    cursor: default;

    &:hover {
        z-index: 30;

        span{
            opacity: 1;
        }

        .left-slide {
            transform: translateX(-98%);
        }

        .right-slide {
            transform: translateX(98%);
        }
    }
}

.left-slide {

    span {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:hover {
        z-index: 30;

        span{
            transform: translateX(-98%);
        }
    }
}


.right-slide {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
    
    span {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:hover {
        z-index: 30;

        span{
            transform: translateX(98%);
        }
    }
}

img {
    width: 50px;
    z-index: 10;
}
    
span {
    width: fit-content;
    position: absolute;
    line-height: 12px;
    box-sizing: border-box;
    opacity: 0;
    transition: all 100ms;
    padding: 8px;
    border-radius: 4px;
    
    background-color: #4d4953;
    pointer-events: none;
}

</style>