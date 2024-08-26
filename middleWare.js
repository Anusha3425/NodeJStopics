const express=require('express')
const compression=require('compression')

const app=express()

// we can have stack of middlerware functions
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
  }
  
app.use(logger);

app.use((req, res, next) => {
    console.log('First middleware');
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Second middleware');
    next();
  });

app.use(compression());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(5000, ()=>{
    console.log("Server is runnning at http://localhost:5000")
})

  
//   app.get('/', (req, res) => {
//     res.send('Hello, world!');
//   });
  
// Middleware works between request and response cycle.
// It has access to object, response object, next it can process the request before the server sends request
// takes 3 arguments, req, res, and next(calls next middlerware functions in the stack)

// built-in middlerware:
// express.json() Parses incoming JSON requests and puts the parsed data in req.body.
// express.urlencoded({ extended: true }): Parses incoming URL encoded requests and puts the parsed data in req.body.

// third party middlewares:
// morgan is a popular third party logging middleware
// body-parser: it processes http requests in node
// Body-parser supports various types of request bodies including JSON, URL-encoded data, raw text, and even multi-part data
// We also use the bodyParser.urlencoded() middleware function to parse incoming requests with URL-encoded payloads

// Cookie-parser: is a middleware for handling HTTP cookies in Node.js with Express
// compression:  it compresses the data and hence it reduces the size of data

// custom middleware: 
// we can create our own middlewares for authentication, logging etc.

  