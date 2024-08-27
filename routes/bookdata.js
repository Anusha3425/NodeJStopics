import {getBook, postBook, updateBook, deleteBook} from "../controllers/booksdata.controller.js";
import express from "express";

const BookRouter=express.Router();

BookRouter.get('/', getBook)
BookRouter.post('/', postBook);
BookRouter.put('/:id', updateBook);
BookRouter.delete('/:id', deleteBook);

export default BookRouter;