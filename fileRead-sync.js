const fs = require("fs");

try {
    const fileRead = fs.readFileSync("./data/doc.txt" ,"utf-8");
    console.log(fileRead);
    
} catch (error) {
    console.error(error.message);
}


