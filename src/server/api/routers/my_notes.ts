import { z } from "zod";
import { protectedProcedure, 
    createTRPCRouter } from "~/server/api/trpc"; 

//Crud API 


export const myNoteRoute = createTRPCRouter({

    allNotes: protectedProcedure.query(({ctx}) => {
        return ctx.prisma.myNote.findMany({
            select:{
                title:true,
                id:true,
                Categories:{
                    select:{
                        title:true
                    }
                }
            },


        })
    })


})