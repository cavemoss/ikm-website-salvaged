<template>
    <div class="main">
        <div class="header">Категории:</div>
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

.main {
    margin-top: 16px;
}

.header {
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 5px;
    color: #D9D9D9;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 12px;

    .option {
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #D9D9D930;
        color: #D9D9D9;
        font-weight: 360;
        font-family: "Jost", sans-serif;
        transition: all 100ms;
        opacity: 0.5;
        padding: 2px 10px;
        border-radius: 4px;

        div {
            display: flex;
            align-items: center;
        }
    }

    .highlighted {
        box-shadow: 0 0 0 1.4px #D9D9D9;
        opacity: 1;
    }
}

</style>