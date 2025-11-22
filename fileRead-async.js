const { error } = require("console");
const fs = require("fs");

fs.readFile("./data/doc.txt", "utf-8" , (error ,data )=> {
    if (error) {
        console.error(error.message);
    }
    console.log(data);
})

//! ekhane a thread onijaye kaj kore.