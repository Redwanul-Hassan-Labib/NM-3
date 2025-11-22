const { error } = require("console");
const fs = require("fs")

const contain1 = " this items is avaible \n this Synchronous"

try {
    fs.writeFileSync("./output/test-sync.txt" , contain1 )
    console.log("contain is ready");
} catch (error) {
    console.error(error.message);
}


const contain2 = " this items is ready \n but this asynchonous"

fs.writeFile("./output/text-async.txt" , contain2, (error)=>{
    if (error) {
        console.error(error.message);
    }else{
        console.log("data cole gece");
    }
})