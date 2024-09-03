<template>
    <main>
        <div class="box" @click="useDevice().navigatePush('/main.mobile')">
            <img src="/public/icons/home.svg">
        </div> 
        <div class="header">
            <img :src="`/icons/${thisService?.icon}`">
            <span class="top">{{ thisService?.titleShort ?? thisService?.title }}</span>
            <span class="price">От {{ thisService?.price.toLocaleString('de-DE') }} ₽</span>
            <span class="bottom">Оставте заявку и мы свяжемся с вами <br>в ближайшее время</span>
        </div>
        <dic class="desc">{{ thisService?.desc }}</dic>   
        <div class="tech">
            <TechIcon v-for="icon in thisService?.tech" right :icon="icon.icon" :name="icon.name" />
        </div>
        
        <!-- Form -->
        <form class="form" method="post" action="https://ikmsoft.ru/api/send_request">

            <div class="input">
                <span>Имя</span>
                <input type="text" name="name" placeholder="Имя Фамилия" required>
            </div>

            <div class="input">
                <span>Почта</span>
                <input type="email" name="email" placeholder="me@strong.com" required>
            </div>

            <div class="input">
                <span>Телефон</span>
                <input type="tel" name="phone_number" placeholder="+7 (999) 999-99-99" required >
            </div>

            <div class="input">
                <span>Описание Проекта</span>
                <textarea name="description" placeholder="Опишите проект в двух словах" />
            </div>

            <button type="submit" class="info-btn">
                <img src="/public/icons/send.svg"> Отправить запрос
            </button>
        </form>
    </main>
</template>

<script lang="ts" setup>
import { useAsyncData, useRoute } from '#app'
definePageMeta({ layout: 'empty' })

const apiServicePages = await useAsyncData(() => $fetch('/api/service-pages'))
const router = useRoute()

const getParams = (params: string | string[]): string => 
    Array.isArray(params) ? params.join(", ") : params
    
const service = getParams(router.params.service)
const thisService = apiServicePages.data.value?.find[service]

useDevice().resizeRedirect({ desktop: `/services/${service}` })

</script>

<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px 19px;
    margin-bottom: 160px;
}

.box {
    width: 36px;
    height: 36px;
    background-color: #D9D9D937;
    border: 1.4px solid #D9D9D9;
    border-radius: 8px;
    position: sticky;
    top: 10px;
    margin-right: -9px;
    align-self: flex-end;
    display: flex;
    visibility: visible;
    pointer-events: all;
    z-index: 20;

    img {
        margin: auto;
    }
}

.header {
    font-family: "Jost", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    font-weight: 200;

    .price {
        font-size: 27px;
        background-color: #D4E1FF10;
        color: #00FFD5;
        width: 100%;
    }

    .top {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: -6px;
    }

    .bottom {
        font-size: 20px;
        line-height: 20px;
    }
}

.desc {
    font-size: 16px;
    color: #D4E1FF75;
}

.tech {
    display: flex;
    gap: 12px;
}

.tech-header {
    font-family: "Jost", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #D4E1FF75;
}

.form {
    flex: 5;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 12px;
        
    .input {
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: baseline;

        span {
            font-size: 16px;
        }

        input, textarea {
            caret-color: #FFF;
            background: #131928;
            color: #D4E1FF;
            border: 2px solid #2C334C;
            font-family: "Manrope", sans-serif;
            min-height: 40px;
            padding: 8px;
            border-radius: 6px;
            box-sizing: border-box;
            outline: none;
            width: 100%;

            &::placeholder {
                color: #FFFFFF60;
                font-size: 14px;
            }

            &::selection {
                background: #2C334C;
            }

            &:focus {
                border-color: #D4E1FF67;
                background: #1a2237;
            }
        }

        textarea {
            height: 160px;
            resize: none;
        }

        input[type="submit"] {
            display: none;
        }
    }
}

.info-btn {
    $btn-extr: 2.5px;
    background-color: #EDEDED16;
    color: #EDEDED;
    font-weight: 400;
    font-size: 14px;
    width: fit-content;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1.4px solid #EDEDED80;
    box-shadow: 0 $btn-extr 0 #EDEDED80;
    cursor: pointer;

    &:hover {
        background-color: #EDEDED30;
    }

    &:active {
        margin-top: $btn-extr;
        margin-bottom: -$btn-extr;
        box-shadow: none;
    }

    img {
        position: relative;
        top: 1px;
    }
}

</style>