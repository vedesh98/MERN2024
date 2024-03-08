const { z } = require("zod");


// Creating an object
module.exports.signupSchema = z.object({
    username: z
        .string({ required_error: "Name is reuired" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 chars. " })
        .max(255, { message: "Name must not be more than 255 charecters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast of 3 chars. " })
        .max(255, { message: "Name must not be more than 255 charecters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone no. must be atleast of 10 charecters" })
        .max(20, { message: "Phone no. must not be more than 20 charecters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 7 characters" })
        .max(20, { message: "Password must not be more than 20 charecters" })

})

module.exports.loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),
    password: z
        .string({ required_error: "Password is required" })

})

module.exports.contactSchema = z.object({
    username: z
        .string({ required_error: "Name is reuired" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 chars. " })
        .max(255, { message: "Name must not be more than 255 charecters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" }),
})


module.exports.videoSchema = z.object({
    title: z.string({ required_error: "Title is reuired" }),
    description: z.string({ required_error: "Description is reuired" }),
    video_file_path: z.string({ required_error: "Path is reuired" }),
    thumbnail_URL: z.string({ required_error: "URL is reuired" }),
    subscription: z.string({ required_error: "Subscription level is reuired" }),
    //  requirements: ,
})