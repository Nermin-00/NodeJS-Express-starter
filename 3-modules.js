//Global variables in node.
//__dirname - path to curr. dir.
//__filename - file name
//require - function to use modules(CommonJS)
//module - info about current module (file)
//process - inf. ab. env. where the program is being exeec.

//  console.log(module)

//CommonJS, every file is a module
//Modules - Encapsulated Code(only share minimum)

//In order to access  variables from 4-names.js we use require.
//We can assign it or require it.

//Importing modules, connecting app.js with 4-names.js & 5-utils.js
const names = require('./4-names');
const sayHi = require('./5-utils')

//Logging a module from 4-names.js that we previously shared from 4-names.js, and then imported it into app.js 
console.log(names)

//Invoking a function that we exported from 5-utils.js and we imported in the app.js
sayHi("Brian")
    
console.log(module)