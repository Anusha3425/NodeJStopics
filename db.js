import connectDB from "./datbase.js";
import express from "express";
import bodyParser from "body-parser"
import BookRouter from "./routes/bookdata.js";
import UserRouter from "./routes/user.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


var app = express();
const port=3000;
// app.set("view engine", "ejs");
// app.set("views", path.resolve("./views"));

app.get('/', function (req, res) {
    res.send(`Server is running on port ${port}`);
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
  });

app.get('/login', (req,res)=>{
    res.sendFile(__dirname+ '/login.html');
})


app.listen(port, function () {
    console.log('Server is running on http://localhost:3000');
});

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/book', BookRouter)
app.use('/user',  UserRouter)
connectDB();

// Pagination example
// app.get('/items', (req, res) => {
//     const { page = 1, limit = 10 } = req.query;
//     const startIndex = (page - 1) * limit;
//     const endIndex = startIndex + parseInt(limit);
  
//     const results = items.slice(startIndex, endIndex);
//     res.json(results);
//   });
  

// const newBook = new Book({
//     bookname: "Ignited minds",
//     author: "Abdul kalam",
//     published_year: 2012
// })

// newBook.save().then(() => { console.log("Book added successfully.") })