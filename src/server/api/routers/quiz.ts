import { z } from "zod";


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "y/server/api/trpc";

export const quizRouter = createTRPCRouter({
    getQuestions: publicProcedure
    .query(({ctx}) => { 
        return ctx.prisma.question.findMany()
    })
})