// Routing refers to determining how an application responds to a client request to a particular endpoint, 
// which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

// app.Method(PATH, HANDLER)
// Method: GET, POST, PUT, DELETE
// PATH: path on the server
// Handler: handler function executed when route matches
import express from 'express';

const app=express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/', (req, res)=>{
    res.send("Got post request")
})

app.put('/user', (req, res)=>{
    res.send("Got put request")
})

app.delete('/user', (req, res)=>{
    res.send("Got Delete request")
})

app.listen(5000, ()=>{
    console.log("Server is runnning at http://localhost:5000")
})