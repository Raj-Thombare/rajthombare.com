import * as z from 'zod';
export const ContactSchema = z.object({
    name: z.string().min(2, {
        message: 'Name is required'
    }),
    email: z
        .string()
        .min(1, {
            message: 'Email is required'
        })
        .email({
            message: 'Email is Invalid'
        })
    ,
    message: z.string().min(2, {
        message: 'Message is required'
    }),
})