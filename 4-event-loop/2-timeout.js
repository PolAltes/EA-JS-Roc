// Call Stack
console.log("Hello"); 

setTimeout(()=>{
    console.log("proba2")
},0);

// Event Queue
setTimeout(() => { 
    console.log("Time")
}, 1); 

setTimeout(() =>{
    console.log("proba1")
},0);

// Call Stack
console.log("World"); 
