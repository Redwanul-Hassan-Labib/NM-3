const args = process.argv;

const name = args[2] || "guest"
const time = new Date().getHours()

let  geating;

if (time < 12) {
    geating = "good morning"
} else if (time < 18) {
    geating = "good noon"
} else{
    geating = " good night"
}

console.log(`${geating} ${name}`);
