<template>
    <div class="comment">
        <div class="body"> <slot>
            <!-- comment text -->
        </slot> </div>
        <div class="profile">
            <img :src="`/media/${pfp}`">
            <div class="text">
                <div class="name">{{ name }}</div>
                <div class="role">{{ role }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    pfp: { type: String },
    name: { type: String },
    role: { type: String },
})
</script>

<style lang="scss" scoped>

.comment {
    width: 400px;
    height: fit-content;
    background-color: #0F172A;
    border: 1.4px solid #38405F;
    border-radius: 10px;
    font-weight: 220;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.profile {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .text {
        display: flex;
        flex-direction: column;

        .name {
            font-family: "Jost", sans-serif;
            font-size: 20px;
            font-weight: 500;
        }

        .role {
            margin-top: -2px;
            font-size: 14px;
            font-weight: 340;
            color: #D4E1FF63;
        }
    }
}

</style>