// Modules: encapsulated code that will be interacting with external file based ont heir functinal requirement.
// They can be single file or multiple files,
// They are core modules, local mudles, 3rd party modules

// Core modules: node js have built in modules, they can be loaded into the function by using require function.
// 
const http=require('http')
http.createServer(function(req, res){
    // res.writeHead(200, {'Content-Type':'text/html'})
    const rs=createReadStream('./staticFolder/index.html')
    // createReadStream: open up a file/stream and read the data present in it.
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("Hello, server is runnin on port 3000")
    // writeHead: send a response header to the incoming request
    rs.pipe(res);
    // piping: process by which byte data from one stream is sent to another stream, allows transfer of data
}). listen(3000);

// some of the core modules:
// http: to create http severs,
// fs: while dealing with the file system,
// asserts: with assert functions,
// path: with file paths

// Local Modules: other than extrnal and build in modules, we can build local modules.

const calculator=require('./calculator.js');
const { createReadStream } = require('fs');
let x=2, y=1;

console.log(calculator.add(x,y));
console.log(calculator.sub(x,y));
console.log(calculator.mul(x,y));
console.log(calculator.div(x,y));

