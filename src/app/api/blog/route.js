// POST,GET,PUT,PATCH,DELETE
import { dbConnect } from "@/config/dbConnect"
import Blog from "@/models/Blog"
import { NextResponse } from "next/server"

export async function POST(req) {
   dbConnect()
    try {
        let {title,description} = await req.json()

        let blog = await Blog.create({title,description})

        return NextResponse.json({
            message : "Blog created",
            blog
        },{status:200})

    } catch (error) {
        return NextResponse.json({
            message : "Error"
        },{status:400})
    }
}