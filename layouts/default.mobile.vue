<template>

    <!-- <NuxtParticles id="tsparticles" url="/assets/particles.json" /> -->

    <BurgerMenuMobile />

    <div id="view-port-mobile">

        <NuxtPage />

        <footer>
            <div class="entry">
                <span>Юр. Адрес:</span>
                125167, Россия, г. Москва, 
                вн.тер.г. муниципальный округ Хорошевский, 
                Ленинградский пр-кт, д. 45, к. 2, помещ. 1п
            </div>

            <div class="entry">
                <span>Телефон:</span>
                +7(995)-792-20-57
            </div>

            <div class="entry">
                <span>ОГРН:</span>
                1247700192233
            </div>

            <div class="entry">
                <span>ИНН:</span>
                9714041898
            </div>

            <div class="entry">
                <span>КПП:</span>
                771401001
            </div>

            <div class="social-media">
                <SocialMediaBtn icon="mail.svg" href="mailto:hello@ikmsoft.ru" />
                <SocialMediaBtn icon="telegram.svg" href="https://t.me/ikmsoft" />
            </div>
            
        </footer>
    </div>

</template>

<style>

#tsparticles canvas {
    z-index: -10;
}
#view-port-mobile {
    padding: 22px 16px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
}
#view-port-mobile::-webkit-scrollbar {
    opacity: 0;
    width: 0;
}
* {
    caret-color: transparent;
}
::selection {
    background: none;
}
body {
    /* 
    background-image: url(/public/assets/bg.png); 
    */
    background-color: #0F172A;
    color: #EDEDED;
    font-family: "Manrope", sans-serif;
    margin: 0;
}

</style>

<style lang="scss" scoped>

footer {
    margin: -22px -16px;
    margin-top: 100px;
    background-color: #00041390;
    backdrop-filter: blur(8px);
    font-size: 14px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
}
.entry {
    color: #D4E1FF75;

    span {
        color: #EDEDED;
        font-weight: 500;
    }
}
.social-media {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>