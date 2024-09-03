export default defineEventHandler(async function _(event) { 

    type Project = {
        href: string
        category: 'web-dev' | 'mobile-dev' | 'bot-dev' | 'soft-dev'
        thumbnail: string
        date: string
        showedOff?: true
        descFull: string
        descShort: string
        commentKey: string
    }

    const allProjects: { [projectName: string]: Project } = {

        "Ваще Проект 1" : {   

            href: 'vasche-project',
            category: 'mobile-dev',
            thumbnail: 'gigachad.webp',
            date: new Date().toLocaleDateString(),
            showedOff: true,

            descFull: `Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
            quis nostrud exercitation`,
            
            descShort: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto 
            voluptate magnam quam eos.`,
            
            commentKey: 'commentKey'
        },

        "Ваще Проект 2" : {   

            href: 'vasche-project',
            category: 'soft-dev',
            thumbnail: 'gigachad.webp',
            date: new Date().toLocaleDateString(),
            showedOff: true,

            descFull: `Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
            quis nostrud exercitation`,
            
            descShort: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto 
            voluptate magnam quam eos.`,
            
            commentKey: 'commentKey'
        },

        "Ваще Проект 1 super mega long name" : {   

            href: 'another-vasche-project',
            category: 'mobile-dev',
            thumbnail: 'gigachad.webp',
            date: new Date().toLocaleDateString(),

            descFull: `Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
            quis nostrud exercitation`,
            
            descShort: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto 
            voluptate magnam quam eos.`,
            
            commentKey: 'commentKey'
        },

        "Ваще Проект 2 super mega long name" : {   

            href: 'another-vasche-project',
            category: 'soft-dev',
            thumbnail: 'gigachad.webp',
            date: new Date().toLocaleDateString(),

            descFull: `Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
            quis nostrud exercitation`,
            
            descShort: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto 
            voluptate magnam quam eos.`,
            
            commentKey: 'commentKey'
        },

        "Ваще Проект 3 super mega long name" : {   

            href: 'another-vasche-project',
            category: 'bot-dev',
            thumbnail: 'gigachad.webp',
            date: new Date().toLocaleDateString(),
            showedOff: true,

            descFull: `Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
            quis nostrud exercitation`,
            
            descShort: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto 
            voluptate magnam quam eos.`,
            
            commentKey: 'commentKey'
        },

        "Ваще Проект 4 super mega long name" : {   

            href: 'another-vasche-project',
            category: 'web-dev',
            thumbnail: 'gigachad.webp',
            date: new Date().toLocaleDateString(),

            descFull: `Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
            quis nostrud exercitation`,
            
            descShort: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto 
            voluptate magnam quam eos.`,
            
            commentKey: 'commentKey'
        }

    }

    const showedOffProjects: { [projectName: string]: Project } = { }
    
    for (let [projectName, project] of Object.entries(allProjects)) {
        if (project.showedOff) showedOffProjects[projectName] = project
    }

    return { allProjects, showedOffProjects }
})