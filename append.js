const fs = require("fs")

fs.writeFileSync("./output/app.log" , "this file is opening \n");
console.log("file created");

const logEntry1 = ` ${new Date().toISOString()} log file opening this time`

fs.appendFileSync("./output/app.log", logEntry1);


const logEntry2 = ` \n ${new Date().toISOString()} this file recnt assign`
fs.appendFileSync("./output/app.log", logEntry2);
console.log("file runing");
