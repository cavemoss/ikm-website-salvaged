export default defineEventHandler(async function _(event) { 

    type ServiceLine = {
        title: string
        titleShort?: string
        image: string
        icon: string
        price: number
        tech: { icon:string, name:string }[]
        desc: string
    }

    const find: { [service: string]: ServiceLine } = {

        'web-dev' : {
            title: 'Веб разработка',
            image: 'service-web.jpg',
            icon: 'site.svg',
            price: 100000,
            tech: [ 
                { icon: 'python.png', name: 'python' },
                { icon: 'fast-api.png', name: 'fast api' },
                { icon: 'vue.png', name: 'vue.js' },
                { icon: 'figma.png', name: 'figma' }
            ],

            desc:  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.`
        },

        'mobile-dev' : {
            title: 'Мобильная разработка',
            titleShort: 'Мобильная разр.',
            image: 'service-mobile.jpg',
            icon: 'mobile.svg',
            price: 100000,
            tech: [ 
                { icon: 'flutter.png', name: 'flutter' },
                { icon: 'kotlin.png', name: 'kotlin' },
                { icon: 'android-studio.png', name: 'android studio' },
            ],
            
            desc:  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.`
        },

        'bot-dev' : {
            title: 'Разработка ботов',
            image: 'service-bot.jpg',
            icon: 'bot.svg',
            price: 100000,
            tech: [ 
                { icon: 'python.png', name: 'python' },
                { icon: 'ogram.png', name: 'aiogram & pyogram' },
            ],
            
            desc:  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.`
        },

        'soft-dev' : {
            title: 'Разработка ПО',
            image: 'service-soft.jpg',
            icon: 'soft.svg',
            price: 100000,
            tech: [
                { icon: 'python.png', name: 'python' },
                { icon: 'plane.png', name: 'plane' },
                { icon: 'qt.png', name: 'qt designer' },
            ],
            
            desc:  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, libero? 
            Suscipit error fuga sit quidem saepe cupiditate maiores magnam velit non. 
            Laboriosam optio eaque itaque, dicta maxime cumque laborum ducimus.`
        }
    }

    return { find }
})