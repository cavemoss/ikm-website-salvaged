<template>
    <div class="line">

        <div class="image">
            <img src="/public/logo.png">
            <div></div>
        </div>

        <div class="content">
            <div class="main">
                <div class="title">ООО "ИКМ Софт"</div>
                <div class="text"> <slot>
                    <!-- about text -->
                </slot> </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

.line {
    $height: 400px;
    height: $height;
    width: 100%;
    display: flex;
    align-items: center;

    .image {
        height: 100%;
        flex: 0.43;
        display: flex;
        flex-direction: column;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }

        div {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 10;
            margin-top: -$height;
            background: linear-gradient(to left, #0F172A 0%, #0F172A00 40%);
        }
    }

    .content {
        flex: 0.57;
        background: linear-gradient(to left, #0B111F, #0B111F00);
        padding: 50px 30px;
        display: flex;  
        gap: 20px;

        .main {
            display: flex;
            margin-right: 20px;
            flex: 0.75;
            flex-direction: column;
            align-items: baseline;
            gap: 10px;
        }
    }
}

.title {
    font-family: "Jost", sans-serif;
    font-size: 40px;
    line-height: 40px;
    font-weight: 500;
}

.text {
    font-size: 20px;
    color: #D4E1FF75;
}

</style>