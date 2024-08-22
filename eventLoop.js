// Event Loop:
// event loop allows Node to perform non-blocking i/o operations despite the fact that JavaScript is single-threaded. 
// it waits for tasks, it executes functions, if callstack is empty.

console.log("print this first");

setTimeout(function(){
    console.log("print this second"),5000
})

console.log("print this third")

// Phases of event loop:
// 1. Timers: this is the phase processes timers set through setTime out or setInterval methods.
console.log("A");
setTimeout(function(){
    console.log("B")
})
console.log("C")

// 2. Pending Callbacks: functions that have been added to the msg queue bu async function
// setImmediate 
console.log("1")
setImmediate(()=>{
    console.log("2")
})
console.log("3")

// 3. idle, prepare: In idle phase, the vent loop has nothing to do, they can used to do backgorund tasks, 
// like running garbage collections, checking low priority tasks.

// 4. Poll: it is used to check if there are any new i/o tasks, if detected are processed.

// 5. check: it processes if there are any setImmediate function added to the message queue.

// close callback: executes callback functions for events such as `socket.on(close)` and `process.on(exit)`