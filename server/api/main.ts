export default defineEventHandler(async function _(event) { 

    type ServiceTile = {
        service: 'web-dev' | 'mobile-dev' | 'bot-dev' | 'soft-dev'
        imgSrc: string
        imgSrcMini: string
        h2: string
        div: string
    }

    type AboutClause = {
        title: string
        span: string
        text: string
    }


    const serviceTiles: Array<ServiceTile> = [
        {
            service: 'web-dev',
            imgSrc: '/icons/site.svg',
            imgSrcMini: '/icons/site-mini.svg',
            h2: 'Сайты',
            div: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi et fuga odio aut veniam.',
        },
        {
            service: 'mobile-dev',
            imgSrc: '/icons/mobile.svg',
            imgSrcMini: '/icons/mobile-mini.svg',
            h2: 'Мобильная разр.',
            div: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi et fuga odio aut veniam.',
        },
        {
            service: 'bot-dev',
            imgSrc: '/icons/bot.svg',
            imgSrcMini: '/icons/bot-mini.svg',
            h2: 'Боты',
            div: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi et fuga odio aut veniam.',
        },
        {
            service: 'soft-dev',
            imgSrc: '/icons/soft.svg',
            imgSrcMini: '/icons/soft-mini.svg',
            h2: 'Разработка ПО',
            div: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi et fuga odio aut veniam.',
        }
    ]

    const aboutClauses: Array<AboutClause>[] = [
        [
            {
                title: 'Скорость',
                span: 'Быстрее конкурентов!',
                text: `Благодаря отлаженным бизнес процессам и огромному опыту специалистов 
                мы можем опережать конкурентов на недели, а то и месяцы!`
            },
            {
                title: 'Безопасность',
                span: 'Лучше, чем в банке!',
                text: `Все наши продукты используют лучшие системы шифрования и защиты, 
                с нами ваш бизнес в безопасности!`
            },
            {
                title: 'Надежность',
                span: 'Как Швейцарские часы!',
                text: `Мы тщательно тестируем и проверяем все наши продукты, ни одна ошибка 
                или опечатка не помешает стабильной работе!`
            },
        ],
        [
            {
                title: 'Поддержка',
                span: 'Всегда с вами!',
                text: `Все клиенты получают год бесплатной технической поддержки по всем 
                нашим продуктам. Наши специалисты в сети 24/7 и готовы разобраться с любой 
                вашей проблемой как можно скорее!`
            }
        ]
 
    ]

    return { serviceTiles, aboutClauses }
})