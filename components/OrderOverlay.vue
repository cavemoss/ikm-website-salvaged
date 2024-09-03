<template>
    <div class="overlay" @click="cancelOverlay($event)" v-if="overlay.opened">
        <div class="card" @click="event => event.stopPropagation()">

            <!-- Info -->
            <div class="info">
                
                <div class="header">
                    <img :src="`/icons/${content.icon}`">
                    <span class="top">{{ content.name }}</span>
                    <span class="price">От {{ content.price.toLocaleString('de-DE') }} ₽</span>
                    <span class="bottom">Оставте заявку и мы свяжемся с вами <br>в ближайшее время</span>
                </div>

                <div class="desc" v-if="overlay.service == 'web-dev' && overlay.shorthand">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
                    Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
                    Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
                </div>
                <div class="desc" v-else-if="overlay.service == 'mobile-dev' && overlay.shorthand">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
                    Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
                    Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
                </div>
                <div class="desc" v-else-if="overlay.service == 'bot-dev' && overlay.shorthand">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
                    Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
                    Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
                </div>
                <div class="desc" v-else-if="overlay.service == 'soft-dev' && overlay.shorthand">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
                    Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
                    Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
                </div>

                <div class="tech">
                    <TechIcon v-for="icon in content.tech" :icon="icon" />
                </div>

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

        </div>
    </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue'

const cancelOverlay = inject('cancelOverlay')
const overlay = inject('overlay')

const content = ref({ icon: '', name: '', price: 0, tech: [] })
watch(overlay, function() { 
    switch (overlay.service) {

        case 'web-dev' : 
            content.value.icon = 'site.svg'
            content.value.name = 'Веб рзработка'
            content.value.price = 100000
            content.value.tech = [ 
                'python.png', 
                'fast-api.png', 
                'vue.png', 
                'figma.png' 
            ]
            break
        
        case 'mobile-dev' :
            content.value.icon = 'mobile.svg'
            content.value.name = 'Мобильная Разр.'
            content.value.price = 100000
            content.value.tech = [ 
                'flutter.png', 
                'kotlin.png', 
                'android-studio.png', 
            ]
            break

        case 'bot-dev' :
            content.value.icon = 'bot.svg'
            content.value.name = 'Бот Разработка'
            content.value.price = 100000
            content.value.tech = [ 
                'python.png', 
                'ogram.png'
            ]
            break

        case 'soft-dev' :
            content.value.icon = 'soft.svg'
            content.value.name = 'Разработка ПО'
            content.value.price = 100000
            content.value.tech = [ 
                'python.png', 
                'plane.png', 
                'qt.png', 
            ]
            break
    }
    if (!overlay.shorthand) content.value.tech = null
})

</script>

<style lang="scss" scoped>

.overlay {
    display: flex;
    align-items: center;
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #00000099;

    .card {
        margin: auto;
        height: 70%;
        width: 70%;
        min-width: 1020px;
        min-height: 600px;
        background-color: #0F172A;
        border-radius: 26px;
        display: flex;
        padding: 50px;
        box-sizing: border-box;
        border: 1.4px solid #D4E1FF80;
        overflow: hidden;
    }
}

.info {
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: baseline;
    padding-right: 60px;
    margin: auto 0;

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
        }

        .top {
            font-size: 45px;
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
}

.form {
    flex: 5;
    border-left: 1.4px solid #D4E1FF80;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
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
            resize: vertical;
            max-height: 200px;
            min-height: 20px;
            padding: 8px;
            border-radius: 6px;
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

<style lang="scss" scoped>
@media (max-width: 1020px) {
    .card {
        min-width: 100% !important;
    }
}
</style>