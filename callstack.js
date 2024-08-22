// Callstack: represents the mechanism by which the JavaScript engine keeps track of function calls in a program.
// It operates as last in first out, i.e., the function called last will be exceuted first.

function first(){
    console.log("First function")
}
function second(){
    first();
    console.log("Second function")
}

second();

// When a function is called, a new frame is created and pushed onto the top of the call stack.
// This frame contains information about the function, including its arguments and local variables.

// Event Loop:
// event loop allows Node to perform non-blocking i/o operations despite the fact that JavaScript is single-threaded. 
// it waits for tasks, it executes functions, if callstack is empty.

console.log("print this first");

setTimeout(function(){
    console.log("print this second"),5000
})

console.log("print this third")

