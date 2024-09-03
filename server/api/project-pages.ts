export default defineEventHandler(async function _(event) { 

    type Slide = {
        mediaType: 'image' | 'video'
        mediaSource: string
        title: string
        body: string
    }
    
    const find: { [href: string]: Slide[] } = {
        
        "vasche-project" : [
            {
                mediaType: 'image',
                mediaSource: '/media/gigachad.webp',
                title: 'Очень круто',

                body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, 
                nesciunt numquam commodi in at tempore omnis! Nemo earum harum 
                maiores at nesciunt magnam in, facilis debitis! Pariatur impedit.`
            },
            {
                mediaType: 'image',
                mediaSource: '/media/gigachad.webp',
                title: 'Очень круто',

                body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, 
                nesciunt numquam commodi in at tempore omnis! Nemo earum harum 
                maiores at nesciunt magnam in, facilis debitis! Pariatur impedit.`
            },
            {
                mediaType: 'video',
                mediaSource: '/media/videoplayback.mp4',
                title: 'Очень круто',

                body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, 
                nesciunt numquam commodi in at tempore omnis! Nemo earum harum 
                maiores at nesciunt magnam in, facilis debitis! Pariatur impedit.`
            }
        ],

        "another-vasche-project" : [
            {
                mediaType: 'image',
                mediaSource: '/media/gigachad.webp',
                title: 'Очень круто',

                body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, 
                nesciunt numquam commodi in at tempore omnis! Nemo earum harum 
                maiores at nesciunt magnam in, facilis debitis! Pariatur impedit.`
            },
            {
                mediaType: 'image',
                mediaSource: '/media/gigachad.webp',
                title: 'Очень круто',

                body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, 
                nesciunt numquam commodi in at tempore omnis! Nemo earum harum 
                maiores at nesciunt magnam in, facilis debitis! Pariatur impedit.`
            },
            {
                mediaType: 'video',
                mediaSource: '/media/videoplayback.mp4',
                title: 'Очень круто',

                body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, 
                nesciunt numquam commodi in at tempore omnis! Nemo earum harum 
                maiores at nesciunt magnam in, facilis debitis! Pariatur impedit.`
            }
        ]

    }

    return { find }
})