import mongoose from "mongoose";

const bookSchema=new mongoose.Schema(
    {
        bookname: {
            type: String,
            required:true,
        },
        author:{
            type: String,
            required:[true, "Author name is required"],
            unique:true
        },
        published_year:{
            type: Number,
            required: [true, "Year is required"]
        }
    },{timestamps:true}
)

export const Book=mongoose.model("Book", bookSchema)