const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("./output/tepm.txt", "this file is created")
console.log("file create");

fs.existsSync("./output/tepm.txt")
console.log("file ekhne ace");


fs.unlinkSync("./output/tepm.txt" );
console.log("file delete hoye gece");

// try {
//     fs.unlinkSync("./output/tepm.txt")
//     console.log("file ta ke abar delete kro");
// } catch (error) {
//     console.error(error.message);
// }

fs.writeFile("./output/temp2.txt" ,"this file is tremp2", (error)=>{
    if (error) {
        console.error(error.message)
    }else{
        console.log("tremp2 file created")
    }

    fs.unlink("./output/temp2.txt" , (error)=>{
        if (error) {
            console.error(error.message)
        }else{
            console.log("file thik moto delete hoice")
        }
    })
})