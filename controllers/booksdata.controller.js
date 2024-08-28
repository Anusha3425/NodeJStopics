import {Book} from "../models/booksdata.models.js";

 export const getBook = async (req, res) => {
    try {const books=await Book.find();
    res.status(200).json({data: books});
    console.log("Success")}
    catch(error){
      console.log(error)
    }
 }

 

 export const postBook=async(req,res)=>{
    try{const books= new Book(req.body);
    res.status(201).json({data: books, message:"Book details added successfully."})
    books.save();}

   catch(error){
      res.status(400).json({error:error})
   }
 }

 export const updateBook=async(req, res)=>{
    const {id}=req.params;
    const books=await Book.findByIdAndUpdate(id,req.body, {new: true});
    if(!books){
        res.status(404).send("Book not found");
    }
    res.status(200).json({data: books, message:"Book details Updated successfully"})
 }

 export const deleteBook=async(req, res)=>{
    const {id}=req.params;
    const books=await Book.findByIdAndDelete(id);
    if(!books){
        res.status(404).send("Book not found");
    }
    res.status(200).json({message: "Successfully deleted"})
 }
