//BUILT-IN Module os
const os = require('os')

//Info about current user
//os is a module os.userInfo() is a method
const user = os.userInfo()
console.log(user)

//method returns the system uptime
console.log(`The sys. uptime is ${os.uptime()}seconds) `)


//An object whose properties are connected to methods.
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem
}
console.log(currentOS)