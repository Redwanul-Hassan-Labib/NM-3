const path = require("path");

console.log("file path", __filename)
console.log("file directory", __dirname)

console.log("\n" + "-".repeat(50) + "\n")

const filePath = "/redwan/labib/index.js"

console.log("file path", filePath, "\n")
console.log("file Directory:", path.dirname(filePath))
console.log("file baseName:", path.basename(filePath))
console.log("file extaName:", path.extname(filePath))
console.log("file name", path.basename(filePath, path.extname(filePath)))

console.log("\n" + "-".repeat(50) + "\n")

const parsed = path.parse(filePath)
console.log("file is parse:", parsed)

console.log("\n" + "-".repeat(50) + "\n")

 
console.log("format this file:", path.format(parsed))