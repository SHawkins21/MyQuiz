import { z } from "zod";
import { protectedProcedure, 
    createTRPCRouter } from '../trpc' 

//Crud API 


export const myNoteRoute = createTRPCRouter({

    allNotes: protectedProcedure.query(({ctx}) => {
        return ctx.prisma.myNote.findMany({
            select:{
                title:true,
                id:true,
                Catagories:{
                    select:{
                        title:true
                    }
                }
            },


        })
    })


})