<template>
    <div class="main">
        <div class="header">Категории</div>
        <div class="categories" ref="categories">

            <div v-for="option in content" 
            class="option" :id="option.id"
            :class="{ highlighted: option.id === $route.query.category }"
            @click.prevent="highlightOption"
            >
                <div> <img :src="`/icons/${option.icon}`"> </div>
                {{ option.name }}
            </div>
        
        </div>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'
defineProps({
    content: { type: Array }
})

const categories = ref()
const currentCategory = inject('currentCategory')

function highlightOption(event) {
    
    let allOptions = Array.from(categories.value.children)
    let otherOptions = allOptions.filter(element => element.id !== event.currentTarget.id)
    otherOptions.forEach(element => element.classList.remove('highlighted'))

    event.currentTarget.classList.toggle('highlighted')
    if (currentCategory.value !== event.currentTarget.id) currentCategory.value = event.currentTarget.id
    else currentCategory.value = null
}

</script>

<style lang="scss" scoped>

$border-width: 1.4px;

.main {
    height: fit-content;
    width: 400px;
    position: sticky;
    top: 100px;
}

.header {
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-left: -$border-width;
    margin-bottom: 12px;
    color: #D9D9D9;
}

.categories {
    padding: 6px 0;
    border-left: $border-width solid #D9D9D960;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .option {
        align-items: center;
        border-left: 0 solid #D9D9D9;
        color: #D9D9D9;
        font-weight: 360;
        font-family: "Jost", sans-serif;
        transition: all 100ms;
        display: flex;
        align-items: center;
        padding-left: 10px;
        margin-left: -$border-width;
        opacity: 0.5;
        cursor: pointer;

        div {
            width: 30px;
            text-align: center;
        }

        &:hover {
            border-width: $border-width + 3px;
            opacity: 1;
        }
    }

    .highlighted {
        border-width: $border-width + 3px;
        opacity: 1;
    }
}

</style>

<style lang="scss" scoped>
@media (max-width: 1000px) {
    .main {
        position: relative;
        top: 0;
    }
}
</style>
