import { dbConnect } from "@/config/dbConnect";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
dbConnect()
    try {


        let id = await params.id

        let blog = await Blog.findById(id)

        return NextResponse.json({
            blog
        },{status:200})

        
    } catch (error) {
        return NextResponse.json({
            message : "Error in getting data"
        },{status:400})
    }
    
}