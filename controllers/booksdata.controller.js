import {Book} from "../models/booksdata.models.js";

 export const getBook = async (req, res) => {
    const user=await Book.find();
    res.status(200).json({data: user});
    console.log("Success")
 }

 export const postBook=async(req,res)=>{
    const user= new Book(req.body);
    res.status(201).json({data: user, message:"Book details added successfully."})
    user.save();
 }

 export const updateBook=async(req, res)=>{
    const {id}=req.params;
    const user=await Book.findByIdAndUpdate(id,req.body, {new: true});
    if(!user){
        res.status(404).send("Book not found");
    }
    res.status(200).json({data: user, message:"Book details Updated successfully"})
 }

 export const deleteBook=async(req, res)=>{
    const {id}=req.params;
    const user=await Book.findByIdAndDelete(id);
    if(!user){
        res.status(404).send("Book not found");
    }
    res.status(200).json({message: "Successfully deleted"})
 }
