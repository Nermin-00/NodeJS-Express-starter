//Asynchronous event loop example.
/* 
const { readFile } = require('fs')

console.log("Started 1st task.")
//readFile is asynchronous and it will be off loaded
readFile('./content/example.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed 1st task')
})
console.log("starting next task") */

//Asynchronous example
console.log('first')
//setTimeout gets offloaded because its asynchronous
//setTimeout() is an asynchronous function and it will not pause other functions in the stack.
setTimeout(() => {
    console.log('second')
}, 0)

console.log('third')