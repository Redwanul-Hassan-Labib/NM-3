const os = require("os");

console.log("os file dekhar jonno \n")

console.log("-".repeat(50))
console.log("kon platform a run hosce")
console.log("os platform:", os.platform());
console.log("os arche:", os.arch());
console.log("os release:", os.release())
console.log("os hostname:", os.hostname())
console.log("os machine:", os.machine())
console.log("os availableParallelism:", os.availableParallelism())
console.log("os endianness:", os.endianness())
console.log("os homedirctory:", os.homedir())
console.log("os tmpdir:", os.tmpdir())
console.log("os version:", os.version())
console.log("os type:", os.type())
// console.log("os cpus:", os.cpus())
console.log("os getPriority:", os.getPriority())
console.log("os loadavg:", os.loadavg())
// console.log("os update:", os.uptime())
console.log("os totalmem:", os.totalmem() / 1024/1024/1024 , "GB")
console.log("os freemem:", os.freemem() / 1024/1024/1024 , "GB")


console.log("os file dekhar jonno \n")


const UpdateTime = os.uptime()

const days = Math.floor((UpdateTime / 86400))
const hours = Math.floor((UpdateTime % 86400)/3600)
const minutes = Math.floor((UpdateTime % 3600)/60)

console.log(`${days} Day ${hours} Hour ${minutes} Minute`)

console.log("os file dekhar jonno \n")


const CPUs = os.cpus();

console.log("Cpus model:", CPUs[0].model)
console.log("Cpus core:", CPUs.length);
console.log("cpu speed:" , CPUs[0].speed)
console.log("cpu Time:" , CPUs[0].times)



console.log("os file dekhar jonno \n")

const userInfo = os.userInfo();


console.log("username:", userInfo.username)
console.log("shell:", userInfo.shell)
console.log("gid:", userInfo.gid)
console.log("uid:", userInfo.uid)
console.log("homedir:", userInfo.homedir)
