export default defineEventHandler(async function _(event) { 

    type Comment = {
        pfp: string
        name: string
        role: string
        commentBody: string
    }

    const find: { [commentKey: string]: Comment } = {

        "commentKey" : {
            pfp: 'pfp.jpg',
            name: 'Semion Ikissmen',
            role: 'Chief Executive Officer of the epic style',
            
            commentBody: `Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Veniam nihil, doloremque quia saepe 
            consequatur.`
        }

    }

    return { find }
})