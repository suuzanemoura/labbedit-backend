import { z } from "zod"

export const GetPostsSchema = z.object({
    query: z.string().min(1).optional(),
    token: z.string().min(1)
})

export type GetPostsInputDTO = z.infer<typeof GetPostsSchema>

export const GetPostsSchemaOutput = z.array(
    z.object({
        id: z.string(),
        content: z.string(),
        comments: z.number(),
        likes: z.number(),
        dislikes: z.number(),
        createdAt: z.string(),
        updatedAt: z.string(),
        creator: z.object({
            id: z.string(),
            username: z.string()
        })
    })
)

export type GetPostsOutputDTO = z.infer<typeof GetPostsSchemaOutput>