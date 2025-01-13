import mongoose from "mongoose";

let blogSchema = mongoose.Schema({
    title : {
        type:String
    },
    description : {
        type:String
    }
})

let Blog = mongoose.models.Blogs || mongoose.model("Blogs",blogSchema)
export default Blog