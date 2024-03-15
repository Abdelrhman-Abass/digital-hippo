import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyAPiRoute : publicProcedure.query(()=>{
        return 'hello'
    })
})

export type AppRouter = typeof appRouter