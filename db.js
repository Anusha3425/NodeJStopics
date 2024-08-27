import connectDB from "./datbase.js";
import express from "express";
import bodyParser from "body-parser"
import BookRouter from "./routes/bookdata.js";


var app = express();
const port=5000;

app.get('/', function (req, res) {
    res.send(`Server is running on port ${port}`);
});

app.listen(port, function () {
    console.log('Server is running on http://localhost:5000');
});

app.use(bodyParser.json()) 


app.use('/book', BookRouter)
connectDB();

// const newUser = new User({
//     username: "Anvika",
//     email: "anvika34@gmail.com",
//     password: "Anvika34"
// })

// newUser.save().then(() => { console.log("User added successfully.") })