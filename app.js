//Global variables in node.
// __dirname - path to curr. dir.
// __filename - file name
// require - function to use modules(CommonJS)
// module - info about current module  (file)
// process - inf. ab. env. where the program is being exeec.

//  console.log(module)
// CommonJS, every file is a module
//Modules - Encapsulated Code (only share minimum)

//In order to access  variables from 4-names.js we use require.
//We can assign it or require it.
const names = require('./4-names');

console.log(names)